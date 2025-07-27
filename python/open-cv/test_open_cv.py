import cv2
import numpy as np

# Initialization Images
# img  =  cv2.imread("test_image.png")


# if img is None:
#     print("Error: Could not read the image. Check the file path.")
# else:
#     cv2.imshow("Image", img)

#     cv2.waitKey(0)

#     cv2.destroyAllWindows()

""" 
    OpenCV Coordinate System (Very Important)
        In OpenCV:

        The top-left corner of the frame/image is (0, 0)

        X-axis moves right

        Y-axis moves down

        (0,0) -----------------> X (increases right)
          |
          |
          |
          v
          Y (increases downward)
        So:

        Top-left = (0, 0)

        Top-right = (width, 0)

        Bottom-left = (0, height)

        Bottom-right = (width, height)

        Center = (width // 2, height // 2)
"""
# Initialization Video
cap = cv2.VideoCapture('video/person-1.mp4')

hog = cv2.HOGDescriptor()
hog.setSVMDetector(cv2.HOGDescriptor_getDefaultPeopleDetector())


if not cap.isOpened():
    print("Error: Could not open camera")
else:
    while True:
        ret, frame = cap.read()
        if not ret:
            print("Error: Can't receive frame. Exiting ....")
            break
        
        #  Drawing Rectangles
        # Top-left corner of the rect
        # start_point = (0, 500) # (X, Y) coordinates

        # Bottom-right corner of rect
        # end_point = (300, 250)

        # Center
        # frame_height, frame_width = frame.shape[:2]

        # rect_width = 200
        # rect_height = 100

        # # Center position
        # center_x = frame_width // 2
        # center_y = frame_height // 2

        # # Rectangle corners
        # start_point = (center_x - rect_width // 2, center_y - rect_height // 2)
        # end_point   = (center_x + rect_width // 2, center_y + rect_height // 2)


        # Color in BGR format (Blue, Green, Red). (0, 255, 0) is pure Green.
        # color = (0, 255, 0)

        # Line thickness in pixels
        # thickness = 2

        # Drawing a Rectangle
        # cv2.rectangle(frame, start_point, end_point, color, thickness)

        # Text_to_Show
        # text_to_show  = "Person: 95%"
        # text_origin= (100,45)
        # font = cv2.FONT_HERSHEY_SIMPLEX
        # # cv2.putText(frame, text_to_show, text_origin, font, 0.8, color, thickness)
        gray_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2GRAY)

        resized_frame = cv2.resize(frame, (640, 480))

        boxes, weights = hog.detectMultiScale(resized_frame, winStride=(8,8))

        for i, (x, y, w, h) in enumerate(boxes):
        # Draw a green rectangle for each person
            cv2.rectangle(resized_frame, (x, y), (x+w, y+h), (0, 255, 0), 2)

            # Add label with confidence (if weights are returned)
            label = f"Person: {int(weights[i]*100)}%"
            cv2.putText(resized_frame, label, (x, y-10), cv2.FONT_HERSHEY_SIMPLEX, 0.6, (0,255,0), 2)




        # if 'printed' not in locals():
        #     print("Original frame shape:", frame.shape)
        #     print("Grayscale frame shape:", resized_frame.shape)
        #     printed = True

        cv2.imshow('Original Feed', resized_frame)
        # cv2.imshow('Resized Feed', resized_frame)
        # cv2.imshow('Grayscale Feed', gray_frame)


        if cv2.waitKey(1) == ord('q'):
            break
cap.release()
cv2.destroyAllWindows()