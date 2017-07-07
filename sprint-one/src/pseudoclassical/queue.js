var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.indexToAdd = 0;
  this.indexToRemove = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.indexToAdd] = value;
  this.indexToAdd++;
};

Queue.prototype.dequeue = function () {
  if (Object.keys(this.storage).length !== 0) {
    var result = this.storage[this.indexToRemove];
    delete this.storage[this.indexToRemove];
    this.indexToRemove++;
    return result;
  }
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};