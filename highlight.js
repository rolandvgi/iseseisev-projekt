/*jshint esversion:6*/
function precarica( img ) {
  $( img ).each( function () {
    $( '<img/>' )[ 0 ].src = this;
  });
}
precarica([
    'pildid/highlight/marepink.png',
    'pildid/highlight/astra.png',
    'pildid/highlight/nova.png',
    'pildid/highlight/terra.png',
  ]);

jQuery(document).ready(function () {
  console.log('tess2t');
  $('.title-astra-silva').mouseout(function(){
    $("#map").attr('src', 'pildid/main2.png');
  }),
  $('.title-astra-silva').mouseover( function(){
    $("#map").attr('src', 'pildid/highlight/astra.png');
  });
  $('.title-terra').mouseout(function(){
    $("#map").attr('src', 'pildid/main2.png');
  }),
  $('.title-terra').mouseover( function(){
    console.log('tesst');
    $("#map").attr('src', 'pildid/highlight/terra.png');
  });
  $('.title-mare').mouseout(function(){
    $("#map").attr('src', 'pildid/main2.png');
  }),
  $('.title-mare').mouseover( function(){
    $("#map").attr('src', 'pildid/highlight/marepink.png');
  });
  $('.title-nova').mouseout(function(){
    $("#map").attr('src', 'pildid/main2.png');
  }),
  $('.title-nova').mouseover( function(){
    $("#map").attr('src', 'pildid/highlight/nova.png');
  });
  $('.title-ursa').mouseout(function(){
    $("#map").attr('src', 'pildid/main2.png');
  }),
  $('.title-ursa').mouseover( function(){
    $("#map").attr('src', 'pildid/highlight/ursa.png');
  });
});
