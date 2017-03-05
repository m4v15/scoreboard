
var subbtn = document.querySelector(".subbtn");
playerNode = document.createElement("div");
document.body.appendChild(playerNode);

subbtn.addEventListener("click", function(){
  var playaz = document.querySelector(".players")
  newplayerNode = document.createElement("p");
  newplayerNode.className = "playernum";
  newplayerNode.innerHTML = "Number of players: "+playaz.value;
  document.body.replaceChild(newplayerNode,playerNode);


  var askroundNode = document.createElement("section");
  var labelNode = document.createElement("label");
  labelNode.innerHTML = '<input list="roundnum" name="rounds" class="rounds"/>';
  askroundNode.appendChild(labelNode);

  var roundlistNode = document.createElement("datalist");
  roundlistNode.id = "roundnum";
  var roundrange=[];

  for (var i=1; i<=(Math.floor(52/playaz.value));i++){
    var listNode = document.createElement("option");
    listNode.value = i;
    roundlistNode.appendChild(listNode);
  }

  askroundNode.appendChild(roundlistNode);
  document.body.appendChild(askroundNode);

})
