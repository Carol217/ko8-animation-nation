/*
  Carol Pan
  SoftDev2 pd7
  K08 -- Animation Nation
  2018-03-04
*/

//var b = document.getElementById("change_color");
var pic = document.getElementById("vimage");
var a = document.getElementById("animate");
var s = document.getElementById("stop");
var c = document.getElementById("clear");
var t = document.getElementById("toggle");

var frame = 0;
var started = false;
var toggle = 1;

var r = 0;
var growth = 1;


var clearScreen = function(e){
    pic.innerHTML = "";
    console.log("Cleared Screen.")
    started = false;
    r = 0;
    growth = 1;
}

var growCircle = function(){
    window.cancelAnimationFrame(frame);
    console.log(frame)
    
    pic.innerHTML="";
    var cl = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    cl.setAttribute("cx", 250);
    cl.setAttribute("cy", 250);
    cl.setAttribute("r", r);
    cl.setAttribute("fill", "green");
    pic.appendChild(cl)
    if (r > 125 || r < 0){
	growth *= -1;
    }
    r += growth;
    frame = window.requestAnimationFrame(growCircle);
}

var elcx = 50;
var elcy = 50;
var txtx = 20;
var txty = 60;
var addx = 1;
var addy = 1;

var screenSaver = function(){
    window.cancelAnimationFrame(frame);
    pic.innerHTML = "";
    
    var el = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
    el.setAttribute("cx", elcx);
    el.setAttribute("cy", elcy);
    el.setAttribute("rx", 50);
    el.setAttribute("ry", 33);
    el.setAttribute("fill", "blue");
    pic.appendChild(el)
    var txt = document.createElementNS("http://www.w3.org/2000/svg", "text");
    txt.setAttribute("fill","white");
    txt.setAttribute("font-size",27);
    txt.setAttribute("font-family", "Verdana");
    txt.setAttribute("x", txtx);
    txt.setAttribute("y", txty);
    txt.innerHTML = "DVD";
    pic.appendChild(txt);

    if ((elcx + 50)> 500 || (elcx - 50)  < 0){
	addx *= -1;
    }
    if ((elcy + 33) > 500 || (elcy - 33)< 0){
	addy *= -1;
    }

    elcx += addx;
    txtx += addx;
    elcy += addy;
    txty += addy;
    
    frame = window.requestAnimationFrame(screenSaver);
}

var animateCallBack = function(e){
    started = true;
    if (toggle == 1){
	growCircle();
    }
    else{
	screenSaver();
    }
}

var toggleCallBack = function(e){
    toggle *= -1;
    console.log(toggle)
}

var stop = function(e){
    window.cancelAnimationFrame(frame)
    started = false;
}
c.addEventListener("click", clearScreen);
a.addEventListener("click", animateCallBack);
s.addEventListener("click", stop);
t.addEventListener("click", toggleCallBack);
//drawDot(100,200)
