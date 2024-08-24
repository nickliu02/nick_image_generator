// Function to get a random image from the imgs directory
function getRandomImage(randomIndex) {
    return "imgs/" + randomIndex + ".jpg";
}

// Array of quotes
const quotes = [
    "You are the sunshine that brightens my every day.",
    "Every moment with you is a beautiful memory in the making.",
    "I’m so lucky to have you by my side.",
    "I really really miss you.",    
    "You are the cutest person I know :D",
    "Your beauty takes my breath away every time I see you.",
    "I really like cuddling with you.",
    "I like thinking about our future together.",
    "I'm thankful you're in my life every day",
    "I always love you even though I might not say it.",
    "This summer term was my favorite term since I got to spend it with you.",
    "I'll support you for all that you do.",
    "Everything is better when you are here.",
    "You are truly beautiful."
];

// Get the current date
const today = new Date();
const day = today.getDate();
const num_images = 38;


// Seedable random function based on the date
function seededRandom(seed) {
    const x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

// Function to get a random index based on the seed
function getRandomIndex(size, seed) {
    const random = seededRandom(seed);
    return Math.floor(random * size);
}

// Display the quote
document.getElementById("quote").innerText = quotes[getRandomIndex(quotes.length, day)];

// Format and display the date
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
document.getElementById("date").innerText = today.toLocaleDateString(undefined, options);

// Load and display a random image
const randomImage = getRandomImage(getRandomIndex(num_images, day));
document.getElementById("random-image").src = randomImage;

