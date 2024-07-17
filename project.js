//animated background
const canvas = document.getElementById('backgroundCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let shapes = [];

function random(min, max) {
    return Math.random() * (max - min) + min;
}

class Shape {
    constructor(x, y, dx, dy, radius, color) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    update() {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

function init() {
    shapes = [];
    for (let i = 0; i < 100; i++) {
        let radius = random(10, 30);
        let x = random(radius, canvas.width - radius);
        let y = random(radius, canvas.height - radius);
        let dx = random(-2, 2);
        let dy = random(-2, 2);
        let color = `rgba(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)}, 0.7)`;
        shapes.push(new Shape(x, y, dx, dy, radius, color));
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    shapes.forEach(shape => shape.update());
}

init();
animate();

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});
