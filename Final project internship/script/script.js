
const destinations = [
    {
        city: "Paris",
        country: "FRANCE",
        description: "Paris is one of the most beautiful cities in the world, famous for its art, architecture and romantic atmosphere.",
        continent: "Europe",
        food: "Croissant, Macaroni",
        place: "Eiffel Tower",
        language: "French",
        image: "images/paris.jpg",
        imagePosition: "50% 50%"
    },
    {
        city: "Tokyo",
        country: "JAPAN",
        description: "Tokyo is a modern city that combines advanced technology with traditional Japanese culture.",
        continent: "Asia",
        food: "Sushi, Ramen",
        place: "Tokyo Tower",
        language: "Japanese",
        image: "images/tokyo.jpg",
        imagePosition: "50% 50%"
    },
    {
        city: "Rome",
        country: "ITALY",
        description: "Rome is famous for its ancient history, beautiful architecture and delicious Italian food.",
        continent: "Europe",
        food: "Pizza, Pasta",
        place: "Colosseum",
        language: "Italian",
        image: "images/rome.jpg",
        imagePosition: "50% 35%"
    },
    {
        city: "Cairo",
        country: "EGYPT",
        description: "Cairo is a historic city known for its ancient Egyptian civilization and famous landmarks.",
        continent: "Africa",
        food: "Koshari, Foul",
        place: "Pyramids",
        language: "Arabic",
        image: "images/cairo.jpg",
        imagePosition: "50% 50%"
    }
];


const el = {
    count: document.getElementById("count"),
    number: document.getElementById("num"),
    country: document.getElementById("country"),
    city: document.getElementById("city"),
    description: document.getElementById("desc"),
    continent: document.getElementById("continent"),
    food: document.getElementById("food"),
    place: document.getElementById("place"),
    language: document.getElementById("lang"),
    image: document.getElementById("img"),
    dots: document.getElementById("dots"),
    prevButton: document.getElementById("prev"),
    nextButton: document.getElementById("next"),
    moreButton: document.getElementById("more")
};

let currentIndex = 0;



function twoDigits(number) {
    return String(number).padStart(2, "0");
}

function capitalize(word) {
    return word.charAt(0) + word.slice(1).toLowerCase();
}



function createDots() {
    destinations.forEach(function (destination, index) {
        const dot = document.createElement("button");
        dot.className = "dot";
        dot.setAttribute("aria-label", "Show destination " + (index + 1));
        dot.addEventListener("click", function () {
            showDestination(index);
        });
        el.dots.appendChild(dot);
    });
}

function updateDots() {
    Array.from(el.dots.children).forEach(function (dot, index) {
        dot.classList.toggle("on", index === currentIndex);
    });
}


function showDestination(index) {

    currentIndex = (index + destinations.length) % destinations.length;
    const d = destinations[currentIndex];


    el.count.textContent = twoDigits(currentIndex + 1) + " / " + twoDigits(destinations.length);
    el.number.textContent = twoDigits(currentIndex + 1);
    el.country.textContent = d.country;
    el.city.textContent = d.city;
    el.description.textContent = d.description;
    el.continent.textContent = d.continent;
    el.food.textContent = d.food;
    el.place.textContent = d.place;
    el.language.textContent = d.language;

  
    el.image.style.opacity = 0;
    setTimeout(function () {
        el.image.src = d.image;
        el.image.alt = d.city + ", " + capitalize(d.country) + ": " + d.place;
        el.image.style.objectPosition = d.imagePosition;
        el.image.style.opacity = 1;
    }, 150);

    updateDots();
}



function showAlert() {
    const d = destinations[currentIndex];
    alert("Discover " + d.city + " in " + d.country + "!\nFamous Place: " + d.place);
}



el.prevButton.addEventListener("click", function () {
    showDestination(currentIndex - 1);
});

el.nextButton.addEventListener("click", function () {
    showDestination(currentIndex + 1);
});

el.moreButton.addEventListener("click", showAlert);


createDots();
showDestination(0);