document.addEventListener('DOMContentLoaded', (event) => {
        drawWheel();
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

                                                                                                                                                                                                   function placeBet(color) {
                                                                                                                                                                                                       alert('You placed a bet on ' + color);
                                                                                                                                                                                                       }
})