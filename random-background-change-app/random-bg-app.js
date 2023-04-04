body = document.querySelector("body")

function randomBg() {
    let red = randomNum()
    let blue = randomNum()
    let green = randomNum()
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

function blackBg() {
    body.style.backgroundColor = `black`
}

function whiteBg() {
    body.style.backgroundColor = `white`
}

function randomNum() {
    let random = Math.random() * 256
    random = random.toFixed(0)
    return random
}

