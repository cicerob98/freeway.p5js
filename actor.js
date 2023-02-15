// Variaveis do ator

var yActor = 595;
var xActor = 0;
let colisao = false;
let pontos = 0;
let vezesQueColidiu = 0;

// Adiciona pontos ao atravessar a avenida
function mostraPontos() {
  
  text(pontos, width/4, 43);
  textSize(40);
  textAlign(CENTER);
  fill(255, 235, 0);
  
  text(vezesQueColidiu, width - 265, 43);
  textSize(40);
  fill(255, 235, 0);
  
}

function marcaPontos() {
  if (yActor < 15) {
    ping.play();
    pontos++;
    yActor = 595;
  }
}

// Mostra Ator

function mostraAtor() {
  image(actor, xActor, yActor, 70, 40);
}

// Move o ator

function moveActor () {
  if (keyIsDown(UP_ARROW)) {
    yActor -= 2;  
      }
  if (keyIsDown(DOWN_ARROW)) {
    if (podeSeMoverParaBaixo()) {
      yActor += 3;
    }
  }
  if (keyIsDown(LEFT_ARROW)) {
    if (podeSeMoverParaAEsquerda()) {
      xActor -= 3;
    }
  }
  if (keyIsDown(RIGHT_ARROW)) {
    if (podeSeMoverParaADireita()) {
      xActor += 3;
    }
  }
}

//Verifica colisão

function verificaColisaoT() {

    for (let i=0; i < imagemCarrosT.length; i++) {
      
      colisao = collideRectRect(posicaoXVeiculosT[i], posicaoYVeiculosT[i], comprimentoCarros, larguraCarros, xActor, yActor, 40, 30);
      if (colisao) {
        crash.play();
        vezesQueColidiu--;
        yActor = 595;
      }
      
    }
}

function verificaColisaoB() {

    for (let i=0; i < imagemCarrosB.length; i++) {
      
      colisao = collideRectRect(posicaoXVeiculosB[i], posicaoYVeiculosB[i], comprimentoCarros, larguraCarros, xActor, yActor, 40, 30);
      if (colisao) {
        crash.play();
        vezesQueColidiu--;
        yActor = 595;
      }
      
    }
}

// Verifica se o ator esta dentro da área jogável

function podeSeMoverParaBaixo() {
  return yActor < 595;
}

function podeSeMoverParaAEsquerda() {
  return xActor > 0;
}

function podeSeMoverParaADireita() {
  return xActor < 930;
}