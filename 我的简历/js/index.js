/**
 * Created by asus on 2017/7/16.
 */
$(function(){
    $('#dowebok').fullpage({
        fixedElements:'#head',
        // 是否显示导航
        navigation:true,
        // 设置导航在右侧显示
        navigationPosition:'right',
        // 是否使用css3动画
        css3: true,
        // 导航绑定
        anchors:['page1','page2','page3','page4','page5','page6'],
        // 字体缩放
        resize: true,
        menu:"#head-r",
        // 回调
        afterLoad:function(link,index){
            switch(index){
                case 1:
                    move('.section1 h2').set("top","0").duration("1s").end();
                    move(".secp1").set("left","0").delay("1s").duration("1s").end(function () {
                        move(".secp2").set("right","0").duration("1s").end(function () {
                            move(".secp3").set("top","0").duration("1s").end();
                        });
                    });
                    break;
                case 2:
                    move(".section2 h2").set("opacity","1").duration("1s").end(function () {
                        move(".section2 h2").set("margin-left","40%").end();
                    });
                    move(".sec2").set("opacity","1").delay("2s").duration("1s").end();
                case 3:
                    move(".section3 img").set("top","50px").set("opacity","1").delay("1.5s").duration("1s").end();
                    move(".section3 .skill_1").set("left","15%").delay(".5s").set("opacity","1").duration("1s").end();
                    move(".section3 .skill_2").set("left","40%").delay("1.2s").set("opacity","1").duration("1.5s").end();
                    move(".section3 .skill_3").set("left","65%").delay("2.0s").set("opacity","1").duration("2s").end();
            }

        }
    })



});