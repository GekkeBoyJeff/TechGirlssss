document.addEventListener('DOMContentLoaded', (event) => {
    let scrollContainerInstagram = document.getElementsByClassName('slider')[0]; // Selecteer het eerste element
    let arrowLeftInstagram = document.getElementById('slideRight');
    let arrowRightInstagram = document.getElementById('slideLeft');

    if (arrowLeftInstagram && arrowRightInstagram && scrollContainerInstagram) {
        arrowLeftInstagram.addEventListener('click', function(){
            scrollContainerInstagram.scrollLeft -= 335;
        });
        arrowRightInstagram.addEventListener('click', function(){
            scrollContainerInstagram.scrollLeft += 335;
        });
    }
});