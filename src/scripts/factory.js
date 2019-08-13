const politicianNameContainer = document.querySelector(".politician__name")
const billContainer = document.querySelector(".politician__bills")
const PACContainer = document.querySelector(".politician__influencers")

const htmlRepresentations = {
    politicianHtmlRep(politicianName) {
        return `
    <h1>${politicianName}</h1>
    `
    },
    billHtmlRep(bill, interest) {
        return `
    <h3>Sponsored Bills</h3>
    <div>
        <h4>${bill.name}</h4>
        <ul>
            <li>${interest.name}</li>
        </ul>
    </div>
    `
    },
    PACHtmlRep(PAC) {
        return `
    <h3>Related PACs</h3>
    <ul>
        <li>${PAC.name}</li>
    </ul>
    `
    }
}

export default htmlRepresentations