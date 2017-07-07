var LinkedList = function() {
  var list = {};
  list.head = null; // null ought to be first value
  list.tail = null; // null ought to be last value in storage
  var counter = 0;
  var deleteCounter = 0;

  list.addToTail = function(value) {

    list[counter] = Node (value);

    if (counter === 0) {
      list.head = list[counter];
    }

    if (list.tail !== null) {
      list[counter - 1].next = list[counter];
    }

    list.tail = list[counter];

    counter++;
  };

  list.removeHead = function() {
    var result = list.head.value;
    list.head = list.head.next;
    // // console.log(list[deleteCounter]);
    // delete list[deleteCounter];
    deleteCounter++;
    return result;
  };

  list.contains = function(target) {

    for (var i = deleteCounter; i < counter; i++) {
      if (list[i].value === target) {
        return true;
      }
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
