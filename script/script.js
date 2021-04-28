//php_value display_errors 1

$(document).ready(function() {
    
    $('#cartItem').html($.cookie('productsInCart'));
    $('#desiredItem').html($.cookie('productsInWishlist'))
    $('.item').append('<div class="overlay"><button class="addToCart"><img src="./images/plus.png" alt="plus icon"></button><button class="addToWishlist"><img src="./images/heart.png" alt="like icon"></button></div>')



    const popup = $('.popup');
    const modalWrapper = $('.modal-wrapper');
    $('.fa-user').click(function() {
        popup.addClass('show');
        modalWrapper.addClass('darken');

    });
    $(document).mouseup(function(e) {
        if (!popup.is(e.target) && popup.has(e.target).length == 0) {
            popup.removeClass('show');
            modalWrapper.removeClass('darken');
        }
    });
    $('.fa-eye').click(function() {
        const psw = $('#password');
        const type = psw.attr('type') === 'password'?'text':'password';
        psw.attr('type', type);
    })
    


    if( getCookie('popupCookie') != 'submited') { 
        if(getCookie('popupCookie') != 'closed' ) {
          $('.cookieOverlay').css('display', 'flex').hide().delay(10000).fadeIn();
        }
    }
    $('a.close').click(function() {
        $('.cookieOverlay').fadeOut();
        //sets the coookie to one hour if the popup is closed (whole numbers = days)
        setCookie( 'popupCookie', 'closed', .041666666666667 );
    });
    $('a.submit').click(function() {
        $('.cookieOverlay').fadeOut();
        //sets the coookie to one hour if the popup is submited (whole numbers = days)
        setCookie( 'popupCookie', 'submited', .041666666666667 );
    });
    function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
    }
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
            $('#cartItem').text(1);
        } else {
            amount++;
            setCookie( 'productsInCart', amount, .041666666666667 );
        }
        $('#cartItem').text(amount);
        console.log('item was added to cart')
    })
    $(document).on('click', '.addToWishlist', function() {
        let desired = $.cookie('productsInWishlist');
        if (!desired) {
            setCookie( 'productsInWishlist', 1, .041666666666667 );
            $('#desiredItem').text(1);
        } else {
            desired++;
            setCookie( 'productsInWishlist', desired, .041666666666667 );
        }
        $('#desiredItem').text(desired);
        console.log('item was added to cart')
    })



    $('#btnGreen').click(function(){
        let val = $('.inputAmount').val();
        let amount = $.cookie('productsInCart');
        if (!amount) {
            setCookie( 'productsInCart', val, .041666666666667 );
            $('#cartItem').text(val);
        } else { 
            newAmount = parseInt(amount) + parseInt(val);
            setCookie( 'productsInCart', newAmount, .041666666666667 );
        }
        $('#cartItem').text(newAmount);
        console.log('item was added to cart')
    })



    $('#specificItem .img, #specificItem h4, #specificItem #button span:first-child').click(function(e){
        e.preventDefault();
        window.location = 'https://my-project-osf.000webhostapp.com/';    
    });
    
    $('#viewMore').click(function(e){
        e.preventDefault();
        window.location = 'https://my-project-osf.000webhostapp.com/clp.html';    
    });
    
    $('#fb').click(function(e){
        e.preventDefault();
        window.location = 'https://www.facebook.com/';    
    });




    const slider = $('#slider');
    const pagDef = $('#pagDef');
    const pagCentr = $('#pagCentr');
    const pagRght = $('#pagRght');
    pagDef.click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        slider.removeClass('central').removeClass('right');
    })
    pagCentr.click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        slider.removeClass('right').addClass('central');
    })
    pagRght.click(function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');
        slider.removeClass('central').addClass('right');
    })



    $('#loadMore').click(function() {
        console.log('button clicked')
        // request
        $.ajax({
            type:'GET',
            dataType: 'json',
            async: false,
            url: './products.json',

            success: function(data) {
                $('#productsTemplate').tmpl(data.products).appendTo('#productTmpl');
                $('.item:nth-child(n + 13)').hide();
                $('#loadMore').hide();
                $('#loadMore2').css('display', 'block');
            },

            error: function (res) {
                console.log (res, 'Something went wrong')
            }
        })
    })
    $('#loadMore2').click(function(){
        $('.item:nth-child(n + 13)').show();
        $(this).hide();
    })



    if ($(window).width() > 768){
        $('.posts').slick({
            prevArrow:$('.btn-left'),
            nextArrow:$('.btn-right'),
            autoplay:true,
            autoplaySpeed: 5000,
            cssEase:'ease',
            infinite: true,
            initialSlide: 0,
            adaptiveHeight: true,
            slidesToShow: 4,
            slidesPerRow: 4,
            slidesToScroll: 4,
            swipe:true,
            touchMove:true,
            lazyLoad:'ondemand',
            pauseOnHover:true,
            pauseOnFocus:true,        
        });
    }



    $('#currentYear').html(new Date().getFullYear())



    /////////////////////for mobile adapptiveness\\\\\\\\\\\\\\\\\\\\\\\

    $('.menu-burger__header').click(function() {
        $('.menu-burger__header').toggleClass('open-menu');
        $('.header-nav').toggleClass('open-menu');
        $('body').toggleClass('fixed-page');
    });
});