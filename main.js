// Slider
$(document).ready( function() {

  $('.prev').click( function(){
    nextPrev('prev');
    //console.log('prev');
  });

  $('.next').click( function(){
    nextPrev('next');
    //console.log('next');
  });

});

  // Function per il Next/Prev slider
function nextPrev(direction) {
    var activeImg = $('.images img.active');
    var activeNav = $('.nav i.active');

  // Togliere active alla prima img
    activeImg.removeClass('active');
    activeNav.removeClass('active');

  // Se vado avanti next
  if (direction === 'next') {
    if (activeImg.hasClass('last')) {
      $('.images img.first').addClass('active');
      $('.nav i.first').addClass('active');
    }
    else{
      activeImg.next('img').addClass('active');
      activeNav.next('i').addClass('active');
    }
  }

  // Se vado indietro Prev
  if (direction === 'prev') {
    if (activeImg.hasClass('first')) {
      $('.images img.last').addClass('active');
      $('.nav i.last').addClass('active');
    }
    else{
      activeImg.prev('img').addClass('active');
      activeNav.prev('i').addClass('active');
    }
  }
}
