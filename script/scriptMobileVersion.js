$(document).ready(function(){
    if ($(window).width() < 1280 && $(window).width() >= 768) {
        $('.dropbtn').click($('.header-nav').css('width', '100%').css('height', '100vh'));
        $('.popup').css('transform', 'scale(0.8)').css('top', '10%').css('left', '18%');
        $('.cookieBody').css('width', '200px%');
        $('.cookieBody p').css('width', '70%');
        $('.infoTop').css('transform', 'scale(0.9)');
        $('.infoTop').css('flex-direction', 'column').css('padding', '0');
        $('.productInfo').css('width', '100%');
        $('.mainImg').css('transform', 'scale(0.7)');
        $('.infoRightside').css('justify-content', 'space-evenly');
        $('.desc').css('flex-direction', 'column').css('justify-content', 'space-evenly').css('height', 'auto')
    }
    if ($(window).width() < 768 && $(window).width() >= 320){
        $('#mob-nav').show();
        // $('.popup').css('transform', 'scale(0.8)').css('top', '10%').css('left', '18%');
        // $('.popup').css('width', '300px').css('height', '380px').css('position', 'static').css('tranform', 'scale(0.7)').css('padding', '25px');
        // $('.popup form').css('height', '80%')
        $('.cookieOverlay').css('box-sizing', 'border-box')
        $('.cookieBody').css('width', '90%').css('height', '80vh').css('justify-content', 'flex-start').css('margin-left', '-25px').css('margin', '0 auto');
        $('.cookieBody p').css('width', '100%');
        $('#sale').click(function(){
            $('.dropdown-container:nth-child(-n + 3) a').show();
            $('#productCategories').css('top', '-15px');
        })
        $('#productCategories').click(function(){
            $('.dropdown-container:nth-child(4n) a').show();
        })
        $('#footerCategories').click(function(){
            $('.sitemap div:nth-child(-n +3) a').show();
        })
        $('#footerAbout').click(function(){
            $('.sitemap div:nth-child(4n) a').show();
        })
        $('.items').slick({
            dots: true,
            prevArrow: false,
            nextArrow: false,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
            variableWidth: true
        })
        $('.posts').slick({
            dots: true,
            prevArrow: false,
            nextArrow: false,
            autoplay:true,
            autoplaySpeed: 5000,
            infinite: true,
            slidesToShow: 1,
            adaptiveHeight: true,
        })
    }
})