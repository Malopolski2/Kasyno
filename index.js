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

// Trainee

function Trainee(name, star, source) {
    this.name = name;
    this.star = star;
    this.source = source;
}

const fatty = new Trainee('Oguri Cap', '3 Star', 'images\\t-fatty.jpg');
const agemasen = new Trainee('Special Week', '3 Star', 'images\\t-agemasen.jpg');
const ballin = new Trainee('Tokai Teio', '3 Star', 'images\\t-ballin.jpg');
const rice = new Trainee('Rice Shower', '3 Star', 'images\\t-rice.jpg');
const falcon = new Trainee('Smart Falcon', '3 Star', 'images\\t-falcon.jpg');
const digital = new Trainee('Agnes Digital', '3 Star', 'images\\t-digital.jpg');

const mambo = new Trainee('Matikanetannhauser', '2 Star', 'images\\t-mambo.jpg');
const gold = new Trainee('Gold Ship', '2 Star', 'images\\t-gold.jpg');
const daiwa = new Trainee('Daiwa Scarlet', '2 Star', 'images\\t-daiwa.jpg');

const haru = new Trainee('Haru Urara', '1 Star', 'images\\t-haru.jpg');
const tachyon = new Trainee('Agnes Tachyon', '1 Star', 'images\\t-tachyon.jpg');
const nature = new Trainee('Nice Nature', '1 Star', 'images\\t-nature.jpg');

// Pulls

function TraineePull(banner_uma) {
    let value = Math.floor(Math.random() * 10);
    if(value == 1) {
        let banner_value = Math.floor(Math.random() * 10);
        if(banner_value <= 5) {
            return banner_uma;
        }
        else {
            switch(banner_value) {
                case 6:
                    return agemasen;
                    break;
                case 7:
                    return ballin;
                    break;
                case 8:
                    return rice;
                    break;
                case 9:
                    return falcon;
                    break;
                case 10:
                    return digital;
                    break;
            }
        }
    }
    else{
        switch(value) {
            case 2:
                return mambo;
                break;
            case 3:
                return daiwa;
                break;
            case 4:
                return gold;
                break;
            case 5:
                return haru;
                break;
            case 6:
                return tachyon;
                break;
            case 7:
                return nature;
                break;
            case 8:
                return haru;
                break;
            case 9:
                return tachyon;
                break;
            case 10:
                return nature;
                break;
        }
    }
}

function TraineeBannerPull(banner_uma){
    if(carrats >= 150) {
        carrats += -150
        let carratAmount = document.getElementById("carats_amount");
        carratAmount.innerHTML = `${carrats} Carrats`;
        let resultsDiv = document.getElementById("pull_results");
        let resultsUma = TraineePull(banner_uma);
        let resultsImage = new Image(150);
        resultsImage.src = resultsUma.source;
        resultsDiv.appendChild(resultsImage);
    }
}
function TraineeBannerTenPull(banner_uma) {
    for(let i = 0; i<10; i++) {
        TraineeBannerPull(banner_uma);
    }
}

