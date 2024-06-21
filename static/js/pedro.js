const audio = document.getElementById("myAudio")
const audioButton = document.getElementById("audioButton")

audioButton.addEventListener("click", function(){
    if (audio.paused) {
        audio.play()
        audioButton.textContent = ''
    } else {
        audio.pause()
        audioButton.textContent = ''
    }
})

audio.addEventListener("ended", function(){
    audioButton.textContent = ''
})