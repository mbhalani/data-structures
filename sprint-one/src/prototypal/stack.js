var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stackInstance = Object.create(stackMethods);

  stackInstance.storage = {};
  stackInstance._size = 0;

  return stackInstance;
};

var stackMethods = {};

stackMethods.push = function(value) {
  this._size += 1;
  this.storage[this._size] = value;
};

stackMethods.pop = function(value) {
  let result;

  if (this._size > 0) {
    result = this.storage[this._size];
    delete this.storage[this._size];
    this._size -= 1;
  }

  return result;
};

stackMethods.size = function(value) {
  return this._size;
};
