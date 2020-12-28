canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
rover_height= 90;
rover_width= 100;
rover_x= 10;
rover_y= 90;
rover="car1.png";
rover1_height= 90;
rover1_width= 100;
rover1_x= 10;
rover1_y= 10;
rover1="car1.png";
backround_pic="racing.jpg";
function add(){
    background_imgTag=new Image();
    background_imgTag.onload = uploadbackground;
    background_imgTag.src=backround_pic;
    rover_imgTag=new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src=rover;
    rover1_imgTag=new Image();
    rover1_imgTag.onload = uploadrover1;
    rover1_imgTag.src=rover1;
} 
function uploadbackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
ctx.drawImage(rover_imgTag,rover_x,rover_y,rover_width,rover_height);
}
function uploadrover1(){
    ctx.drawImage(rover1_imgTag,rover1_x,rover1_y,rover1_width,rover1_height);
    }

