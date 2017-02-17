var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var newNode = Node(value);

    if (!list.head) {
      list.head = newNode;
    }

    if (list.tail) {
      list.tail.next = newNode;
    }
    list.tail = newNode;
  };

  list.removeHead = function() {
    if (list.head === null) {
      return null;
    }
    let currentHead = list.head;
    list.head = list.head.next;

    return currentHead.value;
  };

  list.contains = function(target) {
    let currentNode = list.head;

    while (currentNode) {
      if (currentNode.value === target) {
        return true;
      }

      currentNode = currentNode.next;
    }

    return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
// addToTail and removeHead is constant and contains is n(O) (liniear);