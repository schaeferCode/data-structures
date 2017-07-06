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
  // add push
  push: function (value) {
    this.storage[this.counter] = value;
    this.counter++;
  },
    // adding to storage
    // increasing counter

  // add pop
    // decrease counter
    // delete object

    // return object being popped off the top

  // add size
  size: function() {
    // return object.keys...
    return Object.keys(this.storage).length;
  }


};