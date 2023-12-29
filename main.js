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