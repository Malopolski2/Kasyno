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
const chiyono = new Trainee('Sakura Chiyono O', '3 Star', 'images\\t-chiyono.jpg');
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

// Support Cards

function Support(name, rarity, source) {
    this.name = name;
    this.rarity = rarity;
    this.source = source;
}

const harikitteikou = new Support('Kitasan Black', 'SSR', 'images\\s-harikitteikou.jpg');
const tazuna = new Support('Tazuna', 'SSR', 'images\\s-tazuna.jpg');
const dajmonds = new Support('Satono Diamond', 'SSR', 'images\\s-dajmonds.jpg');
const elcondor = new Support('El Condor Pasa', 'SSR', 'images\\s-elcondor.jpg');
const googoobabies = new Support('Super Creek', 'SSR', 'images\\s-googoobabies.jpg');
const riko = new Support('Riko Kashimoto', 'SSR', 'images\\s-riko.jpg');
const clanker = new Support('Mihono Bourbon', 'SSR', 'images\\s-clanker.jpg');

const wife = new Support('Eishin Flash', 'SR', 'images\\s-wife.jpg');
const sobota = new Support('Marvelous Sunday', 'SR', 'images\\s-sobota.jpg');
const tosho = new Support('Sweep Tosho', 'SR', 'images\\s-tosho.jpg');

const gun = new Support('Mayano Top Gun', 'R', 'images\\s-gun.jpg');
const helios = new Support('Daitaku Helios', 'R', 'images\\s-helios.jpg');
const mcqueen = new Support('Mejiro McQueen', 'R', 'images\\s-mcqueen.jpg');

// Pulls

function TraineePull(banner_uma) {
    let value = Math.floor(Math.random() * 10 + 1);
    if(value == 1) {
        let banner_value = Math.floor(Math.random() * 10 + 1);
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
        console.log(resultsUma);
        resultsImage.src = resultsUma.source;
        resultsDiv.appendChild(resultsImage);
    }
}

function TraineeBannerTenPull(banner_uma) {
    if(carrats >=1500) {
        for(let i = 0; i<10; i++) {
            TraineeBannerPull(banner_uma);
        }
    }
}


function SupportPull(banner_uma) {
    let value = Math.floor(Math.random() * 10 + 1);
    if(value == 1) {
        let banner_value = Math.floor(Math.random() * 10 + 1);
        if(banner_value <= 5) {
            return banner_uma;
        }
        else {
            switch(banner_value) {
                case 6:
                    return dajmonds;
                    break;
                case 7:
                    return clanker;
                    break;
                case 8:
                    return googoobabies;
                    break;
                case 9:
                    return elcondor;
                    break;
                case 10:
                    return riko;
                    break;
            }
        }
    }
    else{
        switch(value) {
            case 2:
                return wife;
                break;
            case 3:
                return sobota;
                break;
            case 4:
                return tosho;
                break;
            case 5:
                return gun;
                break;
            case 6:
                return helios;
                break;
            case 7:
                return mcqueen;
                break;
            case 8:
                return gun;
                break;
            case 9:
                return helios;
                break;
            case 10:
                return mcqueen;
                break;
        }
    }
}

function SupportBannerPull(banner_uma){
    if(carrats >= 150) {
        carrats += -150
        let carratAmount = document.getElementById("carats_amount");
        carratAmount.innerHTML = `${carrats} Carrats`;
        let resultsDiv = document.getElementById("support_pull_results");
        let resultsUma = SupportPull(banner_uma);
        let resultsImage = new Image(150, 200);
        console.log(resultsUma);
        resultsImage.src = resultsUma.source;
        resultsDiv.appendChild(resultsImage);
    }
}

function SupportBannerTenPull(banner_uma) {
    if(carrats >=1500) {
        for(let i = 0; i<10; i++) {
            SupportBannerPull(banner_uma);
        }
    }
}