// HERO BUTTONS
 $(document).ready(function(){
    $("#hero-buttons").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
 });

// HEADER LINKS

$(document).ready(function(){
    $("#header-links").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});
 
// SCROLL UP BUTTON

$(function() {
  
  $('.scroll-up').click(function() {
    
    $("html, body").animate({
      scrollTop:0
    },1000);
  })
})

$(window).scroll(function() {
  
  if ($(this).scrollTop()>200) {
    
    $('.scroll-up').fadeIn();
  }
 
  else {
    $('.scroll-up').fadeOut();
  }
});
