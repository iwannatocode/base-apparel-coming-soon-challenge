var key = true;

$(window).resize(function () { 
    var width = $("html").width() + 15;

    if( width <= 700 && key ){
        key = false;
        $(".img").attr("src", "images/hero-mobile.jpg");
    }
    if(  width > 700 && !key){
        key = true;
        $(".img").attr("src", "images/hero-desktop.jpg");
    }
});