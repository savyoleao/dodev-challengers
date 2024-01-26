//Cadastro de pessoas
let nome = [];
let senha = []

function solicitarOpcao(){
   let opcao = prompt('Qual opcao deseja realizar? 1: cadastro, 2: login, 3: excluir cadastro, 4: encerrar o programa')
   
   return opcao;
}

function realizarCadastro(){
   nome.push(prompt('Digite seu nome:'))
   senha.push(prompt('Insira sua senha: '))
   console.log('Cadastro realizado com sucesso!')
}

function realizarLogin(nomes, senhas){
   let index = nome.indexOF(nomes)
   if(index !== -1 && senha[index] == senhas){
      return true
   }else{
      return false
   }
}

function excluirCadastro(nomes){
   let index = nome.indexOf(nomes);
   if(index !== -1 ){
      nome.splice(index, 1)
      senha.splice(index, 1)
      console.log('Cadastro excluido com sucesso')
   }else{
      console.log('usuario nao encontrado')
   }
}

let condicao = true
while(condicao){
   let opcao = solicitarOpcao();

   switch(opcao){
      case '1':
         realizarCadastro();
         break;
      case '2':
         let nome = prompt('Insira seu nome: ')
         let senha = prompt('Insira sua senha: ')
         realizarLogin(nome, senha);
         break;
      case '3':
         let nomeExcluir = prompt('qual o seu nome?')
         excluirCadastro(nomeExcluir)
         break;
      case '4':
         console.log('Programa encerrado!')
         condicao = false;
         break;
      default:
         console.log('Opção inválida. Tente novamente')
   }
}
