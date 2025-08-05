import time

def get_user_data():
    name = "Bob"
    age =30
    city = "New York"
    return name, age,city

user_name, user_age,user_city=get_user_data()
print(f"Name: {user_name}, Age: {user_age}, City: {user_city}")

active_detections = ['person','bottle','hand']
active_detections[1] = "shopping_cart" # Change 'bottle' to 'shopping_cart'
print("After changing an item:", active_detections)
# print(type(active_detections))

def display_detection_log(log_list,title="Current Active Detections"):
    """
    Displays a list of detection events with an ASCII UI.
    Each event is a tuple (as we learned before):
    (timestamp, object_type, confidence, bbox_coords)
    """
    print("\n" + "="*60)
    print(f"           {title}")
    print("="*60)

    if not log_list:
        print("No active detections to display.")
        print("="*60)
        return

    # Header for the table
    print(f"{'IDX':<4} | {'Timestamp':<18} | {'Object':<12} | {'Conf.':<7} | {'Bounding Box':<18}")
    print("-" * 60)

    for idx, detection in enumerate(log_list):
        timestamp, obj, confidence, bbox = detection
        x_min, y_min, x_max, y_max = bbox
        bbox_str = f"({x_min},{y_min})-({x_max},{y_max})"
        print(f"{idx:<4} | {timestamp:<18} | {obj:<12} | {confidence:<7.2f} | {bbox_str:<18}")

    print("="*60 + "\n")

# --- Simulate the real-time detection process ---

# Initialize our empty list to store active detections
active_detections_log = []

print("--- Starting AI Shoplifting Detection Simulation ---")

# Event 1: Person detected
detection1_data = ("2025-06-04 10:01:05", "person", 0.98, (10, 20, 150, 300))
active_detections_log.append(detection1_data)
display_detection_log(active_detections_log)
# time.sleep(1) # Simulate time passing

# Event 2: Bottle detected
detection2_data = ("2025-06-04 10:01:10", "bottle", 0.85, (120, 250, 140, 280))
active_detections_log.append(detection2_data)
display_detection_log(active_detections_log)
# time.sleep(1)

# Event 3: Another person detected (duplicate object type, different bounding box)
detection3_data = ("2025-06-04 10:01:15", "person", 0.99, (200, 50, 350, 450))
active_detections_log.append(detection3_data)
display_detection_log(active_detections_log)
# time.sleep(1)

# Event 4: Person (at index 0) leaves the frame. Remove them!
print("\n--- Simulating 'person' at index 0 leaving the frame ---")
# To remove by index:
removed_person = active_detections_log.pop(0) # Removes the first item (person from reading1)
print(f"Removed: {removed_person}")
display_detection_log(active_detections_log, title="Active Detections After Removal")
# time.sleep(1)


# Event 5: A new hand detection appears (insert at a specific position)
detection4_data = ("2025-06-04 10:01:25", "hand", 0.70, (130, 260, 160, 290))
active_detections_log.insert(1, detection4_data) # Insert at index 1
print("\n--- Simulating new 'hand' detection at index 1 ---")
display_detection_log(active_detections_log, title="Active Detections After Insertion")
# time.sleep(1)

# Final state
print("\n--- Simulation Complete ---")
print("Final list of active detections:")
display_detection_log(active_detections_log)
# A dictionary representing a person's profile
user_profile = {
    "name": "Alice",
    "age": 30,
    "city": "London",
    "is_active": True
}
print("User Profile:", user_profile)
# Output: User Profile: {'name': 'Alice', 'age': 30, 'city': 'London', 'is_active': True}

# Accessing values by key
print("Alice's age:", user_profile["age"])
# Output: Alice's age: 30

# --- Demonstrating MUTABILITY ---
# 1. Changing a value
user_profile["age"] = 31 # Update Alice's age
print("After updating age:", user_profile)
# Output: After updating age: {'name': 'Alice', 'age': 31, 'city': 'London', 'is_active': True}

# 2. Adding a new key-value pair
user_profile["email"] = "alice@example.com"
print("After adding email:", user_profile)
# Output: After adding email: {'name': 'Alice', 'age': 31, 'city': 'London', 'is_active': True, 'email': 'alice@example.com'}

# 3. Removing a key-value pair
del user_profile["is_active"] # Remove the 'is_active' key and its value
print("After deleting 'is_active':", user_profile)
# Output: After deleting 'is_active': {'name': 'Alice', 'age': 31, 'city': 'London', 'email': 'alice@example.com'}

# Getting all keys, values, or items (key-value pairs)
print("All keys:", user_profile.keys())
print("All values:", user_profile.values())
print("All items:", user_profile.items())
# Output: All keys: dict_keys(['name', 'age', 'city', 'email'])
# Output: All values: dict_values(['Alice', 31, 'London', 'alice@example.com'])
# Output: All items: dict_items([('name', 'Alice'), ('age', 31), ('city', 'London'), ('email', 'alice@example.com')])
# Checking if a key exists
if "name" in user_profile:
    print("Name exists in profile.")


def display_session_summary(sessions_dict):
    """
    Displays a summary of active customer sessions using an ASCII UI.
    Each session is a dictionary within the main sessions_dict.
    """
    print("\n" + "="*70)
    print("              AI Shoplifting Detection - Session Tracker")
    print("="*70)

    if not sessions_dict:
        print("No active customer sessions.")
        print("="*70)
        return

    # Header for the table
    print(f"{'Customer ID':<15} | {'Risk Score':<12} | {'Status':<15} | {'Last Action':<20}")
    print("-" * 70)

    # Iterate through the dictionary to display each session
    # .items() gives you both the key (customer_id) and the value (session_details_dict)
    for customer_id, session_details in sessions_dict.items():
        risk_score = session_details.get("risk_score", "N/A") # .get() is safe, returns None if key not found
        status = session_details.get("status", "Unknown")
        last_action = session_details.get("last_action", "None")

        # Format risk score as percentage
        risk_str = f"{risk_score:.1f}%" if isinstance(risk_score, (int, float)) else str(risk_score)

        print(f"{customer_id:<15} | {risk_str:<12} | {status:<15} | {last_action:<20}")

    print("="*70 + "\n")

# --- Simulate customer session tracking ---

# Our main dictionary to hold all active customer sessions
# Key: customer_id (string), Value: dictionary of session details
active_customer_sessions = {}

print("--- Starting Session Tracking Simulation ---")

# Event 1: New customer enters, basic session data
customer_id_1 = "CUST_001"
active_customer_sessions[customer_id_1] = {
    "risk_score": 10.0,
    "status": "Normal",
    "last_action": "Entered Store",
    "detected_items": ["backpack"]
}
display_session_summary(active_customer_sessions)
# time.sleep(1)

# Event 2: Another customer enters
customer_id_2 = "CUST_002"
active_customer_sessions[customer_id_2] = {
    "risk_score": 5.0,
    "status": "Normal",
    "last_action": "Browse Aisle 3",
    "detected_items": []
}
display_session_summary(active_customer_sessions)
# time.sleep(1)

# Event 3: CUST_001 performs a suspicious action
print("\n--- CUST_001: Detected 'grabbing item' ---")
# Update existing session data for CUST_001
active_customer_sessions[customer_id_1]["risk_score"] = 65.0
active_customer_sessions[customer_id_1]["status"] = "Elevated Risk"
active_customer_sessions[customer_id_1]["last_action"] = "Grabbed Item (Shelf A)"
active_customer_sessions[customer_id_1]["detected_items"].append("item_X") # Add to list within dict
display_session_summary(active_customer_sessions)
# time.sleep(1)

# Event 4: CUST_002 leaves the store (remove their session)
print("\n--- CUST_002: Session ends, removing from tracker ---")
if customer_id_2 in active_customer_sessions:
    del active_customer_sessions[customer_id_2]
    print(f"Removed session for {customer_id_2}.")
display_session_summary(active_customer_sessions)
# time.sleep(1)

# Event 5: CUST_001's risk escalates further
print("\n--- CUST_001: Detected 'concealing item' ---")
active_customer_sessions[customer_id_1]["risk_score"] = 90.0
active_customer_sessions[customer_id_1]["status"] = "High Risk - Alert!"
active_customer_sessions[customer_id_1]["last_action"] = "Concealed Item (Pocket)"
active_customer_sessions[customer_id_1]["detected_items"].append("item_Y") # Add another item
display_session_summary(active_customer_sessions)

print("\n--- Simulation Complete ---")