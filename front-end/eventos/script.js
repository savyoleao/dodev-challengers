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

document.addEventListener('scroll', () => { //descer uma página (pop-ups)
   document.body.style.backgroundColor = "blue"
})

document.addEventListener('click', () => {
   document.body.style.backgroundColor = "white"
})

window.addEventListener('resize', () => { //mudar o tamanho da página
   console.log('mudou o tamanho')
})

const btn = document.querySelector('#mouseTeste');

btn.addEventListener('mouseup', () =>{//solta o clique do mouse
   btn.style.backgroundColor = "#F0F0F0"
})
btn.addEventListener('mousedown', () =>{//segura o clique do mouse
   btn.style.backgroundColor = "red"
})
btn.addEventListener('mouseover', () =>{//passa o mouse encima
   btn.style.backgroundColor = "yellow"
})