import cv2
import mediapipe as mp
import numpy as np
import math
import time

# --- Helper and Class Definitions ---
from mediapipe.tasks import python
from mediapipe.tasks.python import vision
from mediapipe.framework.formats import landmark_pb2

def draw_landmarks_on_image(rgb_image, detection_result):
    # This function is a stable way to draw landmarks
    pose_landmarks_list = detection_result.pose_landmarks
    annotated_image = np.copy(rgb_image)
    for idx in range(len(pose_landmarks_list)):
        pose_landmarks = pose_landmarks_list[idx]
        pose_landmarks_proto = landmark_pb2.NormalizedLandmarkList()
        pose_landmarks_proto.landmark.extend(
            [landmark_pb2.NormalizedLandmark(x=landmark.x, y=landmark.y, z=landmark.z) for landmark in pose_landmarks])
        mp.solutions.drawing_utils.draw_landmarks(
            annotated_image, pose_landmarks_proto, mp.solutions.pose.POSE_CONNECTIONS,
            mp.solutions.drawing_styles.get_default_pose_landmarks_style())
    return annotated_image

class Person:
    def __init__(self, person_id, initial_pos, initial_landmarks):
        self.id = person_id
        self.center_pos = initial_pos
        self.prev_pos = initial_pos
        self.landmarks = initial_landmarks
        self.status = "New"
        self.standing_frames = 0

    def update(self, new_pos, new_landmarks):
        self.prev_pos = self.center_pos
        self.center_pos = new_pos
        self.landmarks = new_landmarks
        distance_moved = math.hypot(self.center_pos[0] - self.prev_pos[0], self.center_pos[1] - self.prev_pos[1])
        MOVEMENT_THRESHOLD = 0.015
        if (self.landmarks[mp.solutions.pose.PoseLandmark.LEFT_HIP.value].visibility > 0.6 and
            self.landmarks[mp.solutions.pose.PoseLandmark.RIGHT_HIP.value].visibility > 0.6):
            if distance_moved < MOVEMENT_THRESHOLD:
                self.status = f"Standing ({self.standing_frames // 30}s)"
                self.standing_frames += 1
            else:
                self.status = "Moving"
                self.standing_frames = 0

# --- MediaPipe Configuration ---
model_path = 'pose_landmarker_lite.task'
base_options = BaseOptions = mp.tasks.BaseOptions(model_asset_path=model_path)
options = PoseLandmarkerOptions = vision.PoseLandmarkerOptions(
    base_options=base_options, running_mode=vision.RunningMode.VIDEO,
    num_poses=5, min_pose_detection_confidence=0.5, min_tracking_confidence=0.5)

# --- Main Application ---
def main():
    tracked_people = {}
    next_person_id = 1
    DISTANCE_THRESHOLD = 0.15

    cap = cv2.VideoCapture('video/person-1.mp4') 

    with vision.PoseLandmarker.create_from_options(options) as landmarker:
        while cap.isOpened():
            ret, frame = cap.read()
            if not ret: break

            h, w, _ = frame.shape
            mp_image = mp.Image(image_format=mp.ImageFormat.SRGB, data=frame)
            frame_timestamp_ms = int(cap.get(cv2.CAP_PROP_POS_MSEC))
            
            detection_result = landmarker.detect_for_video(mp_image, frame_timestamp_ms)

            # First, draw all detected skeletons using the helper
            annotated_image = draw_landmarks_on_image(frame, detection_result)
            
            # Now, perform the tracking logic
            current_detections = []
            if detection_result.pose_landmarks:
                for person_idx, pose_landmarks in enumerate(detection_result.pose_landmarks):
                    right_hip = pose_landmarks[mp.solutions.pose.PoseLandmark.RIGHT_HIP.value]
                    left_hip = pose_landmarks[mp.solutions.pose.PoseLandmark.LEFT_HIP.value]
                    center_x = (right_hip.x + left_hip.x) / 2
                    center_y = (right_hip.y + left_hip.y) / 2
                    current_detections.append({'center': (center_x, center_y), 'landmarks': pose_landmarks})
            
            # Tracking logic (matching, adding, removing)
            matched_ids = set()
            unmatched_detections = list(range(len(current_detections)))
            if tracked_people:
                for person_id, person_obj in list(tracked_people.items()):
                    min_dist = float('inf')
                    best_match_idx = -1
                    for i, det in enumerate(current_detections):
                        if i in unmatched_detections:
                            dist = math.hypot(person_obj.center_pos[0] - det['center'][0], person_obj.center_pos[1] - det['center'][1])
                            if dist < min_dist:
                                min_dist = dist
                                best_match_idx = i
                    if min_dist < DISTANCE_THRESHOLD:
                        det = current_detections[best_match_idx]
                        tracked_people[person_id].update(det['center'], det['landmarks'])
                        matched_ids.add(person_id)
                        if best_match_idx in unmatched_detections: unmatched_detections.remove(best_match_idx)
            
            inactive_ids = set(tracked_people.keys()) - matched_ids
            for person_id in inactive_ids:
                if person_id in tracked_people: del tracked_people[person_id]
            
            for idx in unmatched_detections:
                det = current_detections[idx]
                tracked_people[next_person_id] = Person(next_person_id, det['center'], det['landmarks'])
                next_person_id += 1

            # Draw IDs and statuses on the already annotated image
            for person_id, person in tracked_people.items():
                display_x = int(person.center_pos[0] * w)
                display_y = int(person.center_pos[1] * h)
                cv2.putText(annotated_image, f"ID: {person.id}", (display_x, display_y - 30), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 255, 0), 2)
                cv2.putText(annotated_image, f"Status: {person.status}", (display_x, display_y - 10), 
                            cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)

            cv2.imshow('Movement Analysis (CPU)', annotated_image)
            if cv2.waitKey(5) & 0xFF == ord('q'):
                break

    cap.release()
    cv2.destroyAllWindows()

if __name__ == '__main__':
    main()