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

  document.getElementById("myH1").style.color = "#9e3838";
  //document.getElementById("myLi").style.color = "#9e3838";
  /*if(darkTheme)

  } else {
    //clockContainer.style.backgroundColor = "rgb("+255+","+255+","+255+")";
    //document.body.style.backgroundColor = "rgb("+255+","+255+","+255+")";
    clockContainer.style.color = "rgb("+0+","+0+","+0+")";
    dayContainerElement.style.color = "rgb("+0+","+0+","+0+")";
    //dayContainerElement.style.backgroundColor = "rgb("+255+","+255+","+255+")";
    dateContainerElement.style.color = "rgb("+0+","+0+","+0+")";
    flex.style.backgroundColor = "#F8F9F9";
  }*/
  //gangcolors = !gangcolors;
}
