

// Instantiate a new graph
var Graph = function() {
  this.graphNode = [];

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this.graphNode[node] = this.graphNode[node] || [];
  // console.log(this.graphNode, node);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return !!this.graphNode[node];
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  if (this.contains(node)) {
    for (let i in this.graphNode[node]) {
      this.removeEdge(node, i);
    }

    this.graphNode[node] = undefined;
  }
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode)) {
    return false;
  }
  return !!this.graphNode[fromNode][toNode];
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  this.graphNode[fromNode][toNode] = true;
  this.graphNode[toNode][fromNode] = true;

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  if (!this.contains(fromNode) || !this.contains(toNode)) {
    return;
  }

  this.graphNode[fromNode][toNode] = undefined;
  this.graphNode[toNode][fromNode] = undefined;
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (let node in this.graphNode) {
    cb(node);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


