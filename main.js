$(document).ready(function () {
    $('.burgerMenu-backshadow').hide();
    $('.burgerMenu').click(function () {
        $('.burgerMenu-backshadow').fadeIn();
    });
    $('.burger-close').click(function () {
        $('.burgerMenu-backshadow').fadeOut();
    });



    $('.container-ToUp').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow');
    });



});


// main

$(document).ready(function () {
    $("#owl-carousel1").owlCarousel({
        loop:true,
        rtl:true,
 
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
   
    });
});

$(document).ready(function () {
    $('#owlcarousel-product').owlCarousel({
        rtl:true,
        loop:false,
        items:4,
        margin:40,
        dots:false,
        responsive:{
            margin:10,
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});


$(document).ready(function () {
    $('#owlcarousel-product2').owlCarousel({
        rtl:true,
        loop:false,
        items:4,
        margin:40,
        dots:false,
        responsive:{
            margin:10,
            0:{
                items:2
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })
});

// main