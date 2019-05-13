//jshint esversion: 6

let gangcolors = false;


window.onload = function(){
  init();
};

function init() {
  changeColorButton = document.querySelector("#tlucolors");

  if(changeColorButton) {
    changeColorButton.addEventListener("click", toggleBackgroundColor);
  }
  const localValue = localStorage.getItem('gangcolors');
  if(localValue){
    gangcolors = JSON.parse(localValue);
    changeBackgroundColor();
  }
  console.log(gangcolors);
}

function toggleBackgroundColor() {
  console.log("Muudan värvi");
  
  if(gangcolors == false){
    gangcolors = true;
  } else {
    gangcolors = false;
  }
  changeBackgroundColor();
  saveLocal();
}

function changeBackgroundColor(){
    console.log("Muudan värvi");
  
    if(gangcolors == true){
      //document.getElementById("myH1").style.color = "#d31145";
      document.body.classList.add('light');
    } else {
      //document.getElementById("myH1").style.color = "#fff";
      document.body.classList.remove('light');
    }
  }

function saveLocal(){
  localStorage.setItem('gangcolors',JSON.stringify(gangcolors));
}

