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


// main landing

$(document).ready(function () {
    $("#owl-carousel1").owlCarousel({
        loop:true,
        rtl:true,
        dots:true,
 
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


$(document).ready(function () {
    $('#owlcarousel-product3').owlCarousel({
        rtl:true,
        loop:false,
        items:3,
        margin:70,
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

// main landing


// main about us
$(document).ready(function () {
    $("#aboutUs-owl-carousel").owlCarousel({
        loop:true,
        rtl:true,
        dots:true,
 
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1,
   
    });
});
// main about us