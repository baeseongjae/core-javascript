let first = document.querySelector('.first');
let second = document.querySelector('.second');

function next(node){

  do{
    node = node.nextSibling;

  }while(node.nodeType !== document.ELEMENT_NODE)

  return node
}

// next(first) // second 

// prev(second)   // first 

function prev(node){
  do{
    node = node.previousSibling;
  }while(node.nodeType !== document.ELEMENT_NODE)

  return node;
}
