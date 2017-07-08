

// Instantiate a new graph
var Graph = function() {
  this.counter = 0;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {

  this[this.counter] = {
    value: node,
    edge: []
  };

  this.counter++;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {

  var foundIt = false;

  for (var key in this) {
    if(this[key].value === node) {
      foundIt = true;
    }
  }

  return foundIt;

};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this) {
    if (this[key].value === node) {
      delete this[key];
    }
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // {1: {value: node, edge: [2,3]}
  // 2: {value: node, edge: [1,4]}
  // 48: {value: {somethinghere}, edge }  // delete this line
  // How do we access key 48??
  // this[48] = {value: {someNode}, edge: []}
  // If we have the value of an object, how do we get the key?
  // Object.keys(this[i]).value === node;
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


