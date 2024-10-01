const images = [
    { src: "images/birthday.jpg", title: "Party", description: "This character is having a great time!" },
    { src: "images/clown.jpg", title: "Bow Tie", description: "This character is looking fancy with a bow tie." },
    { src: "images/rain.jpg", title: "Rain", description: "I think it’s time to bring your umbrella." },
    { src: "images/read.jpg", title: "Reading", description: "This character is busy reading." },
    { src: "images/shovel.jpg", title: "Gardening", description: "Ready for some gardening with the shovel." },
    { src: "images/work.jpg", title: "Coding", description: "Time to do some work on the laptop." }
];

// Function to load the images into the page
function loadImages() {
    const imageContainer = document.getElementById('image-container');
    
    images.forEach(image => {
        const imgElement = document.createElement('img');
        imgElement.src = image.src;
        imgElement.alt = image.title;
        imgElement.addEventListener('click', () => showDescription(image.title, image.description));
        imageContainer.appendChild(imgElement);
    });
}

// Function to display the description when an image is clicked
function showDescription(title, description) {
    const descriptionElement = document.getElementById('image-description');
    descriptionElement.innerHTML = `<strong>${title}</strong>: ${description}`;
}

// Load images on page load
window.onload = loadImages;