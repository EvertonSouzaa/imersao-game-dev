class Personagem extends Animacao {
    constructor(matriz, imagem, x , variacaoY, largura, altura, larguraSprite, alturaSprite) {
        super(matriz, imagem, x , variacaoY, largura, altura, larguraSprite, alturaSprite)
        this.variacaoY = variacaoY;
        this.yInicial = height - this.altura -30;
        this.y = this.yInicial;

        this.gravidade = 6;
        this.velocidadeDoPulo = 0;
        this.alturaDoPulo = - 50;
        this.pulos = 0;
        this.invencivel = false;
    }  
    
    pula() {
        if(this.pulos < 2) {
            this.velocidadeDoPulo = this.alturaDoPulo;  
            this.pulos++;
        }
        
    }

    aplicaGravidade() {
        this.y = this.y + this.velocidadeDoPulo;
        this.velocidadeDoPulo = this.velocidadeDoPulo + this.gravidade

        if(this.y > this.yInicial) {
            this.y = this.yInicial
            this.pulos = 0;
        }
    }
    

    ficaInvencivel() {
        this.invencivel = true;
        setTimeout(() =>{
            this.invencivel = false
        }, 1000)
    }
    estaColidindo(inimigo ) {
       if(this.invencivel) {
        return false
       }
        
        const precisao = .7
       const colisao = collideRectRect(
            this.x,
             this.y,
              this.largura * precisao,
               this.altura * precisao,
               inimigo.x + 20,
                inimigo.y + 8,
                inimigo.largura * precisao,
                inimigo.altura * precisao
                      );

                      

         return colisao ;       

         
    }
    
}
    
// Poligono de colisão do personagem
// O 'poligono de colisão base' representa o polígono quando o personagem está 
// na posição x=0, y=0 . Na função de cálculo da colisão nós iremos desloca-lo
// até a posição atual.
// Considera personagens com tamanho padrão do tutorial
// const baseCollisionPolygon = [
//     [30, 5],
//     [80, 5],
//     [110, 60],
//     [50, 130],
//     [10, 70]
// ]


// const baseCollisionPolygonInimigo = [
//     [5, 25],
//     [15, 10],
//     [52, 10],
//     [52, 47],
//     [15, 47]
// ]

// const baseCollisionPolygonInimigoGrande = [
//     [20, 80],
//     [80, 105],
//     [120, 20],
//     [195, 130],
//     [150, 170],
//     [20, 140]
// ]

// const baseCollisionPolygonInimigoVoador = [
//     [15, 20],
//     [90, 15],
//     [90, 70],
//     [15, 60]
// ]

// // Setar true no inicio para ver os polígonos na tela
// window.DEBUG_COLLISION = true 

/////////////////////////////////////////////////////////////////////
// este é o corpo da função estaColidindo(inimigo) :

// desloca o poligono base do personagem e do inimigo para suas posiçõs atuais
// é preciso também modificar a classe do Inimigo, para ter um
// this.baseCollisionPolygon com o seu respectivo polígono base
// const myCollisionPolygon = this.baseCollisionPolygon.map(v => createVector(v[0] + this.x, v[1] + this.y))
// const theirCollisionPolygon = inimigo.baseCollisionPolygon.map(v => createVector(v[0] + inimigo.x, v[1] + inimigo.y))

// if (window.DEBUG_COLLISION) {
//     collideDebug(true)
//     noFill()

//     stroke(0, 0, 255)
//     beginShape()
//     myCollisionPolygon.forEach(v => vertex(v.x, v.y))
//     endShape(CLOSE);

//     stroke(255, 0, 0)
//     beginShape()
//     theirCollisionPolygon.forEach(v => vertex(v.x, v.y))
//     endShape(CLOSE);
// }

// const collide = collidePolyPoly(myCollisionPolygon, theirCollisionPolygon)