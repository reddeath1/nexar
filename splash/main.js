window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(a){window.setTimeout(a,1E3/80)}}();

var c = document.getElementById('c');
var ctx = c.getContext('2d');
var cw = c.width = window.innerWidth;
var ch = c.height = window.innerHeight;
<<<<<<< HEAD
var rand = function(a,b){return ~~((Math.random()*(b-a+1))+a);}

updateAll = function(a){
    var i = a.length;
    while(i--){
        a[i].update(i);
    }
}
=======
>>>>>>> 93610815e43a47a9b527d3f3359705ee97a6c6d5


<<<<<<< HEAD
var stars = [];

Star = function(x, y, radius, speed){
    this.x = x;
    this.y = y;
    this.speed = (speed/45);
    this.radius = radius;
    this.saturation = (20+(this.radius)*5);
    this.lightness = (8+this.radius*4);
}

Star.prototype = {
    update: function(i){
        this.x += this.speed;
        if(this.x - this.radius >= cw){
            this.x = rand(0, ch-this.radius)
            this.x = -this.radius;
        }
    },
    render: function(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, (this.radius < 0) ? 0 : this.radius, 0, Math.PI *2, false);
        var flickerAdd = (rand(0, 140) === 0) ? rand(5, 20) : 0;
        ctx.fillStyle = '#9E2555';
        ctx.fill();
    }
}
=======
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
>>>>>>> 93610815e43a47a9b527d3f3359705ee97a6c6d5

    window.requestAnimFrame(makeLoader);
};

<<<<<<< HEAD
var makeSplash = function(){
    window.requestAnimFrame(makeSplash);
    //updateAll(stars);
    ctx.clearRect(0, 0, cw, ch);
    renderAll(stars);
}

//makeStarfield();
=======
setTimeout(function () {
    makeLoader();
},2000);

>>>>>>> 93610815e43a47a9b527d3f3359705ee97a6c6d5
makeSplash();