$(document).ready(function () {
    $('.burgerMenu-backshadow').hide();
    $('.burgerMenu').click(function () {
        $('.burgerMenu-backshadow').fadeIn();
        // $('body').toggle('lockScroll');
    });
});