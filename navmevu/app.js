$(document).ready(function(){
    $(".hamburger-menu").click(function(){
        $(this).toggleClass("open"); // add and remove class
        $('.menu').slideToggle();
    });

    // Add an Active class in a tag
    $(".menu li a").click(function(){
        $(".menu li a").removeClass("active");
        $(this).addClass("active");
    });
});