struct CustomeArray<T>{
    length:i32,
    capacity:T,
    data:<Box<[i32]>>,
}

impl CustomeArray<i32> {
    fn push(&self, item:i32){
        self.data[self.length++] =item;
        let arr = vec![]
    }
}



fn main() {
    println!("Hello world")
}
