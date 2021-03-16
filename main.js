noseX=0;
noseY=0;
function preload() {
  ears = loadImage("https://i.postimg.cc/fbsSxJMb/clipart-of-bunny-ears-2.png"); 
  eyes = loadImage("https://i.postimg.cc/N0TvmkQ3/eyes-makeup-png-2.png"); 
  hair = loadImage("https://i.postimg.cc/4xx25NwX/thorne1ag2812.png"); 
  lipstick = loadImage("https://i.postimg.cc/zfh9wz9Y/PNGPIX-COM-Lips-PNG-Transparent-Image-4.png");
  glass = loadImage("https://i.postimg.cc/N0PBkjXX/a68679ebc7e3b08dddfc6e8ddbfdd4bd.png");

}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
   image(video,0,0,300,300);

   image(ears,noseX -50,noseY -190,100,100);
   image(eyes,noseX -50,noseY -49,100,80);
   image(hair,noseX -130,noseY -140,250,250);
   image(glass,noseX -50,noseY -49,100,40);
   
}

function take_snapshot() {
   save("my_filter.png");
}

function modelLoaded() {
    console.log("Posenet is Initalized!");
}

function gotPoses(results) {
if(results.length > 0) {
    console.log(results);
    noseX = results[0].pose.nose.x;
    noseY = results[0].pose.nose.y;
    console.log("nose X = " + results[0].pose.nose.x);
    console.log("nose Y = " + results[0].pose.nose.y);
}
}