function Sprite(img){
    //Atributos
    this.mvRight = this.mvLeft = this.mvUp = this.mvDown = false;   
    this.srcX = this.srcY = 0;
    this.width = 96;
    this.height = 96;
    this.posX = this.posY = 0;
    this.img = img;
    this.speed = 1;
    // félix
    this.rotation = 0;
    //Métodos
    this.draw = function(ctx){
        this.rotate(ctx);
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
    }
    this.rotate = function(ctx){
        console.log(this.rotation);
        if(this.mvRight){
            this.rotation += Math.PI/180;
        }
        if(this.mvLeft){
            this.rotation -= Math.PI/180;
        }
        
        if (this.rotation > this.maxRotation(this.rotation)) {
            this.rotation = this.maxRotation(this.rotation);
        }

        ctx.save();
        ctx.translate(this.posX + this.width/2, this.posY + this.height/2);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img,this.srcX,this.srcY,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height);
        ctx.restore();
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
        } else
        if (this.mvUp){
            this.posY -= this.speed;
            this.srcY = this.height * 3;
        } else
        if (this.mvDown){
            this.posY += this.speed;
            // this.srcY = this.height * 0;
        };

    };
    };
