$(document).ready(function(){
    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header-nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });


    let amount = $.cookie('productsInCart');
    let desired = $.cookie('productsInWishlist');
    $('#mob-nav .count.cartItem').text(amount)
    $('#mob-nav .count.desiredItem').text(desired)

    function setCookie(cname, cvalue, exdays) {
        let d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }


    $(document).on('click', '.addToCart', function() {
        let amount = $.cookie('productsInCart');
        if (!amount) {
            setCookie( 'productsInCart', 1, .041666666666667 );
            $('#mob-nav .count.cartItem').text(1);
        } else {
            amount++;
            setCookie( 'productsInCart', amount, .041666666666667 );
            $('#mob-nav .count.cartItem').text(amount);
        }
        console.log('item was added to cart')
    })
    $(document).on('click', '.addToWishlist', function() {
        let desired = $.cookie('productsInWishlist');
        if (!desired) {
            setCookie( 'productsInWishlist', 1, .041666666666667 );
            $('#mob-nav .count.desiredItem').text(1);
        } else {
            desired++;
            setCookie( 'productsInWishlist', desired, .041666666666667 );
            $('#mob-nav .count.desiredItem').text(desired);
        }
        console.log('item was added to wishlist')
    })



    $('#btnGreen').click(function(){
        let val = $('.inputAmount').val();
        let amount = $.cookie('productsInCart');
        if (!amount) {
            setCookie( 'productsInCart', val, .041666666666667 );
            $('#mob-nav .count.cartItem').text(val);
        } else { 
            let newAmount = parseInt(amount) + parseInt(val);
            setCookie( 'productsInCart', newAmount, .041666666666667 );
            $('#mob-nav .count.cartItem').text(newAmount);
        }
        console.log('item was added to cart')
    })


    if ($(window).width() < 1280 && $(window).width() >= 768) {
        $('.dropbtn').click($('.header-nav').css('width', '100%').css('height', '100vh'));
        $('.popup').css('transform', 'scale(0.8)').css('top', '10%').css('left', '18%');
        $('.cookieBody').css('width', '200px');
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
        $('.cookieOverlay').css('box-sizing', 'border-box')
        $('.cookieBody').css('width', '90%').css('height', '60vh').css('justify-content', 'flex-start').css('margin-left', '-25px').css('margin', '0 auto');
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
        $('.setImg').slick({
            dots: true,
            prevArrow: false,
            nextArrow: false,
            infinite: false,
            slidesToShow: 3,
            centerPadding: '50%'
        })
    }
})