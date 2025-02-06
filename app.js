'use strict'

const disciplinas = [
    {nome :'PPDM', icon: 'insta.png', cor:'yellow'},
    {nome :'PRO' ,icon: 'tiktok.png', cor:'tomato'},
    {nome:'PWBE', icon:'web.png' ,cor:'blue'},
    {nome:'PWFE',icon: 'youtube.png',cor:"pink"}
]
const produtos = [
    {nome:'Camiseta Gorrilaz', camiseta:'gorillaz.png',  descrição: 'Banda Gorillaz'  , preço:'R$:100,00'},
    {nome:'Camiseta Nautiruts', camiseta:'nautiruts.png', descrição: 'Camiseta banda de reagge Nautiruts' , preço:'R$:150,00'},
    {nome:'Camiseta Kiss', camiseta:'kiss.png', preço:'R$:110,00'},
    {nome:'Camiseta Zeca Pagodinho', camiseta:'pagodinho.png', preço:'R$:300,00'},
    {nome:'Camiseta System of Down', camiseta:'system.png', preço:'R$:190,00'},
   
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


const cardsContainer = document.getElementById("cards-container");

produtos.forEach(produto => {
  const card = document.createElement("div")
  card.classList.add("card")

  const imagem = document.createElement("img")
  imagem.src = `./img/${produto.camiseta}`
  imagem.alt = produto.nome
  card.appendChild(imagem)

  const nome = document.createElement("h3")
  nome.textContent = produto.nome
  card.appendChild(nome)

  const descrição = document.createElement("p")
  descrição.textContent = produto.descrição
  card.appendChild(descrição)

  const preco = document.createElement("p")
  preco.textContent = produto.preço
  card.appendChild(preco)

  const tamanhos = document.createElement("div")
  tamanhos.classList.add("tamanhos")

  const tamanhosDisponiveis = ["P", "M", "G"]
  tamanhosDisponiveis.forEach(tamanho => {
    const botaoTamanho = document.createElement("button")
    botaoTamanho.textContent = tamanho
    tamanhos.appendChild(botaoTamanho)
  });

  card.appendChild(tamanhos)

  const botaoComprar = document.createElement("button")
  botaoComprar.classList.add("comprar")
  botaoComprar.textContent = "Add to Cart"
  card.appendChild(botaoComprar)

  cardsContainer.appendChild(card)
});