
x=0
y=0
draw_circle=""
draw_rect=""
draw_square=""
draw_apple = "apple.png";


var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start() {
    document.getElementById("status").innerHTML="System is Listenting Please Speak"
    recognition.start();
}

recognition.onresult= function(event){
    console.log(event);
    var content=event.results[0][0].transcript
    document.getElementById("status").innerHTML="Speech has been recongined as "+ content
    if (content=="Circle") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Started drawing Circle";
        draw_circle="set"
    }

    if (content=="rectangle") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Started drawing Rectangle";
        draw_rect="set"
    }

    if (content=="Square") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        document.getElementById("status").innerHTML="Started drawing square";
        draw_square="set"
    }

    if (content=="Apple") {
        x=Math.floor(Math.random()*900)
        y=Math.floor(Math.random()*600)
        image(apple,x,y,50,50)
        document.getElementById("status").innerHTML="Started drawing Apple";
        draw_apple="set"
    }

    function preload () {
        loadImage("apple.png")
    }
    
}
function setup(){
    canvas=createCanvas(900,600)
}
function draw(){
    if (draw_circle=="set") {
        radius=Math.floor(Math.random()*100)
        circle(x,y,radius)
        document.getElementById("status").innerHTML="Circle is drawn";
        draw_circle=""
    }
    if (draw_rect=="set") {
        rect(x,y,70,50)
        document.getElementById("status").innerHTML="Rectangle is drawn";
        draw_rect=""
    }

    if (draw_square=="set") {
        rect(x,y,70,70)
        document.getElementById("status").innerHTML="Square is drawn";
        draw_square=""
    }
     
    if (draw_apple=="set") {
        rect(x,y,70,70)
        document.getElementById("status").innerHTML="Apple is drawn";
        draw_apple=""
    }

}