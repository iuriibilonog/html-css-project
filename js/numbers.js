//TIME COUNT IN HERO

$('.representations-number').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: Number($(this).attr("data-duration")),
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

// TIME COUNT IN ABOUT 

var number = document.querySelector('.about__point'),
		numberTop = number.getBoundingClientRect().top,
    start = +number.innerHTML, end = +number.dataset.max;

window.addEventListener('scroll', function onScroll() {
		if(window.pageYOffset > numberTop - window.innerHeight / 2) {
    		this.removeEventListener('scroll', onScroll);
        var interval = setInterval(function() {
        		number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
    }
});




