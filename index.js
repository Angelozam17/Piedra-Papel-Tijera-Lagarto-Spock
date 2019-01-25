//VARIABLES

let meScore = 0;
let pcScore = 0;

const meScore_span = document.getElementById('me-score');
const pcScore_span = document.getElementById('pc-score');

const scoreTablero_div = document.querySelector('.tablero');

const resultado_div = document.querySelector('.resultado');

const manos_div = document.querySelector('.manos');

let id = function () {
    return manos_div.children[0].getAttribute('id');
}

//FUNCIONES

function convertToWord(letter){
    if(letter == "r") return "Piedra";
    if(letter == "p") return "Papel";
    if(letter == "sc") return "Tijera";
    if(letter == "l") return "Lagarto";
    if(letter == "sp") return "Spock";
};

const obtenerManoPc = function(){
    const manos = ["r", "p", "sc", "l", "sp"];
    let numeroAletorio = (Math.floor(Math.random() * 5));
    return manos [numeroAletorio];
};

function win(me, pc){
    meScore++;
    meScore_span.innerHTML = meScore;
    resultado_div.firstElementChild.innerHTML = `${convertToWord(me)} vs ${convertToWord(pc)}. ¡Ganaste!`
};

function lose(me, pc){
    pcScore++;
    pcScore_span.innerHTML = pcScore;
    resultado_div.firstElementChild.innerHTML = `${convertToWord(me)} vs ${convertToWord(pc)}. Perdiste`
};

function draw(me, pc){
    resultado_div.firstElementChild.innerHTML = `${convertToWord(me)} vs ${convertToWord(pc)}. Es un empate.`
};

const elegiUnaMano= function(){
    const manoPc = obtenerManoPc();
    switch(this.id + manoPc){
        case "rl":
        case "rsc":
        case "lsp":
        case "lp":
        case "spsc":
        case "spr":
        case "scp":
        case "scl":
        case "pr":
        case "psp":
            win(this.id, manoPc);
            break;
        case "rsp":
        case "rp":
        case "lr":
        case "lsc":
        case "spp":
        case "spl":
        case "scsp":
        case "scr":
        case "psc":
        case "pl":
            lose(this.id, manoPc);
            break;
        case "rr":
        case "ll":
        case "spsp":
        case "scsc":
        case "pp":
            draw(this.id, manoPc);
            break;   
    }
    if(meScore == 20){
        alert('Has ganado esta partida');
        location.reload();
    }else if( pcScore == 20){
        alert('Has perdido esta partida');
        location.reload();
    }
};


//EVENTOS
for(let i = 0; i < manos_div.childElementCount; i++ ){
    manos_div.children[i].addEventListener('click', elegiUnaMano);
};

