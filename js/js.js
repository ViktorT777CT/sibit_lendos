$(document).ready(function(){
    $('.owl-carousel1').owlCarousel({
        items:2,
        loop:false,
        center:true,
        autoWidth: true,
        margin:20,
        responsive:{
            0:{
                nav: true
            }, //при ширине окна < 992 отображать 1 элемент
            768:{
                nav: false
            }  //при ширине окна > 992 отображать 3 элемент
        }
    });
    $('.owl-carousel2').owlCarousel({
        loop:false,
        margin:20,
        nav: false,
        responsive:{
            0:{
                items:2
            },
            768:{
                items:4

            }  
        }
    });

});
$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("#header").addClass("darkHeader");
    } else {
        $("#header").removeClass("darkHeader");
    }
});

