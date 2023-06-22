function setup()
 { video = createCapture(VIDEO); 
    video.size(550,500)
    canvas = createCanvas(550,400)
    canvas.position(560,90);
    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposses);

}

function draw(){
    background('black');

} 

function modelLoaded(){
    console.log("Model Loaded");

}
function gotposses(results){
    if( results.length > 0){
    console.log(results)
    }
    
}
