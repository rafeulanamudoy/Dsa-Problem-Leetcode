class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DobulyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addValueInFirst(value) {
    const element = new Node(value);

    if (!this.head) {
      this.head = element;
      this.tail = element;
    } else {
      element.next = this.head;
      this.head.prev = element;
      this.head = element;
      this.size++;
    }
  }

  addValueInLast(value) {
    const element = new Node(value);

    if (!this.tail) {
      this.head = element;
      this.tail = element;
    } else {
      element.prev = this.tail;
      this.tail.next = element;
      this.tail = element;
    }
    this.size++;
  }

 insertAt(index, value) {
  let current = this.head;
  for (let i = 0; i < index; i++) {
    current = current.next;
  }
  current.value = value;
}


  printLinkListForward() {
    let lists = [];
    let current = this.head;

    while (current !== null) {
      lists.push(current.value);
      current = current.next;
    }
    console.log(lists);
  }

  printLinkListBackward() {
    let lists = [];

    let current = this.tail;

    while (current !== null) {
      lists.push(current.value);

      current = current.prev;
    }

    console.log(lists);
  }
}

const list = new DobulyLinkList();

list.addValueInFirst(10);
list.addValueInFirst(20);
list.addValueInFirst(30);
list.addValueInLast(40);
list.insertAt(2, 25);
list.printLinkListForward();
// list.printLinkListBackward()
