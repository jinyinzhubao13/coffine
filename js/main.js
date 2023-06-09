$(function(){


    // 메뉴
    $(".sub").hide();

    $(".gnb").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".header_b").stop().animate({height:"400px"},500)
    }) //mouseenter

    $(".gnb").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".header_b").stop().animate({height:"103px"},500)
    }) //mouseleave

    // 메인 이미지 슬라이드
    $(".move").slick({
        dots:true,
        arrows:true,
        autoplay:true,
        autoplaySpeed:2000,
    }) //slick

    // 허니브레드
    $(".left_move").slick({
        autoplay:true,
        autoplaySpeed:2500,
        arrows:false,
        slidesToScroll:2,
        dots:true
    })

    // sns 탭
    $(".section5_inner li").click(function(e){
        // 하이퍼링크가 #으로 비어져 있을 때 메인 꼭대기로 빠지는 걸 방지해 줌
        e.preventDefault()
        $(".section5_inner li").toggleClass("on")
    })

    //팝업 배너

    $(".pop").slideDown()
    $(".pop_inner button").click(function(){
        $(".pop").slideUp();
    })




}) //jq