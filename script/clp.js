$(document).ready(function(){
    $.ajax({
        type:'GET',
        dataType: 'json',
        async: false,
        url: './products.json',

        success: function(data) {
            $('#productsTemplate').tmpl(data.products).appendTo('#productTmpl');
        },

        error: function (res) {
            console.log (res, 'Something went wrong')
        }
    })
    if ($(window).width() < 768 && $(window).width() >= 320) {
        $('#hideFilters').show()

        $('#hideFilters').click(function(){
            $('.filters').hide();
            $(this).html('Show Filters').removeAttr('id').attr('id', 'showFilters');
            $('#showFilters').click(function(){
                console.log('hello')
                $('.filters').show();
                $(this).html('Hide Filters').removeAttr('id').attr('id', 'hideFilters');
            })
        })
        
    }

    $('.btnGreen').click(function(){
        $('.item:nth-child(-n + 8)').show();
    })

    $('.color-pagination span').click(function(){
        $(this).siblings().removeClass('picked');
        $(this).addClass('picked');
    })
})