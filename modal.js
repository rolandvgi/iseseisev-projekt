/*jshint esversion:6*/



/*window.onload = openmodal();

function openmodal() {
  console.log("funktsioon starts");*/
  // Get the modal
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  //code snatched from
  var img = $('.ASpics');
  var modalImg = $("#img01");
  var captionText = document.getElementById("caption");
  $('.ASpics').click(function(){
    modal.style.display = "block";
    var newSrc = this.src;
    modalImg.attr('src', newSrc);
    captionText.innerHTML = this.alt;
  });

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  };
//}


