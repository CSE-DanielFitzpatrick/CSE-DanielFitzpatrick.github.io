// Select elements from the DOM
const starInput = document.getElementById('stars');
const drawButton = document.getElementById('draw-btn');
const errorMessage = document.getElementById('error-message');
const canvas = document.getElementById('star-canvas');
const ctx = canvas.getContext('2d');

// Set canvas size
canvas.width = 300;
canvas.height = 300;

// Array to store star positions and their corresponding numbers
let stars = [];

// Function to draw stars
function drawStars(numStars) {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear previous stars
    stars = []; // Clear previous star data
    
    for (let i = 0; i < numStars; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        // Store the star's position and number
        stars.push({ x, y, number: i + 1 });

        // Draw star
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill();
    }
}

// Event listener for the draw button
drawButton.addEventListener('click', () => {
    const numStars = parseInt(starInput.value);

    // Validate input
    if (numStars <= 0 || isNaN(numStars)) {
        errorMessage.textContent = "Invalid Input";
    } else {
        errorMessage.textContent = "";
        drawStars(numStars);
    }
});

// Event listener for star click to display the star's number
canvas.addEventListener('click', function (event) {
    const rect = canvas.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const clickY = event.clientY - rect.top;

    // Check if a star was clicked
    stars.forEach(star => {
        const distance = Math.sqrt((clickX - star.x) ** 2 + (clickY - star.y) ** 2);
        
        // Assuming a star's clickable area has a radius of 5 pixels
        if (distance <= 5) {
            alert(`You clicked on Star #${star.number}`);
        }
    });
});