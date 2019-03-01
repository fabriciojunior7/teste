var socket;

function setup(){
    noCanvas();
    frameRate(30);
    socket = io.connect("http://192.168.0.8:3000");

    variavel = {x: 32, y: 100};
    socket.emit("teste", variavel);
}

function draw(){
    
}