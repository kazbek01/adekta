$(document).ready(function(){
    $('.wel_slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: '4000'
    });
    $("a.scrollto").mPageScroll2id({
        offset: 56
    });
    $("a.scroll-arr").mPageScroll2id({
        offset: 56
    });
    $('.law_slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: '4000'
    });
    $('.ab_slider').bxSlider({
        mode: 'fade',
        auto: true,
        pause: '4000'
    });
    $('.open-gallery').click(function() {
        var items = [];
        $( $(this).attr('number-gallery') ).find('.mfp-figure').each(function() {
            items.push( {
                src: $(this)
            } );
        });
        $.magnificPopup.open({
            items:items,
            gallery: {
                enabled: true
            }
        });
    });
    $('.law_js').next().addClass('bx_law');

    var $window = $(window);
    function RYLparallax() {
        if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            var parallaxType = true;
            if (!Modernizr.csstransitions) {
                parallaxType = false;
            }

            $window.stellar({
                scrollProperty: 'scroll',
                positionProperty: 'transform',
                horizontalScrolling: false,
                verticalScrolling: (Modernizr.csstransitions),
                responsive: true,
                parallaxBackgrounds: true,
            });
        }

        if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
            $('body').addClass('ryl-ios');
        }
    }


    if (window.matchMedia('screen and (min-width: 780px)').matches) {
        RYLparallax();
    }

    var $menu = $(".top_line");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 5 && $menu.hasClass("default") ){
            $menu.removeClass("default").addClass("fixed");
            $menu.hide();
            $menu.fadeIn(1000);
        } else if($(this).scrollTop() <= 5 && $menu.hasClass("fixed")) {
            $menu.removeClass("fixed").addClass("default");
            $menu.hide();
            $menu.fadeIn(1000);
        }
    });

    var $menu2 = $(".head_lawyers");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 5 && $menu2.hasClass("default") ){
            $menu2.removeClass("default").addClass("fixed");
            $menu2.hide();
            $menu2.fadeIn(1000);
        } else if($(this).scrollTop() <= 5 && $menu2.hasClass("fixed")) {
            $menu2.removeClass("fixed").addClass("default");
            $menu2.hide();
            $menu2.fadeIn(1000);
        }
    });

    var $menu3 = $(".head_gallery");
    $(window).scroll(function(){
        if ( $(this).scrollTop() > 5 && $menu3.hasClass("default") ){
            $menu3.removeClass("default").addClass("fixed");
            $menu3.hide();
            $menu3.fadeIn(1000);
        } else if($(this).scrollTop() <= 5 && $menu3.hasClass("fixed")) {
            $menu3.removeClass("fixed").addClass("default");
            $menu3.hide();
            $menu3.fadeIn(1000);
        }
    });


    $(window).scroll(function(){
        if ( $(this).scrollTop() > 5 ) {
            $('.fx_logo').attr('src', '/img/logo.png');
        } else if ( $(this).scrollTop() <= 5 ) {
            $('.fx_logo').attr('src', '/img/logo_dark.png');
        }
    });

    $(function() {
        $('.iconMenu').click(function() {
            if($('.itemsMenu').is(':visible')) {
                $('.itemsMenu').removeClass('showitems');
            }
            else {
                $('.itemsMenu').addClass('showitems');
            }
        });
    });
    $(function() {
        $('a.scrollto').click(function() {
            if($('.itemsMenu').is(':visible')) {
                $('.itemsMenu').removeClass('showitems');
            }
            else {
                $('.itemsMenu').addClass('showitems');
            }
        });
    });

    new WOW().init();

    $("<select />").appendTo("div.lang_sel");

    // РЎРѕР·РґР°РµРј РїСѓРЅРєС‚ select РїРѕ СѓРјРѕР»С‡Р°РЅРёСЋ вЂ“ В«РџРµСЂРµР№С‚Рё Рє...В»

    /*$("<option />", {
       "selected": "selected",
       "value"   : "",
       "text"    : "РџРµСЂРµР№С‚Рё Рє..."
    }).appendTo("div.lang_select select");*/

    // РљРѕРїРёСЂСѓРµРј СЃСЃС‹Р»РєРё РёР· РѕР±С‹С‡РЅРѕРіРѕ РјРµРЅСЋ РІ СЌР»РµРјРµРЅС‚С‹ РІС‹РїР°РґР°СЋС‰РµРіРѕ РјРµРЅСЋ
    $("div.lang_sel a").each(function() {
        var el = $(this);
        var classes = el.attr("class");
        classesArr = classes.split(" ");
        var index = classesArr.indexOf("active");
        var optAttrs = {
            "value"   : el.attr("href"),
            "text"    : el.text(),
            "selected": ""
        }
        if ( index !== -1 ) {
            optAttrs.selected = true;
        }
        else {
            optAttrs.selected = false;
        }

        $("<option />", optAttrs).appendTo("div.lang_sel select");

    });

    $("div.lang_sel select").change(function() {
        window.location = $(this).find("option:selected").val();
    });

    $("ul.prac_list2").click(function() {
        $("div.hidden").hide(500);
        $(this).find("div.hidden").show(500);
    });
    if (navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod') {
        $('header').css("background-attachment", "initial");
    }
});
//SLAIDER_REFERENCES
$('.sl-ref').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: true,
    // centerMode: true,
    responsive: [
        {
            breakpoint: 1190,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
