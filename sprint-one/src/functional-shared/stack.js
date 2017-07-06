var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    storage: {},
    counter: 0
  };
  _.extend(someInstance, stackMethods);

  return someInstance;
};


var stackMethods = {

  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },

  pop: function () {
    if (Object.keys(this.storage).length !== 0) {
      var value = this.storage[this.counter - 1];
      delete this.storage[this.counter - 1];
      this.counter--;
      return value;
    }
  },

  size: function() {
    return Object.keys(this.storage).length;
  }

};