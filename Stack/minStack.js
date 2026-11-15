
var MinStack = function () {
    this.stack = []

    this.minStack = []
};

/** 
 * @param {number} value
 * @return {void}
 */
MinStack.prototype.push = function (value) {
    this.stack.push(value)
    if (this.minStack.length === 0) {

        this.minStack.push(value)
    }
    else {
        const currentMin = this.minStack[this.minStack.length - 1]
        this.minStack.push(Math.min(value, currentMin))
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
    this.stack.pop()
    this.minStack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {

    return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
    return this.minStack[this.stack.length - 1]
};


var obj = new MinStack();

const array = [10, 20]



obj.push(-2);
obj.push(0);
obj.push(-3);
var param_1 = obj.getMin()
obj.pop();
var param_2 = obj.top()
var param_3 = obj.getMin()
console.log(obj, param_1, param_2, param_3, "checkj obj")
