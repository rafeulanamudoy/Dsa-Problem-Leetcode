// to solve this approach we will mutate the head node which is the first node reference is store in next pointer .
// so we will traverse it but during this process we will mutate the next pointer

// so currently here the heade node look like this 1=>2=>3=>4=>5=>null
//what we want to achive is 5=>4=>3=>2=>1=>null
//every node has store the next node address in pointer this is the key point .

var reverseList = function (head) {
  let current = head;
  let result = null;

  while (current == !null) {
    let next = current.next;
    current.next = result;
    result = current;
    current = next;
  }
  return result
};

reverseList([1, 2, 3, 4, 5]);
