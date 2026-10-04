function perfectFriend(frinedslist) {
    if (typeof frinedslist != 'object') {
        return "please enter a array contains name";
    }
    for (let i = 0; i < frinedslist.length; i++) {
        if (frinedslist[i].length >= 5) {
            return frinedslist[i];///return only the first name whose length is 5 or greater than 5
        }
    }
}
let friendName = perfectFriend(['udoy', 'rafe', 'abul', 'keramot', 'jabbar']);
console.log(friendName);