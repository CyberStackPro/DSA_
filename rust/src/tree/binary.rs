use std::rc::Rc;
use std::cell::RefCell;


type NodeRef = Rc<RefCell<Node>>;
struct Node {
    value: i32,
    left: Option<NodeRef>,
    right: Option<NodeRef>,
}

let root = Rc::new(RefCell::new(Node {
    value: 7,
    left: None,
    right: None,
}));


let left = Rc::new(RefCell::new(Node {
    value: 3,
    left: None,
    right: None,
}));
root.borrow_mut().left = Some(left.clone());