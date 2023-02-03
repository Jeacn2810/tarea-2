function addToHistory(result) {
  var node = document.createElement("LI");
  var textnode = document.createTextNode(result);
  node.appendChild(textnode);
  document.getElementById("history").appendChild(node);
}
