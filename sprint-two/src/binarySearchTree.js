var BinarySearchTree = function(value) {
  var storage = Object.create(BinarySearchTree.prototype);
  storage.value = value;
  storage.left = null;
  storage.right = null;
  return storage;
};

BinarySearchTree.prototype.insert = function (value) {
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

  //debugger;

  var isFound = false;

  function subContains (familyMember) {
    if (familyMember !== null && familyMember.value === target) {
      // console.log(this.value, this.value === target);
      isFound = true;
    }

    if (familyMember !== null && target < familyMember.value) {
      subContains(familyMember.left);
    } else if (familyMember !== null && target > familyMember.value) {
      subContains(familyMember.right);
    }

  }

  // console.log(isFound);
  subContains(this);
  return isFound;
};

BinarySearchTree.prototype.depthFirstLog = function (callBack) {
  // Base Case
  // Run the callback function on the top of the tree/ at this
  callBack(this.value);

  if (this.left) {
    this.left.depthFirstLog(callBack);
  }

  if (this.right) {
    this.right.depthFirstLog(callBack);
  }
  // Check if there is anything on this.left
  //  Run depthFirstLog(this.left)
  // Check if there is anything on this.right
  //  Run depthFirstLog(this.right)
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