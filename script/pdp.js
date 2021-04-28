$(document).ready(function(){
   $('.descText').multiTextToggleCollapse({
       line: 3
   })

    $('.setImg img').click(function(){
        $('.setImg').children().removeClass('active');
        $(this).addClass('active'); 

        let id = $(this).attr('class').split(' ', 1)[0];
        console.log(id)
        $('.mainImg').children().removeClass('active');
        $(`.mainImg .${id}`).addClass('active');
    })

    if ($(window).width() < 768 && $(window).width() >= 320) {
        $('.setImg img').click(function(){
            $(this).siblings().removeClass('active');
            $(this).addClass('active'); 
    
            let id = $(this).attr('class').split(' ', 1)[0];
            console.log(id)
            $('.mainImg').children().removeClass('active');
            $(`.mainImg .${id}`).addClass('active');
        })
    }

    $('.bar-item').click(function(){
        let id = $(this).attr('class').split(' ', 1)[0];
        let tab = $('.tab');
        for (let i = 0; i < tab.length; i++){
            tab[i].style.display = 'none';
        }
        $(`#${id}`).css('display', 'block');
    })

    $('.bar-item').click(function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
    })

    if ($(window).width() >= 320 && $(window).width() < 768) {
        $('.latest-posts').show();
    }
});