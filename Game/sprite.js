function Sprite(img, posX, posY){
    //Atributos
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;   
    this.srcX = this.srcY = 0;
    this.width = 54;
    this.height = 96;
    this.posX = posX;
    this.posY = posY;
    this.img = img;
    this.speed = 1;
    this.rotation = 0;
    //Métodos
    this.draw = function(ctx){
        this.rotate(ctx);
        ctx.save();
        ctx.translate(this.posX + this.width/2, this.posY + this.height/2);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,-this.width/3,-this.height/2,this.width,this.height);
        ctx.restore();
    }
    // Rotate the sprite based on the direction of movement
    this.maxRotation = function(n){
        let max = Math.PI/6;
        if (n > max) {
            return max;
        }
        if (n < -max) {
            return -max;
        }
        return n;
    }
    // rotate car back to 0 degrees smoothly
    this.rotate_back = function(ctx){
        min_max = 0.01
        if (this.rotation > min_max || this.rotation < -min_max) {
            this.rotation = this.rotation * 0.9;
        }
        else {
            this.rotation = 0;
        }
    }

    this.rotate = function(ctx){
        console.log(this.rotation);
        if(this.mvRight){
            this.rotation += Math.PI/180;
        }else if(this.mvLeft){
            this.rotation -= Math.PI/180;
        }else {
            this.rotate_back(ctx);
        }
        this.rotation = this.maxRotation(this.rotation);
    }
    
    //Move
    this.move = function(){
        if(this.mvRight){
            this.posX += this.speed;
            // this.srcY = this.height * 2;
        } else 
        if(this.mvLeft){
            this.posX -= this.speed;
            // this.srcY = this.height * 1;
        }
    };
    };
