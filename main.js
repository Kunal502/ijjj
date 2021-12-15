//strat code

Webcam.set({
    height: 450,
    width: 450,
    image_format: 'jpeg',
    jpeg_quality: 95
});

webcam = document.getElementById("webcam-view");
Webcam.attach("#webcam-view");

function takesnapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result-snap").innerHTML = '<img id="captured-img" src="' + data_uri + '"/>';
    });
}

console.log("ml5 version :",ml5.version);

classifier = ml5.imageClassifier("", modelLoaded);

function modelLoaded(){
    console.log("model is loaded");
}

function speek(){
    synth = window.speechSynthesis;
    speek_data_1 = "The Predication 1 Is "+ prediction_1;
    speek_data_2 ="The Prediction 2 Is "+ prediction_2;
    utterThis = new SpeechSynthesisUtterance(speek_data_1 ,speek_data_2);
}