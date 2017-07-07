var LinkedList = function() {
  var list = {};
  headValuePointer = 0;
  tailValuePointer = -1;
  nextIndexToAdd = 0; //This increases every time
  list.head = null; // 'null' ought to be the first value, or the first bit of data stored in object
  list.tail = null; // 'null' ought to be the last value stored

  list.addToTail = function(value) {
    list[nextIndexToAdd] = Node(value);
    list[nextIndexToAdd - 1].next = value;
    nextIndexToAdd++;
    tailValuePointer++;

    // list.0 = {'puppy': 'puppy', next: 'dog'}
    // list.1 - {'dog': 'dog', next: 'null'}
    // similar to push??
    // list.tail = value??
    //
  };

  list.removeHead = function() {
    // similar to pop returns removed head
    // save value in variable
    // head pointer index increases by one
    // return variable, you don't even need to delete
  };

  list.contains = function(target) {
    // does the list have the target? Return true or false
    // var recursive = function (list[headValuePointer].value) {if (list[headVauePointer].value === target) {return true;} else {recursive (list[headValuePointer+1].value)}}
    // for (var i = headValuePointer; i < Object.keys(list).length; i++)
    // if (list[i].value === target) {return true;} return false;
  };

  return list;
};

var Node = function(value) {
  var node = {};
  node.value = value;
  node.next = null; // value ought to be the value of the next node....

  return node;
};

/*storage {
  1: 'dog',
  2: 'puppy'
}

headValuePointer = 0; // Increases by 1 when removed at head
tailValuePointer = 2; // Increases by 1 when add tail


list.head = headValuePointer
list.tail = tailValuePointer
list.nextIndex = 3 // when something is added to list, nextIndex goes up

*/

/*
 * Complexity: What is the time complexity of the above functions?
 */