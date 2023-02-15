// Declaração de variáveis para carregar imagens

let estrada; // Cenário de fundo
let actor; // Imagem do ator

let carro1T; // Imagem do veiculo 1
let carro2T; // Imagem do veiculo 2
let carro3T; // Imagem do veiculo 3

let carro1B; // Imagem do veiculo 1
let carro2B; // Imagem do veiculo 2
let carro3B; // Imagem do veiculo 3

// Declaração de variáveis para carregar os sons do jogo.

let trilha; // Trilha sonora de fundo
let ping; // Som ao marcar pontos
let crash; // Som ao colidir com algum veiculo

function preload() {
  
  estrada = loadImage('assets/estrada.png');
  carro1T = loadImage('assets/carro-1.png');
  carro2T = loadImage('assets/carro-2.png');
  carro3T = loadImage('assets/carro-3.png');
  imagemCarrosT = [carro1T, carro2T, carro3T];
  carro1B = loadImage('assets/carro-1B.png');
  carro2B = loadImage('assets/carro-2B.png');
  carro3B = loadImage('assets/carro-3B.png');
  imagemCarrosB = [carro1B, carro2B, carro3B];
  actor = loadImage('assets/ator-1.png');
  trilha = loadSound('sound/trilha.mp3');
  ping = loadSound('sound/pontos.wav');
  crash = loadSound('sound/colidiu.mp3');
  
}



