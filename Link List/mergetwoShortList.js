var mergeTwoLists = function (list1, list2) {
  let current1 = list1;
  let current2 = list2;

  let result = null;
  let resultPointer = null;
  let head = current1;
  let tail = null;

  while (current1 !== null) {
    if (current1.value <= current2.value) {
      result = current1;
      resultPointer = result.next;

      current1 = current1.next;
    } else {
      result = current2;
      current2 = current2.next;
    }
  }
  return result;
};
