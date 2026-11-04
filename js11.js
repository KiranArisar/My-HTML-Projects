
// GET ALL RESTAURANT CARDS
const cards = document.querySelectorAll(".restaurant-card");


// FILTER RESTAURANTS
function filterFood(category, button) {

    // Remove active class from all filter buttons
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    // Add active class to clicked button
    button.classList.add("active");

    cards.forEach(card => {

        const type = card.dataset.category;
        const rating = Number(card.dataset.rating);
        const fast = card.dataset.fast;

        if (
            category === "all" ||
            (category === "veg" && type === "veg") ||
            (category === "rating" && rating >= 4) ||
            (category === "fast" && fast === "yes")
        ) {
            card.style.display = "flex";
        } else {
            card.style.display = "none";
        }
    });

    checkResults();
}


// SEARCH RESTAURANTS
function searchRestaurants() {

    const searchValue = document
        .getElementById("search-input")
        .value.toLowerCase();

    cards.forEach(card => {

        const name = card.dataset.name.toLowerCase();
        const cuisine = card.querySelector(".cuisine")
            .textContent.toLowerCase();

        if (name.includes(searchValue) ||
            cuisine.includes(searchValue)) {

            card.style.display = "flex";

        } else {

            card.style.display = "none";
        }
    });

    // Reset filter button selection
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.classList.remove("active");
    });

    checkResults();
}


// SEARCH WHEN ENTER IS PRESSED
document.getElementById("search-input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        searchRestaurants();
    }
});


// CHECK IF RESTAURANTS ARE FOUND
function checkResults() {

    const visibleCards = [...cards].some(card =>
        card.style.display !== "none"
    );

    document.getElementById("no-results").hidden = visibleCards;
}


// CART COUNTER
let cartCount = 0;

function addToCart(restaurantName) {

    cartCount++;

    document.getElementById("cart-count").textContent = cartCount;

    alert(restaurantName + " added to your cart!");
}
