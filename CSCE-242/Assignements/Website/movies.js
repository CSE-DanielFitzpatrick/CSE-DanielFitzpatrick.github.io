// Function to display movies
const displayMovies = (movies) => {
    const movieContainer = document.getElementById('movie-container');
    movieContainer.innerHTML = ''; 

    if (movies.length === 0) {
        movieContainer.innerHTML = '<p>No movies available at the moment.</p>';
        return;
    }

    movies.forEach(movie => {
        const movieElement = document.createElement('div');
        movieElement.classList.add('movie-item');

        // Creating movie HTML content
        movieElement.innerHTML = `
            <img src="${movie.poster}" alt="${movie.title}" class="movie-poster" />
            <div class="movie-details">
                <h3>${movie.title}</h3>
                <p>Showtimes: ${movie.time}</p>
            </div>
        `;

        movieContainer.appendChild(movieElement);
    });
};

// Function to fetch movie data
const fetchMovies = () => {
    fetch('movies.json') 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayMovies(data);
        })
        .catch(error => {
            console.error('Error loading movie data:', error);
            document.querySelector('.error-message').innerText = 'Failed to load movie data. Please try again later.';
        });
};

// Run the function to fetch and display movies when the page loads
document.addEventListener('DOMContentLoaded', () => {
    fetchMovies();
});
