//Declara a variável do plano de fundo
var jardimImg;
//Declara as variáveis das images/animações do gato
var gatoImg1, gatoImg2, gatoImg3;
//Declara as variáveis das images/animações do rato
var ratoImg1, ratoImg2, ratoImg3;
//Declara as variáveis do gato e do rato
var gato, rato;

function preload() {
    //Carrega a imagem do plano de fundo
    jardimImg = loadImage ("images/garden.png");

    //Carrega as imagens do gato
    gatoImg1 = loadImage ("images/cat1.png");
    gatoImg2 = loadAnimation ("images/cat2.png", "images/cat3.png");
    gatoImg3 = loadImage ("images/cat4.png");

    //Carrega as imagens do rato
    ratoImg1 = loadImage ("images/mouse1.png");
    ratoImg2 = loadAnimation ("images/mouse2.png", "images/mouse3.png");
    ratoImg3 = loadImage ("images/mouse4.png");
}

function setup(){
    //Cria e define o tamanho do canvas
    createCanvas(1000,800);

    //Cria a sprite do gato
    gato = createSprite (870,600);
    //Adiciona uma imagem inicial ao gato
    gato.addAnimation ("gatoSentado", gatoImg1);
    //Define a escala de resolução do gato
    gato.scale = 0.15;

    //Cria a sprite de rato
    rato = createSprite (130,600);
    //Adiciona uma imagem inicial ao rato
    rato.addAnimation ("ratoParado", ratoImg1);
    //Define a escala de resolução do gato
    rato.scale = 0.15;
}

function draw() {
    //Adiciona a imagem de jardim ao plano de fundo
    background(jardimImg);
    //Define a condição responsável por identificar a colisão do  gato com o rato
    if (gato.x - rato.x < (gato.width - rato.width)/2) {
        //Define a velocidade no eixo X do gato para 0
        gato.velocityX = 0;
        //Adiciona uma imagem ao gato
        gato.addImage ("gatoParado", gatoImg3);
        //Altera a imagem do gato
        gato.changeImage ("gatoParado");
        //Define a localização do gato no eixo X
        gato.x = 300;
        //Redefine a escala de resolução do gato
        gato.scale = 0.15;

        //Adiciona uma imagem ao rato
        rato.addImage ("ratoFim", ratoImg3);
        //Altera a imagem do rato
        rato.changeImage ("ratoFim");
        //Redefine a escala de resolução do rato
        rato.scale = 0.15;
    }
    //Desenha as sprites
    drawSprites();
}

function keyPressed(){
  //Define a condição responsável por dar velocidade ao gato e alterar a imagem de ambos
  if (keyCode === LEFT_ARROW && gato.x === 870) {
    //Adiciona uma animação ao rato
    rato.addAnimation ("ratoProvocando", ratoImg2);
    //Altera a animação do rato
    rato.changeAnimation ("ratoProvocando");
    //Define o delay da aplicação de um frame ao outro
    rato.frameDelay = 25;

    //Define uma velocidade no eixo X ao gato
    gato.velocityX = -5;
    //Adiciona uma animação ao gato
    gato.addAnimation ("gatoAndando", gatoImg2);
    //Redefine a animação do gato
    gato.changeAnimation ("gatoAndando");
  }

  //Define a condição responsável por reiniciar o ciclo de animações
  if (keyCode === UP_ARROW && gato.x === 300) {
    //Define a posição do gato no eixo X
    gato.x = 870;
    //Altera a animação do gato
    gato.changeAnimation ("gatoSentado");
    //Altera a animação do rato
    rato.changeAnimation ("ratoParado");
  }
}