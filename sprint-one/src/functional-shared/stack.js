var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};

  someInstance.storage = {};
  someInstance._size = 0;

  extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};

var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};

stackMethods.push = function(value) {
  this._size += 1;
  this.storage[this._size] = value;
};

stackMethods.pop = function() {
  let result;
  if (this._size > 0) {
    result = this.storage[this._size];
    delete this.storage[this._size];
    this._size -= 1;
  }

  return result;
};

stackMethods.size = function() {
  return this._size;
};
