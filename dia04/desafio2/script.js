let nome = prompt('Qual seu nome?');
let idade = Number(prompt('qual é a sua idade?'));
let cnh = prompt('Você possui CNH?');
let carro = prompt('Você possui um carro?');

if(idade < 18 || cnh == 'nao'){
   console.log(`${nome}, você não pode dirigir!`);

}else if(carro == 'sim'){
   console.log(`${nome}, você será o motorista!`);
}else{
   console.log(`${nome}, você pode dirigir mas não tem carro!`);
};