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

let carrats = 5;

function carratsRefresh() {
    let carratAmount = document.getElementById("carats_amount");
    carratAmount.innerHTML = `${carrats} Carrats`;
}


