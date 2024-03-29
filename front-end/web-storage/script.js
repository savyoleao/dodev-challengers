function save(text){
   window.sessionStorage.setItem('nome', text)//salvar informações para não perde-las se atualizar a page (id, value)
};

const input = document.querySelector('#nameText')
input.addEventListener('blur', (event) => {
   save(event.target.value)
}); //ao desfocar do input ele salva o texto do mesmo

//existe tambem o localstorage que salva as informações mesmo se a página for fechada

//MÉTODOS (vale para localstorage e sessionstorage)
window.localStorage.setItem('key', 'value') //armazena o valor
window.sessionStorage.getItem('key') //busca o valor
window.sessionStorage.removeItem('key')// remove um valor
window.localStorage.clear()//limpa tudo
//save storage