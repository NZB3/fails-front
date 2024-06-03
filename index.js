const serverAddress = "https://days-without-fails.nzb3.su"
const resetRoute = "/fail"
const getCountRoute = "/"

async function getCount() {
    fetch(`${serverAddress}${getCountRoute}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(data => {
            const counterDisplay = document.getElementsByClassName("count-display")[0];
            counterDisplay.innerHTML = data.count
        })
        .catch(error => {
            console.log(error)
        });
}

async function postReset() {
    if (confirm("Are you sure?")) {
        const response = await fetch(`${serverAddress}${resetRoute}`, {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "ngrok-skip-browser-warning":""
            }
        })
    }
}

async function reset() {
    postReset()
    getCount()
}

getCount()