'use strict'

const disciplinas = [
    {nome :'PPDM', icon: 'insta.png', cor:'yellow'},
    {nome :'PRO' ,icon: 'tiktok.png', cor:'tomato'},
    {nome:'PWBE', icon:'web.png' ,cor:'blue'},
    {nome:'PWFE',icon: 'youtube.png',cor:"pink"}
]

function criarMenu(disciplina){
    const novoItem = document.createElement('li')
    const novaImagem = document.createElement('img')
    const novoSpan = document.createElement('span')
    const lista = document.getElementById('menu')

    novaImagem.src =`./img/${disciplina.icon}`
    novoSpan.textContent = disciplina.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoSpan)
    novoItem.style = `--cor-hover:${disciplina.cor}`

    lista.appendChild(novoItem)
}

disciplinas.forEach(criarMenu)