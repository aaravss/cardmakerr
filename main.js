

var canvas = new fabric.Canvas('myCanvas');
var canvas2 = new fabric.Canvas("myCanvas2")
var canvas3 = new fabric.Canvas("myCanvas3")
 var x= document.getElementById("myAudio");
 var y = document.getElementById("myAudio2");
 var z = document.getElementById("myAudio3");

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg",function (Img){
block_image_object = Img;
block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(510);
block_image_object.set({
    top:0,
    left:0
});
canvas.add(block_image_object);

    });
	
}

function playSound(){
	x.play();
}

function new_image2()
{
	fabric.Image.fromURL("DiwaliImage.jpg",function (Img){
block_image_object2 = Img;
block_image_object2.scaleToWidth(400);
block_image_object2.scaleToHeight(350);
block_image_object2.set({
    top:0,
    left:0
});
canvas2.add(block_image_object2);

    });
	
}

function playSound2(){
	y.play();
}

function new_image3()
{
	fabric.Image.fromURL("XmasImage.jpg",function (Img){
block_image_object3 = Img;
block_image_object3.scaleToWidth(400);
block_image_object3.scaleToHeight(350);
block_image_object3.set({
    top:0,
    left:0
});
canvas3.add(block_image_object3);

    });
	
}

function playSound3(){
	z.play();
}