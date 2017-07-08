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
  console.log(this.children);
};

treeMethods.contains = function(target) {
  var foundIt = false;

  if (this.value === target) {
    foundIt = true;
  }

  for (var i = 0; i < this.children.length; i++) {
    if(this.children[i].contains(target)) {
      foundIt = true;
    }
  }

  return foundIt;

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
