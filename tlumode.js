//jshint esversion: 6
 let gangcolors;
window.onload = function(){
  init();
  if(gangcolors == true){
    document.getElementById("myH1").style.color = "#d31145";
    document.body.classList.add('light');
  }
};

function init() {
  changeColorButton = document.querySelector("#tlucolors");
  changeColorButton.addEventListener("click", changeBackgroundColor);
 // var x = localStorage.getItem("gangcolors");
}
var x = localStorage.getItem("gangcolors");
function changeBackgroundColor(){
  console.log("Muudan värvi");
  if(gangcolors == false){
    document.getElementById("myH1").style.color = "#d31145";
    document.body.classList.add('light');
    gangcolors = true;
    localStorage.setItem('gangcolors', JSON.stringify(gangcolors));
  } else {
    document.getElementById("myH1").style.color = "#fff";
    document.body.classList.remove('light');
    gangcolors = false;
    localStorage.setItem('gangcolors', JSON.stringify(gangcolors));
  }
}