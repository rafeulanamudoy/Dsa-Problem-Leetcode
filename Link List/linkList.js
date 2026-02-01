class Node {
  constructor(value) {
    this.value = value;
    this.pointer = null;
  }
}

class singleLinkList {
  constructor(value) {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addValueInHead(value) {
    const elementNode = new Node(value);

    if (!this.head) {
      this.head = elementNode;
      this.tail = elementNode;
    } else {
      elementNode.pointer = this.head;
      this.head = elementNode;
    }

    this.size++;
  }

  insertAtTail(value) {
    const elementNode = new Node(value);
    if (!this.tail) {
      this.tail = elementNode;
      this.head = elementNode;
    } else {
      this.tail.pointer = elementNode;

      this.tail = elementNode;
    }
    this.size++;
  }
  printLinkList() {
    // console.log(this.head);
    // console.log(this.tail)

    const lists = [];
    var current = this.head;
    //  for(let i=0;i<this.size;i++){

    //      lists.push(current.value)
    //      current=current.pointer

    //  }
    while (current !== null) {
      lists.push(current.value);
      current = current.pointer;
    }

    console.log(lists);
  }
}

const linkListStoreValue = new singleLinkList();

linkListStoreValue.addValueInHead(10);
linkListStoreValue.addValueInHead(20);

linkListStoreValue.insertAtTail(30);
linkListStoreValue.insertAtTail(40);

linkListStoreValue.printLinkList();
