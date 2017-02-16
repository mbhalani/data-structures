var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this._size = 0;
};

Stack.prototype.push = function(value) {
  this._size += 1;
  this.storage[this._size] = value;
};

Stack.prototype.pop = function(value) {
  let result;

  if (this._size > 0) {
    result = this.storage[this._size];
    delete this.storage[this._size];
    this._size -= 1;
  }

  return result;
};

Stack.prototype.size = function(value) {
  return this._size;
};
