let x = document.getElementById("lat");
let y = document.getElementById("long");

let boutongeolocalisationLatitude = document.getElementById("latitude");
let boutongeolocalisationLongitude = document.getElementById("longitude");

boutongeolocalisationLatitude.addEventListener('click', getLocationLatitude);
boutongeolocalisationLongitude.addEventListener('click', getLocationLongitude);

function getLocationLatitude() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            x.innerHTML = "Latitude " + position.coords.latitude
        });
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getLocationLongitude() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            y.innerHTML = "Longitude " + position.coords.longitude
        });
    } else {
        y.innerHTML = "Geolocation is not supported by this browser.";
    }
}

let boutonarriere = document.getElementById("reculer");

let nbpages = document.getElementById("nbpages");

boutonarriere.addEventListener('click', retournerArriere);

function retournerArriere() {
    window.history.go(-parseInt(nbpages.value));
}

let textecopier = document.getElementById("textecopie").value;

let boutoncopier = document.getElementById("copier");

boutoncopier.addEventListener('click', copier);

function copier() {
    navigator.clipboard.writeText(textecopier).then();
}

let colle = document.getElementById("textecolle");

let boutoncoller = document.getElementById("coller");

boutoncoller.addEventListener('click', coller);

function coller() {
    navigator.clipboard.readText().then(
        clipText => colle.innerText = clipText);
}
