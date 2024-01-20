class Carro{
   nome
   potencia
   velocidadeMaxima
   aceleracao

   constructor(nome, potencia, velocidadeMaxima, aceleracao){
      this.nome = nome
      this.potencia = potencia
      this.velocidadeMaxima = velocidadeMaxima
      this.aceleracao = aceleracao
   }

   tempo(distancia){
      distancia = Number(prompt('qual foi a distancia percorrida pelo carro em kilometros?'))

      console.log(`o Resultado do tempo em que a distancia de ${distancia}m foi percorrida foi de: ` + distancia / (this.velocidadeMaxima/ this.aceleracao))
   }
}

let carros = [];
let index = 0;
let continuar = true;

while(continuar){
   let nome = prompt('Qual a marca do carro?')
   let potencia = Number(prompt('Qual a potencia do carro'))
   let velocidadeMaxima = Number(prompt('Qual a velocidade maxima que esse caro pode alcancar?'))
   let aceleracao = Number(prompt('Qual a aceleracao do carro para ir de 0 a 100 km/h'))

   let carritos = new Carro(nome, potencia, velocidadeMaxima, aceleracao)

   carros[index] = carritos;

   let continuare = prompt('Deseja adicionar outro carro?')

   if(continuare != 's'){
      continuar = false
      continue;//volta para a condição sem verificar as linhas após esse if
   }

   index++
}