// Zmiana bannera
function switchBanner(banner_id) {
    let allBanners = document.querySelectorAll(".banner");
    console.log(allBanners);
    allBanners.forEach(el => {
        el.style.display = "none";
    });
    let currentBanner = document.querySelector(`#${banner_id}`);
    console.log(currentBanner);
    currentBanner.style.display = "block";
}


// Ilość Carratek

let carrats = 0;

window.addEventListener('DOMContentLoaded', () => {
    let carratAmount = document.getElementById("carats_amount");
    carratAmount.innerHTML = `${carrats} Carrats`;
});


function addCarrats() {
    carrats += 50
    let carratAmount = document.getElementById("carats_amount");
    carratAmount.innerHTML = `${carrats} Carrats`;
}
