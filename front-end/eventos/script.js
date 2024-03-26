//eventos
const button = document.querySelector('#submit'); //DOM
button.addEventListener('submit', (event)=>{ //evento do tipo submit
   event.preventDefault(); //prevenir o vento padrão do submit (atualizar a pagina depois que clica)
   alert('recebi o evento');
   console.log(event);
})

const input = document.querySelector('#emailtype');
input.addEventListener('focus', () => { //evento de foco no elemento input
   console.log('focou no elemento')
})

input.addEventListener('blur', () => { //evento de desfocar no elemento input (validação de email)
   console.log('desfocou o elemento')
})