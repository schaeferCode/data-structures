

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
    if (this[key].value === node) {
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
  // throw all in function
  // variable false;

  // var bothTrue = 0;
  // Iterate/for in loop through the Graph
  //   Look for fromNode (if (this[key].value === fromNode))
  //      Check if fromNode.edge has indexOf toNode, if true, bothTrue++
  //   Look for toNode
  //      Check if toNode.edge has indexOf fromNode , if true, bothTrue++

  var bothTrue = 0;

  for (var key in this) {
    if (this[key].value === fromNode) {
      if (_.indexOf(this[key].edge, toNode) >= 0) {
        bothTrue++;
      }
    }
    if (this[key].value === toNode) {
      if (_.indexOf(this[key].edge, fromNode) >= 0) {
        bothTrue++;
      }
    }
  }
  return bothTrue === 2;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  // {0: {value: 5, edge: []}
  // 1: {value: 2, edge: []}
  // 2: {value: 1, edge: []}
  // 3: {value: 3, edge: []}

  // for in loop to find fromNode key.value.
  //    Check if key.value === fromNode
  //      if so add key.edge.push(toNode)
  //    check if key.value === toNode
  //       if so add key.edge.push(fromNode);

  for (var key in this) {
    if (this[key].value === fromNode) {
      this[key].edge.push(toNode);
    }
    if (this[key].value === toNode) {
      this[key].edge.push(fromNode);
    }
    console.log(this[key]);
  }

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {

  if (this.hasEdge(fromNode, toNode)) {
    // Iterate/for in loop
    //   if this key's value equals fromNode (this[key].value === fromNode)
    //     get toNode's index in the edge's array (using indexOf)
    //       use the index to splice and delete toNode's edge (array.splice(index, 1))
    //   if this key's value equals toNode (this[key].value === toNode)
    //     get fromNode's index in the edge's array (using indexOf)
    //       use the index to splice and delete toNode's edge (array.splice(index, 1))

    for (var key in this) {
      if (this[key].value === fromNode) {
        this[key].edge.splice(_.indexOf(this[key].edge, toNode), 1);
      }
      if (this[key].value === toNode) {
        this[key].edge.splice(_.indexOf(this[key].edge, fromNode), 1);
      }
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {

  for (var i = 0; i < this.counter; i++) {
    cb(this[i].value);
  }

};

/*
 * Complexity: What is the time complexity of the above functions?
 */


