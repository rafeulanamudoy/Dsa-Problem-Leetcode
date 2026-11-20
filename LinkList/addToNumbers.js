
// var addTwoNumbers = function(l1, l2) {
//     let l1Digits = "";
//     let l2Digits = "";

//     let currentL1 = l1;
//     let currentL2 = l2;


//     while (currentL1 !== null) {
//         l1Digits += currentL1.val;
//         currentL1 = currentL1.next;
//     }


//     while (currentL2 !== null) {
//         l2Digits += currentL2.val;
//         currentL2 = currentL2.next;
//     }


//     const num1 = BigInt(l1Digits.split("").reverse().join(""));
//     const num2 = BigInt(l2Digits.split("").reverse().join(""));

  
//     const totalSum = (num1 + num2).toString();

  
//     let head = null;
//     let tail = null;

//     for (let i = totalSum.length - 1; i >= 0; i--) {
//         const node = new ListNode(Number(totalSum[i]));

//         if (head === null) {
//             head = node;
//             tail = node;
//         } else {
//             tail.next = node;
//             tail = tail.next;
//         }
//     }

//     return head;
// };


var addTwoNumbers = function(l1, l2) {
    let carry = 0;

    let current1 = l1;
    let current2 = l2;

    let head = null;
    let tail = null;

    while (current1 !== null || current2 !== null || carry > 0) {

  
        let val1 = current1 !== null ? current1.val : 0;
        let val2 = current2 !== null ? current2.val : 0;

      
        let sum = val1 + val2 + carry;


        let digit = sum % 10;
        carry = Math.floor(sum / 10);

   
        let newNode = new ListNode(digit);

        if (head === null) {
            head = newNode;
            tail = newNode;
        } else {
            tail.next = newNode;
            tail = tail.next;
        }

       
        if (current1 !== null) {
            current1 = current1.next;
        }

        if (current2 !== null) {
            current2 = current2.next;
        }
    }

    return head;
};

