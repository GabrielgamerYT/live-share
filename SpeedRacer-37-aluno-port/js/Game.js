class Jogo {
  constructor() {}

  lerEstado() {
    var estadoJogoRef = database.ref("estadoJogo");
    estadoJogoRef.on("value", function(dados) {
      estadoJogo = dados.val();
    });
  }

  inicio() {
    jogador = new Jogador();
    numJogadores = jogador.lerNum();

    form = new Form();
    form.mostrar();
    carro1 = createSprite(width/2-50,height-100)
    carro2 = createSprite(width/2+100,height-100)
    carro1.addImage(ford)
    carro2.addImage(nissan)
    carro1.scale = 0.07
    carro2.scale = 0.07

    carros = [carro1,carro2]
  }
  jogar(){
   this.mudarElementos();
   Jogador.lerInfJogadores();
   if (todosJogadores != undefined) {
     image(pista, 0, -height*5, width, height*6)
    drawSprites();


   }



}
  mudarElementos() {
    form.esconder();
    form.tituloImg.position(40, 50);
    form.tituloImg.class("tituloAposEfeito");
  }
  update(estado){
   database.ref("/").update({
     estadoJogo:estado
   })

  }




  }
