const { createRef } = require("react");

var hasCycle = function (head) {
  let result = false;

    let current = head;
    const visited = new Set();

    while (current) {

        if (visited.has(current)) {
            result = true;
            break;
        } else {
            visited.add(current);
            current = current.next;
        }

        if (current === null) {
            result = false;
            break;
        }
    }

    return result;
};
//cleaner appraohc 
var hasCycle = function(head) {
    let current = head;
    const visited = new Set();

    while (current) {

        if (visited.has(current)) {
            return true;
        }

        visited.add(current);

        current = current.next;
    }

    return false;
};