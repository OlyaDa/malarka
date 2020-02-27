
//input mask

$('.phoneidcl').inputmask('+380(99) 999-99-99',{ "oncomplete": function(){
        $(".disbutt").prop("disabled", false);
    }, "onincomplete": function(){ $(".disbutt").prop("disabled", true); } });

//modal window

$(document).ready(function() {
    $('.popup-link').magnificPopup();
});

//scroll

$('.nav-link-new').mPageScroll2id();


//mobile menu (header)

$(window).scroll(function() {
    let height = $(window).scrollTop();
    if(height > 1){
        $('.header').addClass('color');
    } else{
        $('.header').removeClass('color');
    }
});


$(function(){
    $('.toggle-menu').on('click',function(){
        $('.mobile-menu').toggleClass('show');
        $( ".toggle-menu" ).toggleClass( "menu-on");
    });
});

$(document).ready(function() {
    $('.mobile-menu').click(function () {
        $('.mobile-menu').removeClass('show');
        $('.toggle-menu').removeClass('menu-on');
    });

    $(document).ready(function() {
        $('.nav-link-new').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });

        $('.content').click(function () {
            $('.mobile-menu').removeClass('show');
            $('.toggle-menu').removeClass('menu-on');
        });
    });
});

//slider for "examples"

$('.examples-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-right"></span> </button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },

        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

//slider for "certifications"

$('.certifications-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-right"></span> </button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
            }
        },

        {
            breakpoint: 577,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

//slider for "reviews"

$('.reviews-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    arrows: true,
    dots: false,
    centerMode: true,
    centerPadding: '0px',
    prevArrow:'<button class="slick-arrow slick-prev"> <span class="icon-left"></span> </button>',
    nextArrow:'<button class="slick-arrow slick-next"> <span class="icon-right"></span> </button>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                centerMode: false,
            }
        },

        {
            breakpoint: 691,
            settings: {
                slidesToShow: 1,
            }
        },
    ]
});

//services items

//btn-active1
//
// $(function(){
//     $('#btn-active1').on('click',function(){
//         $('#active1').addClass("d-none");
//         $('#active1').removeClass("d-flex");
//         $( '#cls1' ).removeClass('d-none');
//         $( '#cls1' ).addClass('d-flex');
//     });
// });

$(function(){
    $('#btn-cls1').on('click',function(){
        $('#active1').addClass("d-flex");
        $('#active1' ).removeClass('d-none');
        $( '#cls1' ).addClass('d-none');
        $( '#cls1' ).removeClass('d-flex');

        $('#active2').addClass("d-none");
        $('#active2').removeClass("d-flex");
        $( '#cls2' ).removeClass('d-none');
        $( '#cls2' ).addClass('d-flex');

        $('#active3').addClass("d-none");
        $('#active3').removeClass("d-flex");
        $( '#cls3' ).removeClass('d-none');
        $( '#cls3' ).addClass('d-flex');

        $('#active4').addClass("d-none");
        $('#active4').removeClass("d-flex");
        $( '#cls4' ).removeClass('d-none');
        $( '#cls4' ).addClass('d-flex');
    });
});

//btn-active2

$(function(){
    $('#btn-cls2').on('click',function(){
        $('#active2' ).removeClass('d-none');
        $('#active2').addClass("d-flex");
        $( '#cls2' ).addClass('d-none');
        $( '#cls2' ).removeClass('d-flex');

        $('#active1').addClass("d-none");
        $('#active1').removeClass("d-flex");
        $( '#cls1' ).removeClass('d-none');
        $( '#cls1' ).addClass('d-flex');

        $('#active3').addClass("d-none");
        $('#active3').removeClass("d-flex");
        $( '#cls3' ).removeClass('d-none');
        $( '#cls3' ).addClass('d-flex');

        $('#active4').addClass("d-none");
        $('#active4').removeClass("d-flex");
        $( '#cls4' ).removeClass('d-none');
        $( '#cls4' ).addClass('d-flex');
    });
});

// $(function(){
//     $('#btn-active2').on('click',function(){
//         $('#active2').addClass("d-none");
//         $('#active2').removeClass("d-flex");
//         $( '#cls2' ).removeClass('d-none');
//         $( '#cls2' ).addClass('d-flex');
//     });
// });

//btn-active3

$(function(){
    $('#btn-cls3').on('click',function(){
        $('#active3' ).removeClass('d-none');
        $('#active3').addClass("d-flex");
        $( '#cls3' ).addClass('d-none');
        $( '#cls3' ).removeClass('d-flex');

        $('#active4').addClass("d-none");
        $('#active4').removeClass("d-flex");
        $( '#cls4' ).removeClass('d-none');
        $( '#cls4' ).addClass('d-flex');

        $('#active2').addClass("d-none");
        $('#active2').removeClass("d-flex");
        $( '#cls2' ).removeClass('d-none');
        $( '#cls2' ).addClass('d-flex');

        $('#active1').addClass("d-none");
        $('#active1').removeClass("d-flex");
        $( '#cls1' ).removeClass('d-none');
        $( '#cls1' ).addClass('d-flex');
    });
});

// $(function(){
//     $('#btn-active3').on('click',function(){
//         $('#active3').addClass("d-none");
//         $('#active3').removeClass("d-flex");
//         $( '#cls3' ).removeClass('d-none');
//         $( '#cls3' ).addClass('d-flex');
//     });
// });

//btn-active4

$(function(){
    $('#btn-cls4').on('click',function(){
        $('#active4' ).removeClass('d-none');
        $('#active4').addClass("d-flex");
        $( '#cls4' ).addClass('d-none');
        $( '#cls4' ).removeClass('d-flex');

        $('#active3').addClass("d-none");
        $('#active3').removeClass("d-flex");
        $( '#cls3' ).removeClass('d-none');
        $( '#cls3' ).addClass('d-flex');

        $('#active2').addClass("d-none");
        $('#active2').removeClass("d-flex");
        $( '#cls2' ).removeClass('d-none');
        $( '#cls2' ).addClass('d-flex');

        $('#active1').addClass("d-none");
        $('#active1').removeClass("d-flex");
        $( '#cls1' ).removeClass('d-none');
        $( '#cls1' ).addClass('d-flex');
    });
});

// $(function(){
//     $('#btn-active4').on('click',function(){
//         $('#active4').addClass("d-none");
//         $('#active4').removeClass("d-flex");
//         $( '#cls4' ).removeClass('d-none');
//         $( '#cls4' ).addClass('d-flex');
//     });
// });


// setNameScroll

const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');

function setNameScroll(namescroll, customTextFormSpanF) {

    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
};