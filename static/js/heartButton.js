let heartButtonClick = document.querySelectorAll(".heartButton");

heartButtonClick.forEach(button => {
    button.addEventListener('click', () => {
        console.log('heart button werkt');

        let heartIcon = button.querySelector(".heartIcon");
        let heartPath = button.querySelector(".heartPath");

        heartIcon.classList.toggle("heartButtonIsClicked");
        heartPath.classList.toggle("heartButtonIsClicked");

    })
})
