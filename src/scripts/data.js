const API = {
    getStuff() {
        return fetch("http://localhost:8088/billSponsors?_expand=legislativeBill&_expand=politician")
            .then(response => response.json())
    },
    getPoliticians() {
        return fetch("http://localhost:8088/politicians")
    }
}

export default API