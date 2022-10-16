var lastx,lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var screenwidth=screen.width;
newwidth=screen.width-30;
newheight=screen.height-200;
if(screenwidth<992){
    document.getElementById("myCanvas").width=newwidth;
    document.getElementById("myCanvas").height=newheight;
    document.body.style.overflow="hidden";
}
color="black";
width=1;
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    color=document.getElementById("Color").value;
    width=document.getElementById("width").value;
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e){
    currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
    
     ctx.beginPath(); 
     ctx.strokeStyle=color;
     ctx.lineWidth=width;
     ctx.moveTo(lastx,lasty);
     ctx.lineTo(currentx,currenty);
     ctx.stroke()
    
    lastx=currentx;
    lasty=currenty;
}

function clearArea(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}