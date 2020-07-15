class Node{
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = null
    this.length = 0
  }

  push(val) {
    newNode = new Node(val)
    if (this.length === 0) {
      this.head = newNode
      
    } else {
      
    }
    this.tail = newNode
  }
}