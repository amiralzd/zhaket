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
    // $('.owl-carousel').owlCarousel({
    //     items:1,
    //     rtl:true,
    //     loop:true,
    //     margin:10,
    //     // nav:true,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         600:{
    //             items:3
    //         },
    //         1000:{
    //             items:5
    //         }
    //     }
    // })

    $(".owl-carousel").owlCarousel({
        loop:true,
        rtl:true,
 
        navigation : true, // Show next and prev buttons
   
        slideSpeed : 300,
        paginationSpeed : 400,
   
        items : 1, 
        itemsDesktop : false,
        itemsDesktopSmall : false,
        itemsTablet: false,
        itemsMobile : false
   
    });
});

// main