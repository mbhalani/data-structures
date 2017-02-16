var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queueInstance = Object.create(queueMethods);

  queueInstance.storage = {};
  queueInstance.head = 0;
  queueInstance.tail = 0;

  return queueInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.tail += 1;
  this.storage[this.tail] = value;
};

queueMethods.dequeue = function(value) {
  let result;

  if (this.head < this.tail) {
    this.head += 1;
    result = this.storage[this.head];
    delete this.storage[this.head];
  }

  return result;
};

queueMethods.size = function(value) {
  return this.tail - this.head;
};
