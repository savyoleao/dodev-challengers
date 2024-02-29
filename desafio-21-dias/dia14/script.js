solicitarInformacoes()

function solicitarInformacoes(){
   let nome = prompt('Insira o seu nome');
   let salario = Number(prompt('Insira aqui o seu salário'))
   aumentoSalarial(nome, salario);
}

function aumentoSalarial(nome, salario){
   let aumento = 0;

   if(salario <= 1500){
      aumento = 1.2;
   }else if(salario <= 2000){
      aumento = 1.15;
   }else if(salario <= 3000){
      aumento = 1.1;
   }else{
      aumento = 1.05;
   }

   let salarioNovo = salario * aumento;
   
   console.log(`Olá ${nome}, seu salário é de ${salario}, e teve um aumento de ${(aumento.toFixed(2) - 1) * 100}%, portanto, seu salário reajustado é de ${salarioNovo}`)
   perguntarNovamente()
}

function perguntarNovamente(){
   let reiniciar = prompt('Deseja calcular novamente? (s/n)')

   if(reiniciar =='n'){
      console.log('Tenha um bom dia');
   }else{
      solicitarInformacoes()
   }
}
