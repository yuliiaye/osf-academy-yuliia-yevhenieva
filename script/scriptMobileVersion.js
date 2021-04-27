$(document).ready(function(){
    if ($(window).width() < 1280) {
        // $('.icons-block').detach().appendTo($('body'));
        $('.dropbtn').click($('.header-nav').css('width', '100%').css('height', '100vh'));
        $('.popup').css('transform', 'scale(0.8)').css('top', '10%').css('left', '18%');
        $('.cookieBody').css('width', '80%');
        $('.cookieBody p').css('width', '70%');
        $('.infoTop').css('transform', 'scale(0.9)');
        $('.infoTop').css('flex-direction', 'column').css('padding', '0');
        $('.productInfo').css('width', '100%');
        // $('.infoTop').css('width', '100%');
        $('.mainImg').css('transform', 'scale(0.7)');
        $('.infoRightside').css('justify-content', 'space-evenly');
        $('.desc').css('flex-direction', 'column').css('justify-content', 'space-evenly').css('height', 'auto')
    }
})