import cv2
import mediapipe as mp
import numpy as np
import math
import time

# STEP 1: Import all necessary modules.
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
# We also need this for creating the protobuf object for drawing
from mediapipe.framework.formats import landmark_pb2

# --- Tracking Globals ---
tracked_people = {}
next_person_id = 1
DISTANCE_THRESHOLD = 0.15 # Increased threshold slightly for better matching

# STEP 2: Configure and create the landmarker with VIDEO mode.
model_path = 'pose_landmarker_lite.task'
BaseOptions = mp.tasks.BaseOptions
PoseLandmarkerOptions = vision.PoseLandmarkerOptions
VisionRunningMode = vision.RunningMode

options = PoseLandmarkerOptions(
    base_options=BaseOptions(model_asset_path=model_path),
    running_mode=VisionRunningMode.VIDEO,
    num_poses=5
)

# STEP 3: The main video processing loop.
def main():
    global next_person_id, tracked_people
    
    cap = cv2.VideoCapture('video/shoplift-9.mp4')
    
    with vision.PoseLandmarker.create_from_options(options) as landmarker:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret:
                break

            h, w, _ = frame.shape
            mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
            frame_timestamp_ms = int(time.time() * 1000)
            
            detection_result = landmarker.detect_for_video(mp_image, frame_timestamp_ms)

            current_detections = {}
            if detection_result.pose_landmarks:
                for person_idx, pose_landmarks in enumerate(detection_result.pose_landmarks):
                    center_x = (pose_landmarks[mp.solutions.pose.PoseLandmark.RIGHT_HIP.value].x + 
                                pose_landmarks[mp.solutions.pose.PoseLandmark.LEFT_HIP.value].x) / 2
                    center_y = (pose_landmarks[mp.solutions.pose.PoseLandmark.RIGHT_HIP.value].y + 
                                pose_landmarks[mp.solutions.pose.PoseLandmark.LEFT_HIP.value].y) / 2

                    # **FIX IS HERE**: We create the protobuf object needed for drawing right away
                    pose_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
                    pose_landmarks_proto.landmark.extend([
                        landmark_pb2.NormalizedLandmark(x=lm.x, y=lm.y, z=lm.z) for lm in pose_landmarks
                    ])
                    
                    current_detections[person_idx] = {
                        'center': (center_x, center_y), 
                        'landmarks': pose_landmarks, # Keep the raw landmarks for logic
                        'landmarks_proto': pose_landmarks_proto # Keep the proto for drawing
                    }
            
            # --- Multi-person matching logic (remains the same) ---
            matched_ids = set()
            unmatched_detections = set(current_detections.keys())
            
            if tracked_people and current_detections:
                for person_id, tracked_info in list(tracked_people.items()):
                    min_dist = float('inf')
                    best_match_idx = -1
                    
                    for det_idx in unmatched_detections:
                        dist = math.hypot(tracked_info['center'][0] - current_detections[det_idx]['center'][0], 
                                          tracked_info['center'][1] - current_detections[det_idx]['center'][1])
                        if dist < min_dist:
                            min_dist = dist
                            best_match_idx = det_idx
                    
                    if min_dist < DISTANCE_THRESHOLD:
                        tracked_people[person_id] = current_detections[best_match_idx]
                        matched_ids.add(person_id)
                        unmatched_detections.remove(best_match_idx)
            
            # Remove people that are no longer tracked
            inactive_ids = set(tracked_people.keys()) - matched_ids
            for person_id in inactive_ids:
                del tracked_people[person_id]

            # Add new people for unmatched detections
            for det_idx in unmatched_detections:
                tracked_people[next_person_id] = current_detections[det_idx]
                next_person_id += 1
            # --- End of tracking logic ---

            # --- Drawing and Action Logic per tracked person ---
            shelf_y = h // 2
            cv2.line(frame, (0, shelf_y), (w, shelf_y), (255, 255, 0), 2)
            
            for person_id, person_data in tracked_people.items():
                
                # **THE MAIN FIX IN ACTION**: Draw using the pre-formatted 'landmarks_proto'
                mp.solutions.drawing_utils.draw_landmarks(
                    frame,
                    person_data['landmarks_proto'],
                    mp.solutions.pose.POSE_CONNECTIONS,
                    mp.solutions.drawing_styles.get_default_pose_landmarks_style()
                )
                
                # Action logic uses the raw landmark list
                pose_landmarks = person_data['landmarks']
                status_text = "Normal"
                
                right_wrist = pose_landmarks[mp.solutions.pose.PoseLandmark.RIGHT_WRIST.value]
                
                if right_wrist.visibility > 0.5 and right_wrist.y < (shelf_y / h):
                    status_text = "Reaching"
                
                display_x = int(person_data['center'][0] * w)
                display_y = int(person_data['center'][1] * h)
                
                cv2.putText(frame, f"ID: {person_id}", (display_x, display_y - 20), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
                cv2.putText(frame, f"Status: {status_text}", (display_x, display_y), cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

            cv2.imshow('Multi-Person Tracking', frame)

            if cv2.waitKey(5) & 0xFF == ord('q'):
                break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()