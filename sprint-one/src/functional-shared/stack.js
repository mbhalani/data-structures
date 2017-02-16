var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var storage = {};
  var _size = 0;

  extend(storage, stackMethods);

  return storage;
};

var stackMethods = {};

var extend = function(to, from) {
  for (let key in from) {
    to[key] = from[key];
  }
};


