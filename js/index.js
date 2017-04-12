
var upPage = document.querySelector(".arr");
var mySwiper = new Swiper('.swiper-container',{
    direction: 'vertical',
    height:window.innerHeight,
    loop:true,
    onSlideChangeEnd:function(swiper){
        var index=swiper.activeIndex;
        $('.swiper-slide').removeClass('current').eq(index).addClass('current');

        //点击小箭头翻页
        upPage.onclick = function () {
            swiper.slideNext();
        }
    }
});

var music = document.querySelector(".music");
var musicbtn = document.querySelector(".musicbtn");

musicbtn.onclick = function () {
    if(music.paused){
        music.play();
        musicbtn.style.animationPlayState = "running";
    }else{
        music.pause();
        musicbtn.style.animationPlayState = "paused";
    }
}
