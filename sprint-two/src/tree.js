var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  // insert new tree object into newTree.children [{value: 4, children[]]
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  // base case
  // check if top of tree's value equals target

  // if familymember.children.length > 0
  // loop through tree's children
  // recurse treeMethods.contains
  //   if children's value equals target
  //     return true
  //   return false otherwise
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
