let slider;
let button;
let capture;
let parrafo;
let location;

function preload() {
  location = getCurrentPosition();
}

function setup() {
  createCanvas(200, 200);
  //capture = createCapture(VIDEO);
  parrafo = createP("Esto es una frase hecha en P5");
  slider = createSlider(10,100,40);
  parrafo.style('color','red');
}

function draw() {
  background(220,10,100);
  ellipse(width/2,height/2,slider.value(),slider.value());
}