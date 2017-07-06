var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var indexToRemove = 0;
  var size = 0 + indexToRemove;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[size] = value;
    size++;
  };

  someInstance.dequeue = function() {
    indexToRemove++;
    size = size - 1 + indexToRemove;
    if (size < 0) {
      size = 0 + indexToRemove;
    }
    return storage[indexToRemove - 1];
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
