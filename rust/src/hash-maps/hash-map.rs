use std::collections::HashMap;

fn main() {
    // 1. Create a hash map
    let mut user_profile = HashMap::new();

    // 2. Insert / Update a key-value pair
    // Note: .insert() is used for both adding and updating
    user_profile.insert(String::from("username"), String::from("casey"));
    user_profile.insert(String::from("level"), String::from("15"));
    println!("Initial profile: {:?}", user_profile);

    // Update the value for "level"
    user_profile.insert(String::from("level"), String::from("16"));
    println!("Updated profile: {:?}", user_profile);

    // 3. Get a value by its key
    // .get() returns an Option<&V>, so we often use match or if let
    if let Some(username) = user_profile.get("username") {
        println!("Username: {}", username);
    }

    // 4. Check if a key exists
    if user_profile.contains_key("username") {
        println!("Username key exists.");
    }

    // 5. Delete a key-value pair
    user_profile.remove("level");
    println!("Final profile: {:?}", user_profile);
}
