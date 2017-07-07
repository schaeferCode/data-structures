var LinkedList = function() {
  var list = {};
  list.head = null; // null ought to be first value
  list.tail = null; // null ought to be last value in storage
  var counter = 0;

  list.addToTail = function(value) {

    list[counter] = Node (value);

    if (counter === 0) {
      list.head = list[counter];
    }

    if (list.tail !== null) {
      list[counter - 1].next = list[counter];
    }

    list.tail = list[counter];
    console.log(list.tail.value, list[counter]);
    counter++;
  };

  list.removeHead = function() {
    // similar to pop returns removed head
    // var result = node[list.head];
    // list.head = node.next;
    // return result;
  };

  list.contains = function(target) {
    // does the list have the target? Return true or false
    // Create recursive function or simple for in loop to iterate through looking for target
    // return true or false
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
