var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}
recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript
    console.log(Content);
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking your selfie in 5 seconds";
    var utter_this = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utter_this);
    Webcam.attach(camera);
    setTimeout(function () {
        takeSelfie();
        save()
    }, 5000);
}
camera = document.getElementById("camera");
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
});

function takeSelfie() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = "<img id='selfie' src='" + data_uri + "'>";
    });
}

function save() {
    var Link = document.getElementById("link");
    var img = document.getElementById("selfie").src;
    Link.href = img;
    Link.click();


}