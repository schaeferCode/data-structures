var BinarySearchTree = function(value) {
  var storage = Object.create(BinarySearchTree.prototype);
  storage.value = value;
  storage.left = null;
  storage.right = null;
  return storage;
};

BinarySearchTree.prototype.insert = function (value, familyMember) {
  if (value < this.value) {
    // if left is taken then go down the tree
    if (this.left) {

      this.left.insert(value)

    } else if (!this.left) {

      this.left = BinarySearchTree(value);

    }
  } else if (value > this.value) {

    if (this.right) {

      this.right.insert(value);

    } else if (!this.right) {

      this.right = BinarySearchTree(value);
    }
  }

};

BinarySearchTree.prototype.contains = function () {

};

BinarySearchTree.prototype.depthFirstLog = function () {

};
/*
 * Complexity: What is the time complexity of the above functions?
 */

//var family = BinarySearchTree('scott');

// family = {value: 5,
//           left: BinarySearchTree(2) {
//             value: '2',
//             left: null,
//             right: null
//           },
//           right: null
//         }