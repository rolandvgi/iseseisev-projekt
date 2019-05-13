//jshint esversion: 6

let gangcolors = false;

window.onload = function(){
  init();
};

function init() {
  changeColorButton = document.querySelector("#tlucolors");

  changeColorButton.addEventListener("click", changeBackgroundColor);
  
}


function changeBackgroundColor(){
  console.log("Muudan värvi");

  if(gangcolors == false){
    document.getElementById("myH1").style.color = "#d31145";
    document.body.classList.add('light');
    gangcolors = true;
  } else {
    document.getElementById("myH1").style.color = "#fff";
    document.body.classList.remove('light');
    gangcolors = false;
  }

}
