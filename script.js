document.addEventListener('DOMContentLoaded', (event) => {
    drawWheel();
    document.getElementById('spinButton').addEventListener('click', spinWheel);
});

const colors = ['#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', 
                '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', 
                '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', '#ff0000', '#000000', 
                '#00ff00'];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
                 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
                 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 
                 0];

function drawWheel() {
    const canvas = document.getElementById('rouletteWheel');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const arc = 2 * Math.PI / colors.length;

    for (let i = 0; i < colors.length; i++) {
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, i * arc, (i + 1) * arc);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = colors[i];
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
    }
}

function spinWheel() {
    const resultIndex = Math.floor(Math.random() * colors.length);
    const resultColor = colors[resultIndex];
    const resultNumber = numbers[resultIndex];
    
    const resultDisplay = document.getElementById('result');
    resultDisplay.innerHTML = `The wheel landed on ${resultNumber} (${resultColor === '#ff0000' ? 'Red' : resultColor === '#000000' ? 'Black' : 'Green'})`;

    animateSpin(resultIndex);
}

function animateSpin(resultIndex) {
    const canvas = document.getElementById('rouletteWheel');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const arc = 2 * Math.PI / colors.length;

    let currentAngle = 0;
    const totalSpins = 10; // Number of full rotations
    const spins = 20; // Number of spins to animate
    const finalAngle = resultIndex * arc;

    function drawFrame() {
        currentAngle += (2 * Math.PI) / spins;
        if (currentAngle >= totalSpins * 2 * Math.PI + finalAngle) {
            drawWheel();
            drawMarker(resultIndex);
        } else {
            drawWheel();
            ctx.save();
            ctx.translate(centerX, centerY);
            ctx.rotate(currentAngle);
            ctx.translate(-centerX, -centerY);
            drawWheel();
            ctx.restore();
            requestAnimationFrame(drawFrame);
        }
    }

    drawFrame();
}

function drawMarker(resultIndex) {
    const canvas = document.getElementById('rouletteWheel');
    const ctx = canvas.getContext('2d');
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;
    const radius = canvas.width / 2;
    const arc = 2 * Math.PI / colors.length;

    if (resultIndex !== null) {
        const angle = resultIndex * arc;
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.arc(centerX, centerY, radius, angle, angle + arc);
        ctx.lineTo(centerX, centerY);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.fill();
        ctx.closePath();
    }

    ctx.beginPath();
    ctx.moveTo(centerX, centerY);
    ctx.lineTo(centerX, centerY - radius);
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.closePath();
}
