/**
 * Created by asus on 2017/7/16.
 */
$(function () {
    $('#dowebok').fullpage({
        fixedElements: '#head',
        // 是否显示导航
        navigation: true,
        // 设置导航在右侧显示
        navigationPosition: 'right',
        // 是否使用css3动画
        css3: true,
        // 导航绑定
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        // 字体缩放
        resize: true,
        menu: "#head-r",
        afterLoad: function (link, index) {
            switch (index) {
                case 1:
                    move('.section1 h2').set("top", "0").duration("1s").end();
                    move(".secp1").set("left", "0").delay("1s").duration("1s").end(function () {
                        move(".secp2").set("right", "0").duration("1s").end(function () {
                            move(".secp3").set("top", "0").duration("1s").end();
                        });
                    });
                    break;
                case 2:
                    move(".section2 h2").set("opacity", "1").duration("1s").end(function () {
                        move(".section2 h2").set("margin-left", "40%").end();
                    });
                    move(".sec2").set("opacity", "1").delay("2s").duration("1s").end();
                    break;
                case 3:
                    move(".section3 img").set("top", "50px").set("opacity", "1").delay("1.5s").duration("1s").end();
                    move(".section3 h2").set("opacity", "1").delay(".2s").duration(".5s").end(function () {
                        move(".section3 h2").set("left", "60%").set("color", "black").duration("1s").end(function () {
                            move(".section3 h2").set("left", "40%").duration(".5s").end()
                        })
                    });
                    move(".section3 .skill_1").set("left", "8%").set("opacity", "1").delay(".5s").duration("1s").end();
                    move(".section3 .skill_2").set("left", "28%").set("opacity", "1").delay("1s").duration("1s").end();
                    move(".section3 .skill_3").set("left", "48%").set("opacity", "1").delay("1.5s").duration("1s").end();
                    move(".section3 .skill_4").set("left", "68%").set("opacity", "1").delay("2s").duration("1s").end();
                    break;
                case 4:
                    move(".section4 .bg img").set("top", "50px").set("opacity", "1").delay(".5s").duration("1s").end();
                    move(".section4 .bg .bg_2").set("top", "50px").set("opacity", "1").delay(".8s").duration("1s").end();
                    move(".section4 h2").set("opacity", "1").scale("1.5","1.5").end(function () {
                        move(".section4 h2").set("margin-left", "33%").delay("1s").end();
                    })
                    move(".sec4_con").set("opacity", "1").delay("1.5s").duration("1s").end();
            }
        },
        onLeave: function (link, index) {
            switch (index) {
                case 1:
                    move('.section1 h2').set("top", "-1000px").end();
                    break;
                case 2:
                    move(".section2 h2").set("opacity", "0").duration("1s").end(),
                        move(".section2 h2").set("margin-left", "0").end();
                    break;
                case 3:
                    move(".section3 h2").set("opacity", "0").delay(".2s").duration(".5s").end(function () {
                        move(".section3 h2").set("left", "0").set("color", "black").duration("1s").end();
                    });
                case 4:
                    move(".section4 h2").set("opacity","0").end();
            }
        }
    })
});