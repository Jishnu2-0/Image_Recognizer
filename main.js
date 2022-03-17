function setup(){
    canvas = createCanvas(250, 200);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    classfier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/s9-c4Ls75/model.json",modelLoaded);
}

function modelLoaded()
{
console.log("model Loaded!");
}
function draw(){
image(video, 0,0,250,200);
classfier.classify(video, gotResult);
}
function gotResult(error, result)
{
 if (error)
 {
     console.log(error);
 }
 else
 {
     console.log(result);
     document.getElementById("result_object_name").innerHTML=result[0].label;
     document.getElementById("result_object_accuracy").innerHTML=floor(result[0].confidence*100)+"%";
 }
}
