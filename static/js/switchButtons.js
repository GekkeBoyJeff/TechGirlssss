console.log('test');

let wishlistButton = document.querySelector(".saved-events-button");
let upcomingEventsButton = document.querySelector(".upcoming-events-button");

let savedEvents = document.querySelector(".saved-events");
let upcomingEvents = document.querySelector(".upcoming-events");

let wishlistText = document.querySelector("#wishlistText");
let eventsText = document.querySelector("#eventsText");

let wishlistSvg = document.querySelector(".wishlistSvg");
let svgElements = document.querySelectorAll(".eventsSvg");

upcomingEventsButton.addEventListener("click", function() {
    console.log("Upcoming events werkt");
    upcomingEvents.classList.remove("hidden");
    savedEvents.classList.add("hidden");
    
    eventsText.classList.add("clicked");

    svgElements.forEach(function(elements) {
        elements.classList.add(".clicked-svg")
    })
    wishlistText.classList.remove("clicked");
    wishlistSvg.classList.remove("clicked-svg");
});

wishlistButton.addEventListener("click", function() {
    console.log("Wishlist werkt");
    upcomingEvents.classList.add("hidden");
    savedEvents.classList.remove("hidden");
    
    wishlistText.classList.add("clicked");
    wishlistSvg.classList.add("clicked-svg");
    eventsText.classList.remove("clicked");
    eventsSvg.classList.remove("clicked-svg");
});
