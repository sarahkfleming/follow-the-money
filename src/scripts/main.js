import API from "./data";
import htmlRepresentations from "./factory";
import renderToDom from "./dom";

const politicianContainer = document.querySelector(".politician")

API.getStuff()
.then(results => {
    console.log(results)
    results.forEach(result => {
        const politicianName = result.politician.name
        const billName = result.legislativeBill.name
        // console.log(billName, politicianName)
        const politicanHtml = htmlRepresentations.politicianHtmlRep(politicianName)
        renderToDom.renderPolitician(politicanHtml)
    })
})