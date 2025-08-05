import cv2
import mediapipe as mp


mp_pose= mp.solutions.pose
pose = mp_pose.Pose()

mp_drawing = mp.solutions.drawing_utils


cap = cv2.VideoCapture('video/person-1.mp4')


if not cap.isOpened():
    print("Error: Cannot open camera.")
else:
    while True:
        ret, frame = cap.read()
        if not ret:
           print("Error: Cannot read frame.")
           break
        # Media Pipe
        # Convert BGR To RGB
        rgb_frame = cv2.cvtColor(frame,cv2.COLOR_BGR2RGB)

        # Process The Frame To Find The Pose
        result= pose.process(rgb_frame)

        if result.pose_landmarks: 
            mp_drawing.draw_landmarks(
                frame, 
                result.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                # landmark_drawing_spec=mp_drawing.DrawingSpec(color=(255, 0, 0), 
                # thickness=2, 
                # circle_radius=2),
                # connection_drawing_spec=mp_drawing.DrawingSpec(color=(0, 255, 0),
                # thickness=2, 
                # circle_radius=2)
                )

        cv2.imshow("Media Pipe Pose Estimation", frame)

        if cv2.waitKey(1) == ord('q'):
            break


cap.release()
cv2.destroyAllWindows()

