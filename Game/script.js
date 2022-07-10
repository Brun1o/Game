window.onload = function(){
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas"); //pega o canvas 
    var ctx = cnv.getContext("2d"); //pega o contexto do canvas
    var spriteSheet = new Image();
    spriteSheet.src = "img/car.png";
    var carro = new Sprite(spriteSheet);

    window.addEventListener("keydown",keydownHandler,false);
    window.addEventListener("keyup",keyupHandler,false);

    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                carro.mvRight = true;
                carro.mvLeft = false;
                carro.mvUp = false;
                carro.mvDown = false;
                break;
            case LEFT:
                carro.mvRight = false;
                carro.mvLeft = true;
                carro.mvUp = false;
                carro.mvDown = false;
                break;
            case UP:
                carro.mvRight = false;
                carro.mvLeft = false;
                carro.mvUp = true;
                carro.mvDown = false;
                break;
            case DOWN:
                carro.mvRight = false;
                carro.mvLeft = false;
                carro.mvUp = false;
                carro.mvDown = true;
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
            case DOWN:
                carro.mvDown = false;
                break;
            case UP:
                carro.mvUp = false;
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
        carro.move();
    }

    function draw(){
        ctx.clearRect(0,0,cnv.width,cnv.height);
        carro.draw(ctx);
        carro.rotate(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        draw();
    }
}