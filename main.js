img = "";
status = "";
object = "";


function setup(){
canvas = createCanvas(640,420);
canvas.center();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML = "Status -> Detecting Object";
}


function preload(){
img = loadImage('dog_cat.jpg');
}

function draw(){
    image(img,0,0,640,420);


    if(status != "")
    {
        for( i=0; i < object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status -> Object Detected";

            fill("aqua");
            percent = floor(object[i].label + "" + percent + "%",   object[i].x + 15, objects[i].y +15);
            noFill();
            stroke("aqua");
            rect(object[i].x, object[i].y , object[i].width, object[i].height);
        }
    }
}
 function modelLoaded(){
    console.log("Model is Loaded");
    status = true;
    objectDetector.detect(img,gotResult);
 }

 function gotResult(error,results){
    if(error){
        console.log(error);
    }
    console.log(results);

 }