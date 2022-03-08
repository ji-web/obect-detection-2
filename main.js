staus="";

function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector("cocossd",modelLoaded);
    document.getElementById("status").innerHTML="status : Detecting Objects";
}

function preload(){
    img=loadImage("dog_cat.jpg");
}

function draw(){
    image(img,0,0,640,420);
    fill("#0000FF");
    text("Dog",175,50);
    noFill();
    stroke("#0000FF")
    rect(105,30,450,350);
    fill("#7FFFD4");
    text("Cat",300,120);
    noFill();
    stroke("#7FFFD4");
    rect(300,50,270,320);

}

function modelLoaded(){
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,result){
    if(error){console.error(error);}
    else{console.log("results");}


}s