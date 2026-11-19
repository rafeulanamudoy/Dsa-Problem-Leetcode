var mergeTwoLists = function (list1, list2) {
    const dummy = new ListNode(-1);
    let tail = dummy;

    let current1 = list1;
    let current2 = list2;

    while (current1 !== null && current2 !== null) {
        if (current1.val <= current2.val) {
            tail.next = current1;
            current1 = current1.next;
        } else {
            tail.next = current2;
            current2 = current2.next;
        }

        tail = tail.next;
    }

    if (current1 !== null) {
        tail.next = current1;
    } else {
        tail.next = current2;
    }

    return dummy.next;
};

// var mergeTwoLists = function (list1, list2) {
   
//     if (list1 === null) return list2;
//     if (list2 === null) return list1;

//     let current1 = list1;
//     let current2 = list2;

//     let head = null;
//     let tail = null;

//     while (current1 !== null && current2 !== null) {

//         let selectedNode;

//         if (current1.val <= current2.val) {
//             selectedNode = current1;
//             current1 = current1.next;
//         } else {
//             selectedNode = current2;
//             current2 = current2.next;
//         }

//         if (head === null) {
//             head = selectedNode;
//             tail = selectedNode;
//         } else {
//             tail.next = selectedNode;
//             tail = tail.next;
//         }
//     }


//     if (current1 !== null) {
//         tail.next = current1;
//     } else if (current2 !== null) {
//         tail.next = current2;
//     }

//     return head;

// };