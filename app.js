const currentComicUrl = "https://xkcd.com/info.0.json";

const leftPanel = document.querySelector('.left');
const rightPanel = document.querySelector('.right');

window.addEventListener('load', () => {
    console.log(getData(currentComicUrl))
});

const getData = (url) => {

    let xhttp = new XMLHttpRequest();

    let res;

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            res = xhttp.response;
        }
    }


    xhttp.open("GET", url, true);
    // xhttp.setRequestHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
    xhttp.send();

    return res;
}