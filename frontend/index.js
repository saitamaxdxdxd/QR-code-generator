"use strict";

const imageQr = document.querySelector("img");
const inputUrl = document.querySelector("input");
const buttonCreate = document.querySelector("button");
const errorMessage = document.getElementById("message");
const buttonDownload = document.getElementById("download");

const endpoint = "http://localhost:4000/";

buttonCreate.addEventListener("click", () => {
    const url = inputUrl.value;
    sendUrl(endpoint, url);
    buttonDownload.hidden = false;
});

buttonDownload.addEventListener("click", () => {
    buttonDownload.hidden = true;
    errorMessage.textContent = "";
});


async function sendUrl(endPoint, url) {
    const settings = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url: url })
    };
    try {
        const response = await fetch(endPoint, settings);
        const { link } = await response.json();
        buttonDownload.href = link;
        imageQr.src = link;
    }
    catch (err) {
        errorMessage.textContent = err.message;
    }
}

