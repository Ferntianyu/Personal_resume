/**
 * Created by asus on 2017/7/12.
 */
$(function () {
    function resize() {
        var windowWidth = $(window).width();
        var isSmallScreen = windowWidth < 768;
        // 获取到的是一个DOM数组，需要遍历，用each（）
        $("#main-ad > .carousel-inner > .item").each(function (i, item) {
            var $item = $(item); // 因为得到的是DOM对象，需要转换
            // $ele.data() 是一个函数，专门用于取元素上的自定义属性(data-xxx)
            // 函数的参数是我们要取得的属性名称（xxx）
            var ImgSrc = $item.data(isSmallScreen ? "image-xs" : "image-lg");
            console.log("111")
            $item.css("backgroundImage", "url('" + ImgSrc + "')");
            // 小图时，等比例变化，需要追加img
            if (isSmallScreen) {
                $item.html("<img src='" + ImgSrc + "'>");
            } else {
                $item.html("");
            }
        });
    }

    // trigger() 让window对象立即触发一下resize
    $(window).on("resize", resize).trigger("resize");
})