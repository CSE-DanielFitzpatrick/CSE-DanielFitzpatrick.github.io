// Fetch and display ice cream data from JSON using arrow functions
const loadIceCreams = async () => {
    try {
        const response = await fetch('https://portiaportia.github.io/json/ice-creams.json');
        const iceCreams = await response.json();
        displayIceCreams(iceCreams);
    } catch (error) {
        console.error('Error fetching ice cream data:', error);
    }
}

const displayIceCreams = (iceCreams) => {
    const iceCreamGrid = document.getElementById('iceCreamGrid');

    iceCreams.forEach(iceCream => {
        const div = document.createElement('div');
        div.classList.add('ice-cream-card');
        div.innerHTML = `
            <img src="https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}" alt="${iceCream.name}">
            <div class="overlay">${iceCream.name}</div>
        `;
        iceCreamGrid.appendChild(div);

        div.addEventListener('click', () => showModal(iceCream));
    });
}

const showModal = (iceCream) => {
    const modal = document.getElementById('iceCreamModal');
    const img = document.getElementById('iceCreamImage');
    const details = document.getElementById('iceCreamDetails');

    img.src = `https://portiaportia.github.io/json/images/ice-creams/${iceCream.image}`;
    details.innerHTML = `
        <h2>${iceCream.name}</h2>
        <p>${iceCream.description}</p>
    `;
    
    modal.style.display = 'block';
}

// Close modal with arrow function
document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('iceCreamModal').style.display = 'none';
});

// Load ice cream data on page load using arrow function
document.addEventListener('DOMContentLoaded', () => loadIceCreams());
