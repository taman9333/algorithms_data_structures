class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    while (current) {
      var pre = current;
      current = current.next;
      if (current === this.tail) break;
    }
    pre.next = null;
    this.tail = pre;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currHead = this.head;
    this.head = currHead.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    var preHead = this.head;
    newNode.next = preHead;
    this.head = newNode;
    if (this.length === 0) {
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (index !== counter) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    var node = this.get(index);
    if (node) {
      node.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val);
    if (index === 0) return !!this.unshift(val);

    var preNode = this.get(index - 1);
    var tempNode = preNode.next;
    var newNode = new Node(val);
    preNode.next = newNode;
    newNode.next = tempNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();

    var preNode = this.get(index - 1);
    var removed = preNode.next;
    preNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head,
      previous = null,
      tmp;

    this.head = this.tail;
    this.tail = node;
    while (node) {
      // save next before we overwrite node.next!
      tmp = node.next;

      // reverse pointer
      node.next = previous;

      // step forward in the list
      previous = node;
      node = tmp;
    }
    return this;
  }
}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
