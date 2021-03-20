function speech(){
    statusbar = document.getElementById("status");
    divpart = document.getElementById("transsc");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function(){
        statusbar.innerHTML = "Listening, please speak";
    }
    recognition.onspeechend = function(){
        statusbar.innerHTML = "Stopped Listening"
        recognition.stop();
    }
    recognition.onresult = function(e){
console.log(e);
f = e.results[0][0].transcript;
g = e.results[0][0].confidence*100+"%";
divpart.innerHTML = "<p>"+"<b>Transcript: </b>"+f+"</p>"+"<p><b>Confidence: </b>"+g+"</p>"
    }
    recognition.start();
}