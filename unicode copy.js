let tssss = document.querySelector('#ptitSonHover');
let out = document.querySelector('#out');

let start = 128000; //127573 
let quantite = 200;
let fontSizeDefault = 2;


function init() {

    afficheUnicode();
    //
    grandirImg();

    let c = new Curseur('cursQt', 'Quantité', 200, 10, 1000, ".box1", "#f00");

    c.addEvents(changeQt);

}

function changeQt(newQt) {
    quantite = parseInt(newQt);
    afficheUnicode();
}

function afficheUnicode() {
    let html = "";
    for (let i = start; i < start + quantite; i++) {
        html += "<div class='unicode'>";
        html += "<span class='chiffre'>" + i + "</span>";

        html += "<div class = 'img'>&#" + i + "</div> </div>";
    }
    out.innerHTML = html;
    updateTailleUnicode();
}

function previousBtn() {
    tssss.play();
    tssss.volume = .5;
    start -= quantite;
    if (start < 0) {
        start = 0;
    }
    afficheUnicode();
}

function afterBtn() {
    tssss.play();
    tssss.volume = .5;

    start += quantite;

    afficheUnicode();

}

function grandirImg() {
    // <div class="img">🌝</div>
    fontSizeDefault++;
    updateTailleUnicode();
}

function updateTailleUnicode() {
    let newSizeImgs = document.querySelectorAll('.img');
    newSizeImgs.forEach(newSizeImg => {
        newSizeImg.style.fontSize = fontSizeDefault + "em";
    });
}

function reduireImg() {
    // <div class="img">🌝</div>
    let newSizeImgs = document.querySelectorAll('.img');
    fontSizeDefault--;

    if (fontSizeDefault < 1) {
        fontSizeDefault = 1;
    }

    newSizeImgs.forEach(newSizeImg => {

        newSizeImg.style.fontSize = fontSizeDefault + "em";

    });

}

function searchImg(value) {

    start = value;
    afficheUnicode();
}