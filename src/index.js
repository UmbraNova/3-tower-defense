
let mainMapEl = document.querySelector("main");
let rndNumbersList = []

function generateMap() {
    for (let i = 0; i < 8; i++) {
        let tempNumbersList = []

        for (let j = 0; j < 8; j++) {
            const rndNumber = Math.floor(Math.random() * 2)
            tempNumbersList.push(rndNumber)
        }
        rndNumbersList.push(tempNumbersList)
    }
}

function renderMap() {
    for (let number of rndNumbersList.flat(1)) {
        const newDiv = document.createElement("div")
        if (number > 0) {
            newDiv.classList.add("wall")
        } else {
            newDiv.classList.add("empty")
        }
        mainMapEl.appendChild(newDiv)
    }
}

function showMapInfoNums() {
    // show cells rnd numbers in info <p> elements
    for (let i = 0; i < 8; i++) {
        let infoEl = document.getElementById(`${i+1}-info-el`)
        infoEl.innerHTML = rndNumbersList.slice(i * 8, (i + 1) * 8).join("<br>")
    }
}

generateMap()
renderMap()
showMapInfoNums()
















