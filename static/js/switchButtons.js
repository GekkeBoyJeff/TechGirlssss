console.log('test');

let wishlistButton = document.querySelector(".saved-events-button");
let upcomingEventsButton = document.querySelector(".upcoming-events-button");

let savedEvents = document.querySelector(".saved-events");
let upcomingEvents = document.querySelector(".upcoming-events");

let wishlistText = document.querySelector("#wishlistText");
let eventsText = document.querySelector("#eventsText");

let wishlistSvg = document.querySelector(".wishlistSvg");
let svgElements = document.querySelectorAll(".eventsSvg");

let line = document.querySelector(".button-clicked");

upcomingEventsButton.addEventListener("click", function() {
    console.log("Upcoming events werkt");
    upcomingEvents.classList.remove("hidden");
    savedEvents.classList.add("hidden");
    
    eventsText.classList.add("clicked");

    svgElements.forEach(function(elements) {
        console.log("elements werkt");
        elements.classList.add("clicked-svg");
    })
    wishlistText.classList.remove("clicked");
    wishlistSvg.classList.remove("clicked-svg");

    wishlistButton.classList.remove("button-clicked");
    upcomingEventsButton.classList.add("button-clicked");

    let newArticle = document.createElement("article");
    newArticle.className = 'newArticle';

    newArticle.innerHTML = `
        <a href=""><p class="tertiary-button-black">Read more</p></a>
        <button class="deregisterButton"><p>Deregister</p></button>
    `;

    let containers = document.querySelectorAll(".containerFlexbox");
    containers.forEach(container => {
        container.appendChild(newArticle.cloneNode(true));
    });

    let newSection = document.createElement("section");
    newSection.className = 'newSection';

    newSection.innerHTML = `
        <h3>Women in Art Foundation // Art Talks</h2>
        <p>Art Talks for inspiring discussions and insights from talented female artists in the industry!</p>
        <p>1 june 2024 • Amsterdam •  price €5,00</p>
    `;

    let containerNewSection = document.querySelectorAll(".addSection");
    containerNewSection.forEach(container => {
        container.appendChild(newSection.cloneNode(true));
    });
        
});

wishlistButton.addEventListener("click", function() {
    console.log("Wishlist werkt");
    upcomingEvents.classList.add("hidden");
    savedEvents.classList.remove("hidden");
    
    wishlistText.classList.add("clicked");
    wishlistSvg.classList.add("clicked-svg");
    eventsText.classList.remove("clicked");
    
    svgElements.forEach(function(elements) {
        console.log("elements werkt");
        elements.classList.remove("clicked-svg");
    })

    upcomingEventsButton.classList.remove("button-clicked");
    wishlistButton.classList.add("button-clicked");

    let articlesToRemove = document.querySelectorAll(".newArticle");
    articlesToRemove.forEach(article => {
        article.remove();
    });

    let sectionToRemove = document.querySelectorAll(".newSection");
    sectionToRemove.forEach(section => {
        section.remove();
    });
    
});
