

var create_email = false;
var final_transcript = '';

var recognizing = false;
var ignore_onend;
var start_timestamp;

var recognition = new webkitSpeechRecognition();

var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

var first_char = /\S/;
function capitalize(s) {
  return s.replace(first_char, function(m) { return m.toUpperCase(); });
}


function copyButton() {
  if (recognizing) {
    recognizing = false;
    recognition.stop();
  }
  copy_button.style.display = 'none';
  copy_info.style.display = 'inline-block';
  //showInfo('');
}

function startButton(event) {
  ;
  clearFinalSpan();

  setTimeout(function () {

    let theFirstText = JSON.parse(JSON.stringify(final_span.innerHTML));

    //console.log("startButton = ", recognition, recognizing);
    if (!('webkitSpeechRecognition' in window)) {
      //upgrade();
    } else {
      //start_button.style.display = 'inline-block';
      recognition.continuous = true;
      recognition.interimResults = true;

      recognition.onstart = function () {
        recognizing = true;
      };

      recognition.onerror = function (e) {
        //console.log("Error", e);
        recognizing = false;
      };

      recognition.onend = function () {
        recognizing = false;
        if (ignore_onend) {
          return;
        }
        if (!final_transcript) {
          return;
        }
      };

      recognition.onresult = function (event) {
        //console.log("event = ", event);
        var interim_transcript = '';
        for (var i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            final_transcript += event.results[i][0].transcript;
          } else {
            interim_transcript += event.results[i][0].transcript;
          }
        }
        
        final_transcript = capitalize(final_transcript);
        //console.log("recognition.onresult = ", final_transcript, " ---------- ", interim_transcript);

        if(interim_transcript != null && interim_transcript != undefined){
          //console.log("final_span.innerHTML = ", final_span.innerHTML , "interim_transcript = ", interim_transcript);
          final_span.innerHTML = theFirstText + final_transcript + " " + interim_transcript;
        }
        else{
          //theFirstText =
          final_span.innerHTML = theFirstText + " " + (final_transcript);
        } 

        //interim_span.innerHTML = linebreak(interim_transcript);
        if (final_transcript || interim_transcript) {
          //showButtons('inline-block');
        }
      };
    }
    //console.log("recognizing = ", recognizing, recognition);
    if (recognizing) {
      recognition.stop();
      return;
    }
    final_transcript = '';
    recognition.lang = 'vi-VN';


    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = '';
    //interim_span.innerHTML = '';
    //start_img.src = 'mic-slash.gif';
    //showInfo('info_allow');
    //showButtons('none');
    start_timestamp = event.timeStamp;
  }, 1000);
}

function clearFinalSpan(){
  let finalspan = document.getElementById('final_span');
  if(finalspan != undefined){
    finalspan.innerHTML = "";
  }
  //console.log("recognition = ", recognition);
  if (recognition != undefined && recognition) {
    recognizing = false;
    recognition.stop();
  }
}