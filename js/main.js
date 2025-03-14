$(document).ready(function () {
    function nextSlide() {
        var currentSlide = $('.carousel .active');
        var nextSlide = currentSlide.next('.slide').length ? currentSlide.next('.slide') : $('.carousel .slide').first();

        currentSlide.removeClass('active');
        nextSlide.addClass('active');
        updateDots();
    }

    function prevSlide() {
        var currentSlide = $('.carousel .active');
        var prevSlide = currentSlide.prev('.slide').length ? currentSlide.prev('.slide') : $('.carousel .slide').last();

        currentSlide.removeClass('active');
        prevSlide.addClass('active');
        updateDots();
    }

    // Next Button Click
    $('.next-btn').on('click', function(){
        nextSlide();
    });

    // Add Previous Button
    $('.carousel-container').append('<button class="prev-btn"><</button>');

    $('.prev-btn').on('click', function(){
        prevSlide();
    });

    // Add Dot Indicators
    $('.carousel').after('<div class="dots"></div>');
    $('.carousel .slide').each(function(index) {
        $('.dots').append('<span class="dot" data-index="' + index + '"></span>');
    });

    function updateDots() {
        var index = $('.carousel .slide.active').index();
        $('.dot').removeClass('active-dot');
        $('.dot').eq(index).addClass('active-dot');
    }

    $('.dot').on('click', function() {
        var index = $(this).data('index');
        $('.carousel .slide.active').removeClass('active');
        $('.carousel .slide').eq(index).addClass('active');
        updateDots();
    });

    // Initialize the dots
    updateDots();
});
