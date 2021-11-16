//Canvas
const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 250;

let score = 0;
let gameFrame = 0;

context.font = "50px Georgia";

//Mouse interaction
const mouse = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  click: false
};
//Tomamos las coordenadas del mouse
canvas.addEventListener("mousedown", (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
});
//player
//bubbles
//animatiosn
