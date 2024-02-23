/* EXEMPLO 01 */
const semaforo = document.querySelector('#container img');
const buttons = document.querySelectorAll('#buttons button');
let corIndex = 0;
let intervalo;

buttons.forEach((btn) => {
    btn.addEventListener('click',(evt) => {
        clearInterval(intervalo);
        coresSemaforo[evt.target.id]();
    })
})

const coresSemaforo = {
    'red':    () => semaforo.src = src="img/vermelho.png",
    'yellow': () => semaforo.src = src="img/amarelo.png",
    'green':  () => semaforo.src = src="img/verde.png",
    'auto':   () => intervalo = setInterval(changeColor, 500)
}

const changeColor = () => {
    const colors = ['red', 'yellow', 'green'];
    const corIndividual = colors[corIndex];
    coresSemaforo[corIndividual]();
    corIndex++;
    verificador();
}

function verificador(){
    if(corIndex > 2){
        corIndex = 0;
    }
}

/* EXEMPLO 02 */
/*
const semaforo = document.querySelector('#container img');
const btnRed = document.querySelector('#red');
const btnYellow = document.querySelector('#yellow');
const btnGreen = document.querySelector('#green');
const btnAuto = document.querySelector('#auto');
let intervalo;

const vermelho = () => semaforo.src = src="img/vermelho.png";
const amarelo = () => semaforo.src = src="img/amarelo.png";
const verde = () => semaforo.src = src="img/verde.png";

// setTimeout executa só uma vez, sendo necessário a chamada novamente, ao contrário do setInterval
const automatico = () => {
    setTimeout(vermelho,500);
    setTimeout(amarelo,1000);
    setTimeout(verde,1500);
    intervalo = setTimeout(automatico,1500);
}

btnRed.addEventListener('click',() => {clearInterval(intervalo);vermelho();});
btnYellow.addEventListener('click',() => {clearInterval(intervalo);amarelo();});
btnGreen.addEventListener('click',() => {clearInterval(intervalo);verde();});
btnAuto.addEventListener('click',() => {clearInterval(intervalo);automatico();});
*/