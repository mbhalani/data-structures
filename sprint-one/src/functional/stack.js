var debug = false;

var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var _size = 0;

  // Implement the methods below
  someInstance.push = function(value) {
    _size += 1;
    storage[_size] = value;
    if (debug) {
      console.log('PUSH storage: ', storage, ' size: ', _size);
    }
  };

  someInstance.pop = function() {
    var result = storage[_size];
    if (_size) {
      _size -= 1;
    }
    if (debug) {
      console.log('POP storage: ', storage, ' size: ', _size);
    }
    return result;
  };

  someInstance.size = function() {
    if (debug) {
      console.log('SIZE storage: ', storage, ' size: ', _size);
    }
    return _size;
  };

  return someInstance;
};
