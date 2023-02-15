// Variaveis dos veiculos da faixa superior
let posicaoXVeiculosT = [1200, 1200, 1200];
let posicaoYVeiculosT = [75, 165, 245];
let velocidadeVeiculosT = [1.8, 3, 5];

// Variaveis dos veiculos da faixa superior
let posicaoXVeiculosB = [-200, -200, -200];
let posicaoYVeiculosB = [353, 430, 520];
let velocidadeVeiculosB = [4, 2.5, 2];

//Tamanho geral dos veiculos
let comprimentoCarros = 80;
let larguraCarros = 50;


function criaVeiculosT() {
  
    for (i = 0; i < imagemCarrosT.length; i++) {
      image(imagemCarrosT[i], posicaoXVeiculosT[i], posicaoYVeiculosT[i], comprimentoCarros, larguraCarros);
    }
  
}

function criaVeiculosB() {
      
    for (i = 0; i < imagemCarrosB.length; i++) {
      image(imagemCarrosB[i], posicaoXVeiculosB[i], posicaoYVeiculosB[i], comprimentoCarros, larguraCarros);
    }
  
}

function movimentaVeiculos(pista) {
  
  if (pista == 1) {
    for (i = 0; i < imagemCarrosT.length; i++) {
      posicaoXVeiculosT[i] -= velocidadeVeiculosT[i]; 
    }
  }
  
  if (pista == 2) {
    for (i = 0; i < imagemCarrosB.length; i++) {
      posicaoXVeiculosB[i] += velocidadeVeiculosB[i]; 
    }
  }
  
}

function resetaPosicaoX(pista) {
  
  if (pista == 1) {     
    for (i = 0; i < imagemCarrosT.length; i++){
      if (posicaoXVeiculosT[i] < -200) {
        posicaoXVeiculosT[i] = 1000;
      }  
    }
  }
  
  if (pista == 2) {     
    for (i = 0; i < imagemCarrosB.length; i++){
      if (posicaoXVeiculosB[i] > 1000) {
        posicaoXVeiculosB[i] = -200;
      }  
    }
  }
    
}
