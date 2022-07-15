class Carro {
    constructor(img, x, y) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.largura = 54;
        this.altura = 96;
        this.angulo = 0;
        this.velocidade = 1;
        this.dest = 0;
        this.width = 48;
        this.height = 122;
    }

    toJson() {
        return {
            x: this.x,
            y: this.y,
            angulo: this.angulo,
            velocidade: this.velocidade,
        }
    }
}

class Jogador extends Carro {
    update() {
        this.rotate();
        this.move();
    }

    move(direction = null) {
        if (this.dest == this.x) {
            half_pista = Math.round(this.screenWidth / 3);
            if (direction == "right") {
                this.dest += half_pista
            }
            else if (direction == "left") {
                this.dest -= half_pista
            }
        }
        else if (this.dest > this.x) {
            this.x += this.velocidade;
        }
        else if (this.dest < this.x) {
            this.x -= this.velocidade;
        }
    }

    anguloMaximo(n) {
        let max = Math.PI / 6;
        if (n > max) {
            return max;
        }
        if (n < -max) {
            return -max;
        }
        return n;
    }

    rotate_back() {
        min_max = 0.01
        if (this.angulo > min_max || this.angulo < -min_max) {
            this.angulo = this.angulo * 0.9;
        }
        else {
            this.angulo = 0;
        }
    }

    rotate() {
        if (this.dest > this.posX) {
            this.angulo += Math.PI / 180;
        } else if (this.dest < this.posX) {
            this.angulo -= Math.PI / 180;
        } else {
            this.rotate_back();
        }
        this.angulo = this.anguloMaximo(this.angulo);
    }
}


class Inimigo extends Carro {
}