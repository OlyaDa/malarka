
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
            breakpoint: 577,
            settings: {
                centerMode: false,
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
            breakpoint: 577,
            settings: {
                centerMode: false,
                slidesToShow: 1,
            }
        },
    ]
});

// setNameScroll

const nameScroll = document.getElementById('input_order');
const customTextFormSpan = document.getElementById('customTextForm');

function setNameScroll(namescroll, customTextFormSpanF) {

    nameScroll.value = namescroll;
    customTextFormSpan.textContent = customTextFormSpanF;
};