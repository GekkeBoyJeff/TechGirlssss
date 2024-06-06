console.log('test');

let wishlistButton = document.querySelector(".saved-events-button");
let upcomingEventsButton = document.querySelector(".upcoming-events-button");

let savedEvents = document.querySelector(".saved-events");
let upcomingEvents = document.querySelector(".upcoming-events");

upcomingEventsButton.addEventListener("click", function() {
    console.log("Switch werkt");
    upcomingEvents.classList.remove(".hidden");
    savedEvents.classList.add(".hidden");
});
