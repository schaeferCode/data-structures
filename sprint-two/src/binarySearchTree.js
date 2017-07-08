var BinarySearchTree = function(value) {
  var storage = Object.create(BinarySearchTree.prototype);
  storage.value = value;
  storage.left = null;
  storage.right = null;
  return storage;
};

BinarySearchTree.prototype.insert = function (value, familyMember) {
  if (value < this.value) {

    if (this.left) {

      this.left.insert(value);

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

BinarySearchTree.prototype.contains = function (target) {

  var isFound = false;

  function subContains (familyMember) {
    if (familyMember !== null && familyMember.value === target) {
      isFound = true;
    }

    if (familyMember !== null && target < familyMember.value) {
      subContains(familyMember.left);
    } else if (familyMember !== null && target > familyMember.value) {
      subContains(familyMember.right);
    }

  }

  subContains(this);
  return isFound;
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