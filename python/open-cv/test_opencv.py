import cv2
import mediapipe as mp
import numpy as np

# 1. READ THE IMAGE
# cv2.imread() loads an image from a file.
# It returns the image as a NumPy array!
# img = cv2.imread('test_image.png')

# # It's good practice to check if the image was loaded correctly.
# if img is None:
#     print("Error: Could not read the image. Check the file path.")
# else:
#     # 2. DISPLAY THE IMAGE
#     # cv2.imshow() displays the image in a window.
#     # The first argument is the window name (a string).
#     # The second argument is the image array we loaded.
#     cv2.imshow('My First Image Display', img)

#     # 3. WAIT FOR A KEY PRESS
#     # cv2.waitKey(0) is crucial. It tells the program to wait indefinitely
#     # for you to press any key on your keyboard. Without this, the
#     # window would appear and disappear in a millisecond.
#     cv2.waitKey(0)

#     # 4. CLEAN UP3
#     # cv2.destroyAllWindows() closes all the windows that OpenCV created.
#     cv2.destroyAllWindows()


# Live video Implementation
# 1. INITIALIZE THE CAMERA
# cv2.VideoCapture(0) accesses your primary webcam (0 is usually the default).
# If you were using a video file, you would put the file path here instead of 0.
# For an IP camera, you would put its RTSP stream URL.
# cap = cv2.VideoCapture(0)

# Check if the camera opened successfully
# if not cap.isOpened():
#     print("Error: Could not open camera.")
# else:
#     # 2. CREATE A LOOP TO READ FRAMES
#     # We create a while(True) loop to continuously read frames from the camera.
#     while True:
#         # cap.read() returns two things:
#         # - A boolean (True/False), which we store in 'ret'. It's True if a frame was read successfully.
#         # - The actual video frame itself, which is a NumPy array we store in 'frame'.
#         ret, frame = cap.read()

#         if not ret:
#             print("Error: Can't receive frame. Exiting ...")
#             break

#         # 3. DISPLAY THE FRAME
#         # This is the same as before, but now we show the 'frame' variable.
#         cv2.imshow('Live Webcam Feed', frame)

#         # 4. SET A QUIT CONDITION
#         # cv2.waitKey(1) waits for 1 millisecond.
#         # We check if the key pressed is the 'q' key.
#         # The '0xFF == ord('q')' is a standard way to do this.
#         if cv2.waitKey(1) == ord('q'):
#             break

# # 5. RELEASE EVERYTHING
# # When the loop is broken, we release the camera and destroy the windows.
# cap.release()
# cv2.destroyAllWindows()

# Resizing

# cap = cv2.VideoCapture(0)

# if not cap.isOpened():
#     print("Error: Could not open camera.")
# else:
#     while True:
#         ret, frame = cap.read()
#         if not ret:
#             break

#         # MANIPULATION 1: RESIZE THE FRAME
#         # cv2.resize() takes the source frame and the desired new size (width, height).
#         resized_frame = cv2.resize(frame, (320, 240))

#         # MANIPULATION 2: CONVERT TO GRAYSCALE
#         # cv2.cvtColor() changes the color space of an image.
#         # We convert our original frame from BGR (OpenCV's default) to GRAY.
#         gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

#         # Let's also print the shape to see the difference!
#         # A color frame has 3 channels (B,G,R). A grayscale frame has only 1.
#         # We will only print this once to avoid flooding the console
#         if 'printed' not in locals():
#             print("Original frame shape:", frame.shape)
#             print("Grayscale frame shape:", gray_frame.shape)
#             printed = True


#         # DISPLAY ALL THE FRAMES
#         cv2.imshow('Original Feed', frame)
#         cv2.imshow('Resized Feed', resized_frame)
#         cv2.imshow('Grayscale Feed', gray_frame)

#         if cv2.waitKey(1) == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()

# Drawing on Images
# cap = cv2.VideoCapture(0)

# if not cap.isOpened():
#     print("Error: Could not open camera.")
# else:
#     while True:
#         ret, frame = cap.read()
#         if not ret:
#             break

#         # Define the coordinates for our drawing
#         # Top-left corner of the rectangle
#         start_point = (100, 50) # (x, y) coordinates
#         # Bottom-right corner of the rectangle
#         end_point = (300, 250)
#         # Color in BGR format (Blue, Green, Red). (0, 255, 0) is pure Green.
#         color = (0, 255, 0)
#         # Line thickness in pixels
#         thickness = 2

#         # DRAWING 1: A RECTANGLE
#         # cv2.rectangle() draws on the image 'in-place'.
#         # It takes the image, start point, end point, color, and thickness.
#         cv2.rectangle(frame, start_point, end_point, color, thickness)

#         # DRAWING 2: TEXT
#         # cv2.putText() also draws on the image in-place.
#         # It takes the image, the text string, the bottom-left corner of the text,
#         # the font, font scale, color, and thickness.
#         text_to_show = "Person: 98%"
#         text_origin = (100, 45) # Put it just above the box
#         font = cv2.FONT_HERSHEY_SIMPLEX
#         cv2.putText(frame, text_to_show, text_origin, font, 0.8, color, thickness)


#         cv2.imshow('Feed with Drawings', frame)

#         if cv2.waitKey(1) == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()

# face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')

# Start the webcam
# cap = cv2.VideoCapture(0)

# if not cap.isOpened():
#     print("Error: Could not open camera.")
# else:
#     while True:
#         ret, frame = cap.read()
#         if not ret:
#             break

#         # Convert to grayscale for detection
#         gray = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

#         # Detect faces
#         faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)

#         for (x, y, w, h) in faces:
#             # Draw rectangle around each face
#             cv2.rectangle(frame, (x, y), (x + w, y + h), (0, 255, 0), 2)

#             # Add label above the face
#             label = "Person: 98%"  # Dummy confidence
#             cv2.putText(frame, label, (x, y - 10), cv2.FONT_HERSHEY_SIMPLEX, 0.8, (0, 255, 0), 2)

#         # Show frame
#         cv2.imshow('Face Detection', frame)

#         # Press 'q' to quit
#         if cv2.waitKey(1) & 0xFF == ord('q'):
#             break

# cap.release()
# cv2.destroyAllWindows()


# --- Initializations ---

# Initialize the MediaPipe Pose model
# This is where the magic happens. We're creating our "body language expert".
mp_pose = mp.solutions.pose
pose = mp_pose.Pose()

# Initialize the MediaPipe Drawing utility
# This will help us draw the skeleton easily.
mp_drawing = mp.solutions.drawing_utils

# Initialize the Video Capture
cap = cv2.VideoCapture('video/person-1.mp4')

if not cap.isOpened():
    print("Error: Cannot open camera.")
else:
    # --- Main Loop ---
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Cannot read frame.")
            break

        # --- MediaPipe Processing ---

        # 1. CONVERT THE IMAGE TO RGB
        # MediaPipe's model was trained on RGB images, but OpenCV reads images in BGR format.
        # We MUST convert the color space for the model to work correctly.
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # 2. PROCESS THE FRAME TO FIND THE POSE
        # We pass the RGB frame to our 'pose' object. It returns the results.
        results = pose.process(rgb_frame)

        # --- Drawing the Results ---

        # 3. DRAW THE SKELETON
        # The 'results' object contains the detected landmarks.
        # We first check if any landmarks were found at all.
        if results.pose_landmarks:
            # If landmarks are found, we use our drawing utility to draw them.
            # It takes the original frame (in BGR!), the landmarks, and the connections.
            # Get the height and width of the frame
            # h, w, c = frame.shape

            # # Get the landmark for the right wrist
            # # We access it through the PoseLandmark enum.
            # right_wrist_landmark = results.pose_landmarks.landmark[mp_pose.PoseLandmark.RIGHT_WRIST]

            # # Convert the normalized coordinates to pixel coordinates
            # # We multiply the normalized x by the frame width, and y by the frame height.
            # # We convert them to integers because pixel coordinates must be whole numbers.
            # cx, cy = int(right_wrist_landmark.x * w), int(right_wrist_landmark.y * h)

            # # Now, let's draw a big, noticeable circle specifically on the right wrist
            # cv2.circle(frame, (cx, cy), 15, (0, 0, 255), cv2.FILLED) # A filled red circle

            # # You could print the coordinates to see them change!
            # # print(f"Right wrist is at: ({cx}, {cy})")
            mp_drawing.draw_landmarks( 
                frame,
                results.pose_landmarks,
                mp_pose.POSE_CONNECTIONS,
                # These are just styling options for the drawing
                landmark_drawing_spec=mp_drawing.DrawingSpec(color=(255, 0, 0), thickness=2, circle_radius=2),
                connection_drawing_spec=mp_drawing.DrawingSpec(color=(0, 255, 0), thickness=2, circle_radius=2)
            )

        # --- Display the final frame ---
        cv2.imshow('MediaPipe Pose Estimation', frame)

        if cv2.waitKey(1) == ord('q'):
            break

cap.release()
cv2.destroyAllWindows()

blank = np.zeros((500,500,3), dtype="uint8")

# cv2.imshow("Blank", blank)

# # blank[200:300, 300:400] = 0,255,0
# # cv2.imshow('Green', blank)

# # draw rectangle
# cv2.rectangle(blank, (0,0), (blank.shape[1]//2, blank.shape[0]//2), (0,255,0), thickness=cv2.FILLED)
# cv2.imshow("Rectangle", blank)

# cv2.circle(blank, (blank.shape[1]//2, blank.shape[0]//2), 40, (0,0,255), thickness=2)
# cv2.imshow("Circle", blank)
# # img = cv2.imread('test_image.png')

# cv2.line(blank, (100,100), (300,400), (255,0,0), thickness=3)
# cv2.imshow('Line', blank)


# cv2.putText(blank, 'Hello', (255,255), cv2.FONT_HERSHEY_SIMPLEX, 1.0, (0,255,0), 2)
# cv2.imshow("Text", blank)

# cv2.waitKey(0)


# capture = cv2.VideoCapture(0)


# def rescaleFrame(frame, scale=0.75):
#     width = int(frame.shape[1] * scale)
#     height = int(frame.shape[0] * scale)

#     dimensions = (width, height)

#     return cv2.resize(frame, dimensions, interpolation=cv2.INTER_AREA)

# def changeRes(width,height):
#     capture.set(3,width)
#     capture.set(4, height)

# while True:
#     isTrue, frame =  capture.read()

#     frame_resized = rescaleFrame(frame)

#     cv2.imshow('Video',frame)
#     # cv2.imshow('Video Resized', frame_resized)

#     if cv2.waitKey(20) & 0xFF==ord('q'):
#         break
# capture.release()
# cv2.destroyAllWindows()
