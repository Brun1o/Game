class Car{
    constructor(img, x, y){
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = 48;
        this.height = 122;
    }

    draw(ctx){
        ctx.save();
        ctx.translate(this.x + this.width/2, this.y + this.height/2);
        ctx.drawImage(this.img,0,0,this.width,this.height,-this.width/3,-this.height/2,this.width,this.height);0
        ctx.restore();
    }

    move(direction){
        console.log(direction, "teasdasdasdleport", this.x, this.dest);
        if(direction == "right"){
            this.x += this.speed;
        } else if(direction == "left"){
            this.x -= this.speed;
        }
    }
}

class Player extends Car{
    constructor(img, x, y, screenWidth){
        super(img, x, y);
        this.speed = 1;
        this.rotation = 0;
        this.dest = screenWidth / 3;
        this.screenWidth = screenWidth;
        this.rotation = 0
    }
    draw(ctx){
        this.rotate(ctx);
        ctx.save();
        ctx.translate(this.x + this.width/2, this.y + this.height/2);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img,0,0,this.width,this.height,-this.width/3,-this.height/2,this.width,this.height);
        ctx.restore();
    }

    maxRotation(n){
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
    rotate_back(ctx){
        min_max = 0.01
        if (this.rotation > min_max || this.rotation < -min_max) {
            this.rotation = this.rotation * 0.9;
        }
        else {
            this.rotation = 0;
        }
    }

    rotate(ctx){
        if(this.dest > this.x){
            this.rotation += Math.PI/180;
        }else if(this.dest < this.x){
            this.rotation -= Math.PI/180;
        }else {
            this.rotate_back(ctx);
        }
        this.rotation = this.maxRotation(this.rotation);
    }
    
    move(direction = null) {
        console.log(direction, "teasdasdasdleport", this.x, this.dest);
        if (this.dest == this.x) {
            half_pista = Math.round(this.screenWidth / 6);
            if (direction == "right") {
                this.dest += half_pista
            }
            else if (direction == "left") {
                this.dest -= half_pista
            }
        }

        if (this.dest > this.x) {
            this.x += this.speed;
        }
        else if (this.dest < this.x) {
            this.x -= this.speed;
        }
    }

};

class Enemy extends Car{
    move(){
        this.y += 1;
    }
    draw(ctx){
        this.rotate(ctx);
        ctx.save();
        ctx.translate(this.x + this.width/2, this.y + this.height/2);
        ctx.rotate(this.rotation);
        ctx.drawImage(this.img,0,0,this.width,this.height,-this.width/3,-this.height/2,this.width,this.height);
        ctx.restore();
    }
}

