class Computador{//criando classe
   tipo;
   processador;
   video;
   armazenamento;
   memoriaRam;
   ssd;
   constructor(tipo, processador, video, armazenamento, memoriaRam){
      this.tipo = tipo;
      this.processador = processador;
      this.video = video;
      this.armazenamento = armazenamento;
      this.memoriaRam = memoriaRam;
   }

   exibir(){
      console.log(`Esse computador é um ${this.tipo}, com o processador ${this.processador}, com uma placa de vídeo ${this.video}, um armazenamento de ${this.armazenamento}, uma memoria ram de ${this.memoriaRam} e ${this.ssd} tem SSD`)
   }
}

console.log('Cadastro de Computadores:')
let computadores = [];
let continuar = true;
let index = 0;

while(continuar){
let tipo = prompt('Qual o tipo do seu computador? (desktop ou notebook)');
let processador = prompt('Qual o seu processador?');
let video = prompt('Sua placa de video é dedicada ou integrada?');
let armazenamento = prompt('Qual o tamanho do armazenamento do seu computador?');
let memoriaRam = prompt('Qual o tamanho da sua memoria RAM?');

let computador = new Computador(tipo, processador, video, armazenamento, memoriaRam)//criando objeto

let ssd = prompt('Você tem ssd? (sim/nao)')
computador.ssd = ssd;

computadores[index] = computador;//guardando as informações do objeto no array

let continuare = prompt('deseja continuar? (s/n)');
if(continuare != 's'){
   continuar = false;
   continue;
}

index++;
}