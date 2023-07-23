







$('.owl-carousel').owlCarousel({
    loop:true,
    margin:25,
    autoplay:true,
    autoplayTimeout:2000,
    nav:true,
    navText : [` <i class="fa-solid fa-arrow-left fa-3x"></i> `,`<i class="fa-solid fa-arrow-right fa-3x"></i>`],
    responsive:{
        0:{
            items:1,
            nav : false,
            dots: false ,
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
}) 