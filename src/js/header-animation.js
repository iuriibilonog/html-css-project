function pulssate() {
    if ( $('.bg-elipse').hasClass('active') ) {
        $('.bg-elipse').removeClass('active')
    } else {
        $('.bg-elipse').addClass('active')
    }
}
window.setInterval(function() { pulssate(); },1000);