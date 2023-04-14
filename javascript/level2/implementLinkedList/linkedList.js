import Node from "./node.js";

let node = new Node();
console.log(node.isEmpty())
node.insertAtTail(2)
node.insertAtTail(5)
node.insertAtTail(10)
node.insertAtHead(99);
node.deleteAtHead();
console.log(node.getHead())
console.log(node.isEmpty())