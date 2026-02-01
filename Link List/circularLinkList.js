class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class circularLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  addValueInHead(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      
      this.tail = node;
      this.head.prev = this.tail;
      this.tail.next = this.head;
    } else {
      this.head.prev = node;
      this.head = node;
      this.tail.next=node

    }
    this.size++;
  }

  printList() {
  
    let current = this.head;
    let initalItem={...current}
    
    let lists = [];

    do {
      lists.push(current.value);
        console.log(lists,"check lists")
        console.log(current,"check current")
        console.log(initalItem,"check head")
      current = current.next;
    } while (current.next !== initalItem.prev);
    
    console.log(lists)
  }
}

const circularList = new circularLinkList();
circularList.addValueInHead(30);
circularList.addValueInHead(20);
circularList.addValueInHead(10);
circularList.printList()
