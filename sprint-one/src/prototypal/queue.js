var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.indexToAdd = 0;
  someInstance.indexToRemove = 0;
  return someInstance;

};

var queueMethods = {

  enqueue: function (value) {
    this.storage[this.indexToAdd] = value;
    this.indexToAdd++;
  },

  dequeue: function () {
    if (Object.keys(this.storage).length !== 0) {
      var result = this.storage[this.indexToRemove];
      delete this.storage[this.indexToRemove];
      this.indexToRemove++;
      return result;
    }
  },

  size: function () {
    return Object.keys(this.storage).length;
  }

};


