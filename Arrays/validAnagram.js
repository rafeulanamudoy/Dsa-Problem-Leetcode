var isAnagram = function (s, t) {

     if (s.length !== t.length) {
        return false;
    }

    const firstString = new Map();

    for (let i = 0; i < s.length; i++) {
  

        if (firstString.has(s[i])) {
            firstString.set(s[i], firstString.get(s[i]) + 1);
        } else {
            firstString.set(s[i], 1);
        }
    }

 
    for (let i = 0; i < t.length; i++) {
    

        if (!firstString.has(t[i])) {
            return false;
        }

        firstString.set(t[i], firstString.get(t[i]) - 1);

        if (firstString.get(t[i]) < 0) {
            return false;
        }
    }

    return true;

};


const result = isAnagram("ccaca", "caccc")

console.log(result)