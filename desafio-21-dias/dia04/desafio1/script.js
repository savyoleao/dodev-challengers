let fome = prompt('você está com fome?');
let dinheiro = prompt('você tem dinheiro?');
let restaurante = prompt('o restaurante está aberto?')

if(fome == 'nao' || dinheiro == 'nao'){
   console.log('Hoje a janta será em casa');

}else if(fome == 'sim' && dinheiro == 'sim'){
   if(restaurante == 'sim'){
      console.log('Hoje o jantar será no seu restaurante');
   }else{
      console.log('Seu restaurante está fechado, peça um delivery');
   };
};