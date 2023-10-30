document.addEventListener('DOMContentLoaded', () => {

  // DOM objects
  const result = document.getElementById('result');
  const restart = document.getElementById('restart');
  const board = document.querySelector('.board');
  
  // Game objects
  let cardsSelected = [];
  let cardsCheck = [];
  const cards = [
    {
      name: 'html',
      src: 'img/html.svg'
    },
    {
      name: 'java',
      src: 'img/java.svg'
    },
    {
      name: 'js',
      src: 'img/js.svg'
    },
    {
      name: 'css',
      src: 'img/css.svg'
    },
    {
      name: 'node',
      src: 'img/nodejs.svg'
    },
    {
      name: 'git',
      src: 'img/git.svg'
    },
    {
      name: 'github',
      src: 'img/github.svg'
    },
    {
      name: 'vscode',
      src: 'img/vscode.svg'
    },
    {
      name: 'python',
      src: 'img/python.svg'
    },
    {
      name: 'mysql',
      src: 'img/mysql.svg'
    },
    {
      name: 'html',
      src: 'img/html.svg'
    },
    {
      name: 'java',
      src: 'img/java.svg'
    },
    {
      name: 'js',
      src: 'img/js.svg'
    },
    {
      name: 'css',
      src: 'img/css.svg'
    },
    {
      name: 'node',
      src: 'img/nodejs.svg'
    },
    {
      name: 'git',
      src: 'img/git.svg'
    },
    {
      name: 'github',
      src: 'img/github.svg'
    },
    {
      name: 'vscode',
      src: 'img/vscode.svg'
    },
    {
      name: 'python',
      src: 'img/python.svg'
    },
    {
      name: 'mysql',
      src: 'img/mysql.svg'
    }
  ];

  function start() {
    cardsSelected = [];
    cardsCheck = [];

    result.textContent = `Pares encontrados: ${cardsCheck.length}`;
    cards.sort(() => 0.5 - Math.random());

    resetBoard();
    createBoard();
  }

  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img');
      card.setAttribute('src', 'img/brain.svg');
      card.setAttribute('card-id', i);
      card.addEventListener('click', flipCard);
      board.appendChild(card);
    }
  }

  function resetBoard() {
    board.innerHTML = '';
  }

  function flipCard() {
    const cardId = this.getAttribute('card-id');

    cardsSelected.push({
      name: cards[cardId].name, 
      id: cardId
    });

    this.setAttribute('src', cards[cardId].src);

    if(cardsSelected.length === 2) {
      setTimeout(checkMatch, 200);
    }
  }

  function checkMatch() {
    const cards = document.querySelectorAll('img');
    const optionOne = cardsSelected[0];
    const optionTwo = cardsSelected[1];

    if(optionOne.id == optionTwo.id) { // mesmo cartão
      cards[optionOne.id].setAttribute('src', 'img/brain.svg');
      cards[optionTwo.id].setAttribute('src', 'img/brain.svg');
      alert('Selecione cartões diferentes');
    }else if(optionOne.name == optionTwo.name) { // cartões com a mesma imagem
      cards[optionOne.id].style = 'border: 2px solid #51ff00';
      cards[optionTwo.id].style = 'border: 2px solid #51ff00';
      cards[optionOne.id].removeEventListener('click', flipCard);
      cards[optionTwo.id].removeEventListener('click', flipCard);
      cardsCheck.push(cardsSelected);
    }else { // errou
      setTimeout(() => {
        cards[optionOne.id].setAttribute('src', 'img/brain.svg');
        cards[optionTwo.id].setAttribute('src', 'img/brain.svg');
      }, 200);
    }

    cardsSelected = [];

    result.textContent = `Pares encontrados: ${cardsCheck.length}`;

    if(cardsCheck.length == cards.length/2) {
      result.textContent = 'Parabéns! Você venceu!';
    }
  }

  start();
  restart.addEventListener('click', start);
});