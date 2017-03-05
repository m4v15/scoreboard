
var subbtn = document.querySelector(".subbtn");

subbtn.addEventListener("click", function(){
  var playaz = document.querySelector(".players")
  playerNode = document.createElement("div");
  playerNode.innerHTML = "Number of players: "+playaz.value;
  document.body.appendChild(playerNode);
})

var askroundNode = document.createElement()
