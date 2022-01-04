var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{ console.log("rightcheck");
fabric.Image.fromURL("BirthdayImage.jpg", function(img1){
j = img1;
j.scaleToWidth(800);
j.scaleToHeight(400);
j.set({top:0,left:0});
canvas.add(j);
});
}

function playSound(){
x.play();	
}
