document.addEventListener('DOMContentLoaded', (event) => {
    let scrollContainer = document.getElementsByClassName('slider')[0]; // Selecteer het eerste element
    let arrowLeft = document.getElementsByClassName('slideRight');
    let arrowRight = document.getElementsByClassName('slideLeft');

    if (arrowLeft && arrowRight && scrollContainer) {
        arrowLeft.addEventListener('click', function() {
            scrollContainer.scrollLeft -= 335;
        });
        arrowRightInstagram.addEventListener('click', function() {
            scrollContainer.scrollLeft += 335;
        });
    }
});