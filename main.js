x = 0;
y = 0;
draw_apple = "";
screen_width = 0;
screen_height = 0;
apple = "";
speak_data = "";
to_number = 0;

function preload(){
    apple = loadImage("apple.png");
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function setup(){
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0,150);
}

function start(){
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event){
    console.log(event);

    var content = event.results[0][0].transcript;

        document.getElementById("status").innerHTML = "The speech has been recognized" + content;
        to_number = Number(content)
            if(Number.isInteger(to_number)){
                document.getElementById("status").innerHTML = "Started drawing apple";
                draw_apple = "set";
            }
            else{
                document.getElementById("status").innerHTML = "Speech is not recogized as a number.";  
            } 
}


function draw(){
    if(draw_apple == "set")
    {
        for(var i = 1; i <= to_number; i++){
            x = Math.floor(Math.random() * 700);
            y = Math.floor(Math.random() * 400);
            Image(apple, x, y, 50, 50);
        }
        document.getElementById("status").innerHTML = to_number + "Apple is drawn";
        speak_data = to_number + "Apples drawn";
        speak();
        draw_apple = "";
    }

}