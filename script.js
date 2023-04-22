/*$('.menu').click(function() {
    $('.third').toggle(); 
});*/
$('.menu').click(function() {
    $('.third').toggleClass('third-1'); 
    $('.third').toggleClass('third-2'); 
});

var cardIndex = 1;
function NewsRotator() {
  $(".card").hide();
  $(".card" + cardIndex).show();
  
  var cardCount = 4;
  cardIndex++;
  if(cardIndex > cardCount) {
    cardIndex = 1;
  }
}

$(document).ready(function() {
  NewsRotator();
  setInterval(NewsRotator, 5000);
});