// JavaScript Document



jQuery(function ($) {

    var scnW = $(window).width();

    var scnH = $(window).height();

    $(".xj_banner,.xj_banner_bg").height(scnH - 66);

    $(window).resize(function () {

        var scnW = $(window).width();

        var scnH = $(window).height();

        $(".xj_banner,.xj_banner_bg").height(scnH - 66);

    });



    $(".scroll_top").click(function () {

        $("html,body").animate({
            scrollTop: scnH
        }, 400);

    })



    /*var time_con_H=$(".time_con").height();

	$(".xj_time_con").height(time_con_H);

	$(".time_line").height(time_con_H-10);



        var time_top=$(".xj_time_con").offset().top;*/

    setInterval(function () {

        var body_top = $(window).scrollTop();

        /*$(".time_line p").height(body_top-time_top+scnH/2);*/

        if (body_top > scnH) {

            $(".share_sd").show();

        } else {

            $(".share_sd").hide();

        }

    }, 1);



    $(".read_more,.read_more_mid").toggle(function () {

        $(this).html("收起").siblings(".hide_box").show();

    }, function () {

        $(this).html("查看全文").siblings(".hide_box").hide();

    })



    $(".xj_tab_con li").eq(0).css("display", "block");

    $(".xj_tab_tit li").click(function () {

        $(this).css({
            "background-position-x": "-62px"
        }).siblings("li").css({
            "background-position-x": "0px"
        });

        var index = $(this).index();

        $(this).parent(".xj_tab_tit").siblings(".xj_tab_con").find("li").eq(index).show().siblings("li").hide();

    })



    $(".autor_bor,.autor_sec_bor").css({
        "position": "absolute",
        "top": 0,
        "right": 0
    })



    //图片轮播

    function DY_scroll(wraper, prev, next, img, speed, or, page, active) {

        var wraper = $(wraper);

        var prev = $(prev);

        var next = $(next);

        var img = $(img).find('.swiper-wrapper');

        var w = img.find('.swiper-slide').outerWidth(true);

        var s = speed;

        var page = $(page);

        var imgL = img.find('.swiper-slide').length;

        for (var i = 0; i < imgL; i++) {

            if ($(page).find("span").length < imgL) {

                $(page).append("<span></span>");

            }

            $(page).find("span").eq(0).addClass(active);

            $(page).find("span").eq(i).click(function () {

                var index = $(this).index();

                img.animate({
                    'margin-left': -w * index
                });

                $(this).addClass(active).siblings().removeClass(active);

            })

        }

        var picidx = 0;

        function picMove(picadd) {

            if (picadd == 1) {

                if (picidx < imgL - 1) {
                    picidx++;
                } else {
                    picidx = 0;
                }

            } else if (picadd == 0) {

                if (picidx > 0) {
                    picidx--;
                } else {
                    picidx = imgL - 1;
                };

            }

            img.animate({
                'margin-left': -w * picidx
            });

            $(page).find("span").eq(picidx).addClass(active).siblings().removeClass(active);

        }

        next.click(function () {

            picMove(1);

        });

        prev.click(function () {

            picMove(0);

        });

        if (or == true) {

            ad = setInterval(function () {
                picMove(1);
            }, s * 1000);

            wraper.hover(function () {
                clearInterval(ad);
            }, function () {
                ad = setInterval(function () {
                    picMove(1);
                }, s * 1000);
            });

        }



    }

    //头部焦点图

    DY_scroll('.tBan', '.tBan-button-prev', '.tBan-button-next', '.tBan', 5, true, '.tBan-pagination', 'tBan-pagination-bullet-active');





});