
var addTwoNumbers = function(l1, l2) {
    let l1Digits = "";
    let l2Digits = "";

    let currentL1 = l1;
    let currentL2 = l2;


    while (currentL1 !== null) {
        l1Digits += currentL1.val;
        currentL1 = currentL1.next;
    }


    while (currentL2 !== null) {
        l2Digits += currentL2.val;
        currentL2 = currentL2.next;
    }


    const num1 = BigInt(l1Digits.split("").reverse().join(""));
    const num2 = BigInt(l2Digits.split("").reverse().join(""));

  
    const totalSum = (num1 + num2).toString();

  
    let head = null;
    let tail = null;

    for (let i = totalSum.length - 1; i >= 0; i--) {
        const node = new ListNode(Number(totalSum[i]));

        if (head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = tail.next;
        }
    }

    return head;
};
