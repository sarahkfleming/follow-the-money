// Get reference to container elements
const politicianNameContainer = document.querySelector(".politician__name")
const billContainer = document.querySelector(".politician__bills")
const PACContainer = document.querySelector(".politician__influencers")

const renderToDom = {
    renderPolitician(htmlString) {
        politicianNameContainer.innerHTML += htmlString
    },
    renderBill(htmlString) {
        billContainer.innerHTML += htmlString
    },
    renderPAC(htmlString) {
        PACContainer.innerHTML += htmlString
    }
}

export default renderToDom