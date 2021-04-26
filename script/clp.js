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


    $('.color-pagination span').click(function(){
        $(this).siblings().removeClass('picked');
        $(this).addClass('picked');
    })
})