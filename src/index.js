let infoEl = document.getElementById("info-el")

function addMapSections() {
    let rndNumbersList = []

    for (let i = 0; i < 64; i++) {
        const newDiv = document.createElement('div')

        const rndNumber = Math.floor(Math.random(2) * 10)

        rndNumbersList.push(rndNumber)

        if (rndNumber > 5) {
            newDiv.classList.add('wall') // Add a class
        } else {
            newDiv.classList.add('empty') // Add a class
        }

        // newDiv.innerHTML = 'new div' // Add content
    
        let mainMapEl = document.querySelector("main")
        mainMapEl.appendChild(newDiv)
    }
    infoEl.textContent = rndNumbersList

}

addMapSections()

















