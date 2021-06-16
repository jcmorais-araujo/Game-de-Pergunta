const image = document.querySelector('img');
const input = document.querySelector('input');
const button = document.querySelector('button');
const pontuacaoContainer =
    document.querySelector('.pontuacao-container');
const pontuacao = document.querySelector('.pontuacao');
const nomeDeErrp = document.getElementById('nomeDoPersonagem');

/* Carregar a API */

const numeroMaximoDePersonagens = 671;
let points = 0;

let nomeDoPersonagem;

/* Gerar valor aleatório */

generateRandomNumber = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}


/* Pegar personagens */

getCharacter = () => {
    const id = generateRandomNumber();

    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        image.src = data.image;
        image.alt = 'Imagem do personagem: ' + data.name;
        nomeDoPersonagem = data.name;
    })
}

/* Lógica dos pontos */

handlePoints = (characterName, inpuValue) => {
    if (characterName == inpuValue) {
        points = points + 1;
    } else {
        nomeDeErrp.innerHTML = `Errou! O nome correto é:&ensp; ${characterName.toUpperCase()}`
    }
    pontuacao.innerHTML = points;
}

/* juntando tudo */
handleWithTheGame = () => {
    this.getCharacter()
    pontuacaoContainer.style.display = 'flex'
    button.innerHTML = 'Jogar'
    input.style.opacity = 1;
    nomeDoPersonagem = nomeDoPersonagem.toLowerCase();
    inputValue = input.value.toLowerCase();
    this.handlePoints(nomeDoPersonagem, inputValue);
}

/* ativar o game */

button.onclick = handleWithTheGame;