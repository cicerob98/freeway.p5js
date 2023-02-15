// Inicialização geral do jogo

function setup() {
  
  createCanvas(1000, 643);
  trilha.loop();

}

// Desenha os elementos na tela.

function draw() {
  
  background(estrada);
  mostraAtor();
  mostraPontos();
  criaVeiculosT();
  movimentaVeiculos(1);
  criaVeiculosB()
  movimentaVeiculos(2);
  resetaPosicaoX(1);
  resetaPosicaoX(2);
  moveActor();
  verificaColisaoT();
  verificaColisaoB();
  marcaPontos();
  
}




