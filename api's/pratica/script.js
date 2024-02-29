//Consumo do combustível por km rodado

function consumo(distancia, tipo){

   if(distancia >= 0){
      if(tipo == 'gasolina'){
         return distancia / 16
      }
      if(tipo == 'etanol'){
         return distancia/ 11
      }
   }
   return null
};

module.exports = {consumo};