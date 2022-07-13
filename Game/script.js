window.onload = function(){
    var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
    var cnv = document.querySelector("canvas"); //pega o canvas 
    var cnv_height = cnv.height; //pega a altura do canvas
    var cnv_width = cnv.width; //pega a largura do canvas
    var ctx = cnv.getContext("2d"); //pega o contexto do canvas
    var spriteSheet = new Image();
    spriteSheet.src = "img/car.png";
    var carro = new Sprite(spriteSheet, cnv_width/2, cnv_height/2, cnv_width);
    var car = new Player(spriteSheet, cnv_width/2, cnv_height/4, cnv_width);
    var enemy = new Enemy(spriteSheet, cnv_width/2, 0, cnv_width);

    window.addEventListener("keydown",keydownHandler,false);
    window.addEventListener("keyup",keyupHandler,false);


    function keydownHandler(e){
        switch(e.keyCode){
            case RIGHT:
                carro.move("right");
                car.move("right");
                break;
            case LEFT:
                carro.move("left");
                car.move("left");
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
        car.draw(ctx);
        enemy.draw(ctx);
    }

    function loop(){
        window.requestAnimationFrame(loop,cnv);
        update();
        carro.move();
        car.move();
        enemy.move();
        draw();
    }
}