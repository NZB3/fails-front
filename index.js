const serverAddress = "https://zebra-unbiased-puma.ngrok-free.app"
const resetRoute = "/fail"
const getCountRoute = "/"

async function getCount() {
    fetch(`${serverAddress}${getCountRoute}`)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            const counterDisplay = document.getElementsByClassName("count-display")[0];
            counterDisplay.innerHTML = data.count
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

async function postReset() {
    const response = await fetch(`${serverAddress}${resetRoute}`, {
        method: "POST",
        body: JSON.stringify({}),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
}

async function reset() {
    postReset()
    getCount()
}

getCount()