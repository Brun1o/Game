function Sprite(img){
    //Atributos
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;   
    this.srcX = this.srcY = 0;
    this.width = 96;
    this.height = 96;
    this.posX = this.posY = 0;
    this.img = img;
    this.speed = 1;
    //Métodos
    this.draw = function(ctx){
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,this.posX,this.posY,this.width,this.height);
    }
    //Move
    this.move = function(){
        if(this.mvRight){
            this.posX += this.speed;
            this.srcY = this.height * 2;
        } else 
        if(this.mvLeft){
            this.posX -= this.speed;
            this.srcY = this.height * 1;
        } else
        if (this.mvUp){
            this.posY -= this.speed;
            this.srcY = this.height * 3;
        } else
        if (this.mvDown){
            this.posY += this.speed;
            this.srcY = this.height * 0;
        };

    };
    };
