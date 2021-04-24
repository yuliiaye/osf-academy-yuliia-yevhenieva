//php_value display_errors 1

$(document).ready(function() {
    
    $('#cartItem').html($.cookie('productsInCart'));
    $('#desiredItem').html($.cookie('productsInWishlist'))

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
          $('.cookieOverlay').css('display', 'flex').hide().delay(1000).fadeIn();
        }
    }
    $('a.close').click(function() {
        $('.cookieOverlay').fadeOut();
        //sets the coookie to one minute if the popup is closed (whole numbers = days)
        setCookie( 'popupCookie', 'closed', .041666666666667 );
    });
    $('a.submit').click(function() {
        $('.cookieOverlay').fadeOut();
        //sets the coookie to five minutes if the popup is submited (whole numbers = days)
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

    
    
    $('button.addToCart').click(function() {
        let amount = $.cookie('productsInCart');
        if (!amount) {
            setCookie( 'productsInCart', 1, .041666666666667 );
            $('#cartItem').text(1);
        } else {
            amount++;
            setCookie( 'productsInCart', amount, .041666666666667 );
        }
        $('#cartItem').text(amount);
    });
    $('button.addToWishlist').click(function() {
        let desired = $.cookie('productsInWishlist');
        if (!desired) {
            setCookie( 'productsInWishlist', 1, .041666666666667 );
            $('#desiredItem').text(1);
        } else {
            desired++;
            setCookie( 'productsInWishlist', desired, .041666666666667 );
        }
        $('#desiredItem').text(desired)
    });



    const slider = $('#slider');
    const pagDef = $('#pagDef');
    const pagCentr = $('#pagCentr');
    const pagRght = $('#pagRght');
    pagDef.click(function() {
        pagCentr.removeClass('active');
        pagRght.removeClass('active');
        $(this).addClass('active');
        slider.removeClass('central').removeClass('right');
    })
    pagCentr.click(function() {
        pagDef.removeClass('active');
        pagRght.removeClass('active');
        $(this).addClass('active');
        slider.removeClass('right').addClass('central');
    })
    pagRght.click(function() {
        pagDef.removeClass('active');
        pagCentr.removeClass('active');
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
                console.log(data);
                $('#productsTemplate').tmpl(data.products).appendTo('#productTmpl');
                $('#loadMore').hide();
            },
            error: function (res) {
                console.log (res, 'Something went wrong')
            }
        })
    })


    $('#currentYear').html(new Date().getFullYear())
});