var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var indexToRemove = 0;
  var indexToAdd = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[indexToAdd] = value;
    indexToAdd++;
  };

  someInstance.dequeue = function() {
    // decrease size
    // increase indextoRemove
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};