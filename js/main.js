$(document).ready(function () {
    function nextSlide() {
        var currentSlide = $('.carousel .active');
        var nextSlide = currentSlide.next('.slide').length ? currentSlide.next('.slide') : $('.carousel .slide').first();

        currentSlide.removeClass('active');
        nextSlide.addClass('active');
        updateIndicators();
    }

    // Next Button Click Event
    $('.next-btn').on('click', function(){
        nextSlide();
    });

    // Add Dot Indicators Dynamically
    $('.carousel').after('<div class="dots"></div>');
    $('.carousel .slide').each(function(index) {
        $('.dots').append('<span class="dot" data-index="' + index + '"></span>');
    });

    // Function to update the active dot indicator
    function updateIndicators() {
        var index = $('.carousel .slide.active').index();
        $('.dot').removeClass('active-dot');
        $('.dot').eq(index).addClass('active-dot');
    }

    // Click event for dot navigation
    $('.dot').on('click', function() {
        var index = $(this).data('index');
        $('.carousel .slide.active').removeClass('active');
        $('.carousel .slide').eq(index).addClass('active');
        updateIndicators();
    });

    // Initialize the dots
    updateIndicators();
});


$(document).ready(function() {
    var currentIndex = 0; // Initial slide index
    var totalSlides = $('.carousel .slide').length; // Get total number of slides

    // Function to change slide and update indicators
    function changeSlide() {
        // Remove active class from the current slide
        $('.carousel .slide').removeClass('active');
        // Add active class to the next slide
        $('.carousel .slide').eq(currentIndex).addClass('active');

        // Remove active class from all indicators
        $('.carousel-indicators img').removeClass('active').addClass('inactive');
        // Add active class to the current indicator
        $('.carousel-indicators img').eq(currentIndex).removeClass('inactive').addClass('active');
    }

    // Handle next button click to change the slide
    $('.next-btn').click(function() {
        currentIndex = (currentIndex + 1) % totalSlides; // Go to the next slide, loop back to the first one
        changeSlide(); // Update the carousel
    });

    // Initialize the first slide as active
    changeSlide();
});
