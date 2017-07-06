var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = { storage: {}, indexToAdd: 0, indexToRemove: 0};
  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {
  // enqueue (value)
  enqueue: function(value) {
    this.storage[this.indexToAdd] = value;
    this.indexToAdd++;
  },
  //   add value to this.storage
  //   increase indexToAdd

  // dequeue
  dequeue: function() {
    if (Object.keys(this.storage).length !== 0) {
      var result = this.storage[this.indexToRemove];
      delete this.storage[this.indexToRemove];
      this.indexToRemove++;
      return result;
    }
  },
  //   if key length is not 0
  //     save this.storage[this.indexToRemove] to value
  //     delete this.storage[this.indexToRemove]
  //     increase this.indexToRemove
  //     return value

  // size
  size: function() {
    return Object.keys(this.storage).length;
  }
};


