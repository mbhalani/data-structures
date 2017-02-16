var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.head = 0;
  this.tail = 0;
};

Queue.prototype.enqueue = function(value) {
  this.tail += 1;
  this.storage[this.tail] = value;
};

Queue.prototype.dequeue = function(value) {
  let result;

  if (this.head < this.tail) {
    this.head += 1;
    result = this.storage[this.head];
    delete this.storage[this.head];
  }

  return result;
};

Queue.prototype.size = function(value) {
  return this.tail - this.head;
};

