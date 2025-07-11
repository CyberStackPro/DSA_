fn spin_words(words: &str) -> String {
    let word = words.split(' ');
    let mut result = String::new();

    for w in word {
        println!("Word: {}", w);
        if w.len() >= 5 {
            result += &w.chars().rev().collect::<String>()
        } else {
            result += w
        }

        result += " "
    }

    result
}
fn spin_words2(words: &str) -> String {
    words
        .split_ascii_whitespace()
        .map(|word| match word.len() >= 5 {
            true => word.chars().rev().collect(),
            false => word.to_string(),
        })
        .collect::<Vec<String>>()
        .join(" ")
}
// fn spin_words(words: &str) -> String {
//     let mut reversed = String::new();
//     for ch in words.chars().rev() {
//         reversed.push(ch);
//     }

//     reversed
// }

fn main() {
    let result = spin_words("Hey wollef sroirraw");
    println!("{}", result);
}

fn is_narcissistic(num: u64) -> bool {
    let num_str = num.to_string();
    let powser = num_str.len();
    let mut sum = 0;

    for digit_char in num_str.chars() {
        let digit = digit_char.to_digit(10).unwrap() as u64;

        sum += digit.pow(powser as u32)
    }

    sum == num
}

// fn is_narcissistic(num: u64) -> bool {
//     let digits = num.to_string();
//     let powser = digits.len();
//     let sum: u64 = digits
//         .chars()
//         .map(|d| {
//             let digit: u64 = d.to_digit(10).unwrap() as u64;
//             digit.pow(powser as u32)
//         })
//         .sum();

//     sum == num
// }
