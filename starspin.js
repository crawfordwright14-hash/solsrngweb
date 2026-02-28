const offi = document.getElementById("star100k")
const offi2 = document.getElementById("star1m")
const offi3 = document.getElementById("radst1")
const offi4 = document.getElementById("radst2")
const offi5 = document.getElementById("radst3")
const offi6 = document.getElementById("radst4")
let angle = 0
let speed = .5
function spin() {
    offi.style.rotate = angle + "deg"
    offi2.style.rotate = angle + "deg"
    offi3.style.rotate = angle + "deg"
    offi4.style.rotate = angle + "deg"
    offi5.style.rotate = angle + "deg"
    offi6.style.rotate = angle + "deg"
    angle += speed
}
setInterval(spin,1)