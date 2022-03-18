const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let isDrawing = false;
let lastX = 0;
let lastY = 0;

let hue = 0;
let direction = true;


// ctx.strokeStyle = `hsl(${hue}, 100%, 50%`;
ctx.lineCap = "round";
ctx.lineJoin = "round";
ctx.lineWidth = "10";


function setUp(e) {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

function draw(e) {
    if (!isDrawing) return; // stop fn from executing
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%`;


    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    //these 2 next lines are the same as the third one
    // lastX = e.offsetX;
    // lastY = e.offsetY;
    [lastX, lastY] = [e.offsetX, e.offsetY];


    hue++;
    console.log(hue);
    if (hue >= 360 || hue <= 0) {
        hue = 0;
    }

    if (ctx.lineWidth > 200 || ctx.lineWidth < 10) {
            direction = !direction;
        }

    if (direction) {
        ctx.lineWidth++;
    }
    else if (!direction) {
        ctx.lineWidth--;
    }

    
    
}

canvas.addEventListener("mousedown", setUp);
canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);