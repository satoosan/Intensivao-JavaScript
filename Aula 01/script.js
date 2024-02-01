const botaoPlayPause = document.getElementById('play-pause');
const botaoProxima = document.getElementById('proximo');
const botaoAnterior = document.getElementById('anterior');
const audioCapitulo = document.getElementById('audio-capitulo');
const nomeCapitulo = document.getElementById('capitulo');

const numeroCapitulos = 10;

let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa(){
  audioCapitulo.play();
  botaoPlayPause.classList.remove('bi-play-circle-fill');
  botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function trocarNomeFaixa(){
  nomeCapitulo.innerText = "Capítulo " + capituloAtual;
}

function pausarFaixa(){
  audioCapitulo.pause();
  botaoPlayPause.classList.remove('bi-pause-circle-fill');
  botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar(){
  if(taTocando === 0){
    tocarFaixa();
    taTocando = 1;
    console.log("Ta tocando")
  }else{
    pausarFaixa();
    taTocando = 0;
    console.log("Ta pausado");
  }
}

function proximaFaixa(){
  if(capituloAtual < numeroCapitulos){
    capituloAtual = capituloAtual + 1;
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    audioCapitulo.play();
  }else{
    capituloAtual = 1;
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    audioCapitulo.play();
  }
  trocarNomeFaixa();
}

function anteriorFaixa(){
  if(capituloAtual > 1){
    capituloAtual = capituloAtual - 1;
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    audioCapitulo.play();
  }else{
    capituloAtual = numeroCapitulos;
    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    audioCapitulo.play();
  }
  trocarNomeFaixa();
}

botaoPlayPause.addEventListener('click', tocarOuPausar);
botaoProxima.addEventListener('click', proximaFaixa);
botaoAnterior.addEventListener('click', anteriorFaixa);