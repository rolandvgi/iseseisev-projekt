/*jshint esversion:6*/
window.onload = function() {
    init();
  };
  function init(){
    var x = localStorage.getItem("gangcolors");
    console.log(x);
    if(x == true){
        document.getElementById("myH1").style.color = "#d31145";
        document.body.classList.add('light');
        x = true;
      } else {
        document.getElementById("myH1").style.color = "#fff";
        document.body.classList.remove('light');
        x = false;
      }
  }