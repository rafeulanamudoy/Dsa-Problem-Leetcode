class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addValueInHead(value) {
    const element = new Node(value);
    if (!this.head) {
      this.head = element;
      this.tail = element;
    } else {
      element.pointer = this.head;
      this.head = element;
    }
    this.size++;
  }
  addValueInTail(value) {
    const element = new Node(value);

    if (!this.tail) {
      this.head = element;
      this.tail = element;
    } else {
      this.tail.pointer = element;
      this.tail = element;
    }
    this.size++;
  }

  deleteFirstElement() {
    if (!this.head) {
      return;
    } else {
      this.head = this.head.pointer;
    }
    // this.size--;
  }

  deleteLastElement() {
    if (!this.tail) {
      return;
    } else {
      let lastPreviousNode;
      let currentValue = this.head;
      while (currentValue.pointer !== null) {
        lastPreviousNode = currentValue;
        currentValue = currentValue.pointer;
      }

      lastPreviousNode.pointer = null;
      this.tail = lastPreviousNode;
    }
    this.size--;
  }

  deleteByIndex(index) {
    let current = this.head;

    let deleteBeforeIndexNode;
    let deleteAfterIndexNode;
    for (let i = 0; i <= index + 1; i++) {
      if (i == index - 1) {
        deleteBeforeIndexNode = current;
      }
      if (i == index + 1) {
        deleteAfterIndexNode = current;
      }
      current = current.pointer;
    }
      deleteBeforeIndexNode.pointer=deleteAfterIndexNode
      this.size--
  }



  printLinkList() {
    let list = [];

    let current = this.head;

    while (current !== null) {
      list.push(current.value);
      current = current.pointer;
    }

    console.log(list);
  }
}

const list = new LinkList();

list.addValueInHead(10);
list.addValueInHead(20);
list.addValueInHead(30);
list.addValueInTail(50);

list.addValueInTail(60);
list.deleteByIndex(2);
// list.deleteFirstElement();
// list.deleteLastElement()
list.printLinkList();
