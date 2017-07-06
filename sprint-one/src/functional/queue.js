var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var index = 0;
  var size = 0 + index;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    size = size - 1 + index;
    if (size < 0) {
      size = 0 + index;
    }
    return storage[size];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
