$(function(){


    $(".sub").hide();

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({height:"400px"},500)
    }) //mouseenter

    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({height:"103px"},500)
    }) //mouseleave


    $(".move").slick({
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
    }) //slick




}) //jq