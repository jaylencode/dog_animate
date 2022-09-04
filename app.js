
// Geting canvas element from DOM
const canvas = document.getElementById("canvas1");
const context = canvas.getContext("2d");

// Global variables
const CANVAS_WIDTH = (canvas.width = 600);
const CANVAS_HEIGHT = (canvas.height = 600);
const spriteWidth = 575;
const spriteHeight = 523;
const staggerFrames = 5;
let playerState = "idle";
let gameFrame = 0;
const spriteAnimations = [];
const animationStates = [
  {
    name: "idle",
    frames: 7,
  },
  {
    name: "jump",
    frames: 7,
  },
  {
    name: "fall",
    frames: 7,
  },
  {
    name: "run",
    frames: 9,
  },
  {
    name: "dizzy",
    frames: 11,
  },
  {
    name: "sit",
    frames: 5,
  },
  {
    name: "roll",
    frames: 7,
  },
  {
    name: "bite",
    frames: 7,
  },
  {
    name: "ko",
    frames: 12,
  },
  {
    name: "gethit",
    frames: 4,
  },
];
animationStates.forEach((state, index) => {
  let frames = {
    location: [],
  };
  for (let j = 0; j < state.frames; j++) {
    let positionX = j * spriteWidth;
    let positionY = index * spriteHeight;
    frames.location.push({ x: positionX, y: positionY });
  }
  spriteAnimations[state.name] = frames;
});


// creating new Image
const playerImage = new Image();
playerImage.src = "images/player.png";

// DrawImage() takes image, sx, sy, sw, sh, dx, dy, dw, dh
function animate() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  let position =
    Math.floor(gameFrame / staggerFrames) %
    spriteAnimations[playerState].location.length;

  let frameX = spriteWidth * position;
  let frameY = spriteAnimations[playerState].location[position].y;

  context.drawImage(
    playerImage,
    frameX,
    frameY,
    spriteWidth,
    spriteHeight,
    0,
    0,
    spriteWidth,
    spriteHeight
  );
 
  gameFrame++;
  requestAnimationFrame(animate);
}
animate();
