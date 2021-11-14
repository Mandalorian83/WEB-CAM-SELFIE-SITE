var SpeechRecognition= window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();

function start() {
document.getElementById("textbox").innerHTML="";
recognition.start()    
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);

    document.getElementById("textbox").innerHTML=content;

    if (content=="take my selfie") {
  console.log("taking selfie");
  speak();
    }
}

function speak() {
var synth=window.speechSynthesis;
speakdata="Taking Your Selfie in Five Seconds";
var newsynth= new SpeechSynthesisUtterance(speakdata);
synth.speak(newsynth);
Webcam.attach(camera);
setTimeout(function(){
    take_snapshot();
    save();
}, 5000);
}
 
function take_snapshot() {
Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="resultimg" src="' + data_uri + '"/>';
})
}

function save() {
link=document.getElementById("link");
source=document.getElementById("resultimg").src
link.href=source;
link.click();    
}

Webcam.set({
     width:360,
     height:250,
     image_format:'png',
     png_quality:90
 });

camera=document.getElementById("camera");