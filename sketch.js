
 
let xBolinha = 300 ; 
let yBolinha = 200;
let diametro = 15;
let raio = diametro / 2 ;
    
//velocidade da bolinha
let velocidadeXBolinha = 6;
let velocidadeYBolinha = 6;
let raqueteComprimento = 10;
let raqueteAltura = 90;

//variáveis da raquete
let XRaquete = 5;
let YRaquete = 150;

 //variáveis do oponente
let XRaqueteOponente = 585;
let YRaqueteOponente = 150;
let velocidadeYOponente;


let colidiu = false;

 //placar do jogo
let meusPontos = 0;
let pontosDoOponente = 0;

//sons do jogo
let raquetada;
let ponto;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  ponto = loadSound("ponto.mp3");
  raquetada = loadSound("raquetada.mp3");
}

function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha();
  movimentaBolinha();
  vereficaColisaoBorda();
  mostraRaquete(XRaquete, YRaquete);
  movimentaMinhaRaquete();
  verificaColisaoRaquete(XRaquete, YRaquete);
  mostraRaquete(XRaqueteOponente, YRaqueteOponente);
  mostraRaquete(XRaqueteOponente,YRaqueteOponente);
  movimentaRaqueteOponente();
  incluiPlacar();
  marcaPonto();
}
  

 function mostraBolinha(){
   circle   (xBolinha , yBolinha , diametro);
 }

 function movimentaBolinha(){
   xBolinha += velocidadeXBolinha;
  yBolinha += velocidadeYBolinha;
 }

 function vereficaColisaoBorda(){
   if (xBolinha + raio > width ||
     xBolinha - raio < 0){
    velocidadeXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
     yBolinha - raio < 0){
    velocidadeYBolinha *= -1;
  }
 }

 function mostraRaquete(X,Y){
 rect( X, Y, raqueteComprimento, raqueteAltura);
 }

function movimentaMinhaRaquete() {
    if (keyIsDown(UP_ARROW)) {
        YRaquete -= 10;
    }
    if (keyIsDown(DOWN_ARROW)) {
        YRaquete += 10 ;
    }
}

 function vereficaColisaoRaquete(){
   if (xBolinha - raio < XRaquete + raqueteComprimento && yBolinha - raio < YRaquete + raqueteAltura && yBolinha + raio > YRaquete){
     velocidadeXBolinha *= -1;
      raquetada.play();
   }
 }

 function verificaColisaoRaquete(X,Y) {
  colidiu = collideRectCircle(X, Y, raqueteComprimento, raqueteAltura, xBolinha, yBolinha, raio);
  if (colidiu){
    velocidadeXBolinha *= -1
    raquetada.play();
    
  }
}

 function movimentaRaqueteOponente(){
 if (keyIsDown(87)){
        YRaqueteOponente -= 10;
    }
    if (keyIsDown(83)){
        YRaqueteOponente += 10;
    }
 }

function incluiPlacar(){
  stroke(255)
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 0));
  rect(150, 10, 40, 20);
   fill (255);
  text(meusPontos, 170, 26);
   fill(color(255, 140, 0));
  rect(450, 10, 40, 20);
   fill (255);
  text(pontosDoOponente, 470, 26);
}

 function marcaPonto(){
   if (xBolinha > 590){
    meusPontos += 1; 
      ponto.play();
   }
   if (xBolinha < 10 ){
     pontosDoOponente += 1
      ponto.play();
   }
 }
 