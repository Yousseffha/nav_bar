let container = document.getElementById("container")
let bars = document.getElementById("bars")
let content = document.querySelectorAll("ul li")

bars.onclick = function() {
    container.classList.toggle("width")
    bars.classList.toggle("close")
    content.forEach((e) => {
        e.classList.toggle("opacity")
    })
}