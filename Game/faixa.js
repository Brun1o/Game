class Faixa{
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.largura = 54;
        this.altura = 96;
        this.faixa = [];
    }
    adicionarNaFaixa(Obj) {
        this.faixa.push(Obj);
    }
    removerDaFaixa(Obj) {
        this.faixa.splice(this.faixa.indexOf(Obj), 1);
    }
    desenharItemsDaFaixa(ctx) {
        this.faixa.forEach(item => {
            item.update();
            ctx.save();
            ctx.translate(item.x + item.largura/2, item.y + item.altura/2);
            ctx.rotate(item.angulo);
            ctx.drawImage(item.img,0,0,item.largura,item.altura,-item.largura/3,-item.altura/2,item.largura,item.altura);
            ctx.restore();
        });
    }
}