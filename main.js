var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
    
}
recognition.onresult=function(event)
{
    console.log(event);
    var content=event.results[0][0].transcript;
      //  speak();
//}
//function speak(){
  //  synth = window.speechSynthesis;
        Webcam.attach(camera);
    

}

Webcam.set({
    width:360,
    heigth:250,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
