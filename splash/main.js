window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/80)}}();

var c = document.getElementById('c');
var ctx = c.getContext('2d');
var cw = c.width = window.innerWidth;
var ch = c.height = window.innerHeight;


var makeSplash = function(){
    window.requestAnimFrame(makeSplash);
    ctx.clearRect(0, 0, cw, ch);
};

var makeLoader = function (){
    document.querySelector('.wrapper').style.display = 'block';
    document.querySelector('.wrapper').removeClass('waiting');
    setTimeout(function() {
        document.querySelector('.wrapper').addClass('waiting')
    }, 1500);

    window.requestAnimFrame(makeLoader);
};

setTimeout(function () {
    makeLoader();
},2000);

makeSplash();