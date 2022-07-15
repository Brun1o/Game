window.onload = function(){
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas"); //pega o canvas 
    var cnv_height = cnv.height; //pega a altura do canvas
    var cnv_width = cnv.width; //pega a largura do canvas
    var ctx = cnv.getContext("2d"); //pega o contexto do canvas
    var spriteSheet = new Image();
    spriteSheet.src = "img/car.png";
    var obstaculoSprite = new Image()
    obstaculoSprite.src = "img/obstaculo.png";
    var carro = new Sprite(spriteSheet, cnv_width/2, cnv_height/2, cnv_width);

    var faixa = new Faixa(cnv_width/2, cnv_height/2);
    var carrin = new Jogador(spriteSheet, cnv_width/3, cnv_height/3);
    faixa.adicionarNaFaixa(carrin);

    window.addEventListener("keydown",keydownHandler,false);
    window.addEventListener("keyup",keyupHandler,false);


    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                carro.move("right");
                break;
            case LEFT:
                carro.move("left");
                break;
        }
    }

    function keyupHandler(e){
        switch(e.keyCode){
            case RIGHT:
                carro.mvRight = false;
                break;
            case LEFT:
                carro.mvLeft = false;
                break;
        }
    }

    spriteSheet.onload = function(){
        init();
    }

    function init(){
        loop();
    }

    function update(){
        // carro.move();
    }

    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);
        carro.draw(ctx);
        faixa.desenharItemsDaFaixa(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        carro.move();
        draw();
    }
}