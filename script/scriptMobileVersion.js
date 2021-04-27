$(document).ready(function(){
    if ($(window).width() < 1280 && $(window).width() > 320) {
        $('.dropbtn').click($('.header-nav').css('width', '100%').css('height', '100vh'));
        $('.popup').css('transform', 'scale(0.8)').css('top', '10%').css('left', '18%');
        $('.cookieBody').css('width', '80%');
        $('.cookieBody p').css('width', '70%');
        $('.infoTop').css('transform', 'scale(0.9)');
        $('.infoTop').css('flex-direction', 'column').css('padding', '0');
        $('.productInfo').css('width', '100%');
        $('.mainImg').css('transform', 'scale(0.7)');
        $('.infoRightside').css('justify-content', 'space-evenly');
        $('.desc').css('flex-direction', 'column').css('justify-content', 'space-evenly').css('height', 'auto')
    }
    if ($(window).width() < 768) {
        $('#mob-nav').show();
        // $('.popup').css('transform', 'scale(0.8)').css('top', '10%').css('left', '18%');
        $('.popup').css('width', '95vw').css('height', '95vh').css('position', 'absolute').css('top', '10px').css('left', '10px').css('tranform', 'scale(0.7)').css('padding', '25px');
        $('.popup form').css('height', '80%')
        $('.cookieBody').css('width', '90%').css('height', '80vh').css('justify-content', 'flex-start').css('margin-left', '-25px');
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
    }
})