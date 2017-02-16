var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var head = 0;
  var tail = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    tail += 1;
    storage[tail] = value;
  };

  someInstance.dequeue = function() {
    if (head < tail) {
      head += 1;
    }
    var result = storage[head];
    delete storage[head];

    return result;
  };

  someInstance.size = function() {
    return tail - head;
  };

  return someInstance;
};
