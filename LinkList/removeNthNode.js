
var removeNthFromEnd = function (head, n) {
    let current = head;
    let tracker = new Map();

    let length = 1;

    while (current !== null) {
        tracker.set(length, current);
        length++;
        current = current.next;
    }

    let position = length - 1 - n;


    if (position === 0) {
        return head.next;
    }


    let previousNode = tracker.get(position);

    previousNode.next = previousNode.next.next;

    return head;
};
