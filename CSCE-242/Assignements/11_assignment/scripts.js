// Bird Class
class Bird {
    constructor(name, size, lifespan, food, habitat, fact, image) {
        this.name = name;
        this.size = size;
        this.lifespan = lifespan;
        this.food = food;
        this.habitat = habitat;
        this.fact = fact;
        this.image = image;
    }

    //  function to generate bird card section
    getSection = () => `
        <div class="bird-card" data-name="${this.name}">
            <img src="${this.image}" alt="${this.name}">
            <h4>${this.name}</h4>
        </div>
    `;

    //  function to get full details
    getExpandedSection = () => ({
        name: this.name,
        size: this.size,
        lifespan: this.lifespan,
        food: this.food,
        habitat: this.habitat,
        fact: this.fact,
        image: this.image
    });
}

// Array of bird objects
const birds = [
    new Bird(
        'Hummingbird',
        '2.5 inches',
        '3-5 years',
        'Nectar (Sugar water)',
        'Trees',
        "They're nicknamed 'Hummers'",
        'hummingbird.jpeg'  
    ),
    new Bird(
        'Blue Jay',
        '9-12 inches',
        '7 years',
        'Insects, nuts, seeds',
        'Forests',
        'Blue Jays are known for their intelligence.',
        'bluejay.jpeg'  
    ),
    new Bird(
        'Cardinal',
        '8-9 inches',
        '3-15 years',
        'Seeds, fruits, insects',
        'Woodlands',
        'Male cardinals are bright red!',
        'cardinal.jpeg'  
    ),
    new Bird(
        'Robin',
        '9-11 inches',
        '2 years',
        'Fruits, berries, insects',
        'Gardens, forests',
        'Robins are often considered a sign of spring.',
        'robin.jpeg'  
    )
];

//  function to display birds
const displayBirds = () => {
    const birdGrid = document.querySelector('.bird-grid');
    birds.forEach(bird => {
        birdGrid.innerHTML += bird.getSection();
    });
}

//  function to open modal with bird details
const openModal = bird => {
    document.getElementById('bird-name').innerText = bird.name;
    document.getElementById('bird-size').innerText = bird.size;
    document.getElementById('bird-lifespan').innerText = bird.lifespan;
    document.getElementById('bird-food').innerText = bird.food;
    document.getElementById('bird-habitat').innerText = bird.habitat;
    document.getElementById('bird-fact').innerText = bird.fact;
    document.getElementById('bird-image').src = bird.image;

    document.getElementById('bird-modal').style.display = 'flex';
}

// Event listener to close modal
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('bird-modal').style.display = 'none';
});

//  function for DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {
    displayBirds();

    document.querySelectorAll('.bird-card').forEach(card => {
        card.addEventListener('click', () => {
            const birdName = card.getAttribute('data-name');
            const bird = birds.find(b => b.name === birdName);
            openModal(bird.getExpandedSection());
        });
    });
});
