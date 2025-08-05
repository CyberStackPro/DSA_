use std::any::type_name;
use std::collections::HashMap;

// mod ./hashash-maps

mod arrays;
mod code_wars;

mod tree;

fn main() {
    // let numbers: i32 = 32;
    // println!("Hello, world!");
    hash_tables();
}

fn hash_tables() {
    let mut user_profile = HashMap::new();

    user_profile.insert(String::from("username"), String::from("John"));
    user_profile.insert(String::from("level"), String::from("15"));
    println!("Initial profile: {:?}", user_profile);

    user_profile.insert(String::from("level"), String::from("16"));
    println!("Updated profile: {:?}", user_profile);

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

    let x: i128 = 32233;
    print_type_of(&x)
}
fn print_type_of<T>(_: &T) {
    println!("{}", type_name::<T>());
}
