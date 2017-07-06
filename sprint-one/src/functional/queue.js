var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  // indexToRemove = 1
  // size


  // Implement the methods below

  someInstance.enqueue = function(value) {
    index++
    //index to add
    //increase size
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