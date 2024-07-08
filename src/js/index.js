// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

// const buttonElement = document.getElementById('button');
// const ulElement = document.getElementById('ul');

// const itemAddition = () => {
//   const item = document.createElement('li');
//   item.textContent = `item ${ulElement.childElementCount + 1}`;
//   ulElement.append(item);
// };

// buttonElement.addEventListener('click', itemAddition);

//- Usando el input range que te doy haz un generador de encabezados. El input te permite seleccionar un número del 1 al 6, en función de cual elijas ser generará un encabezado con la etiqueta correspondiente. Si elijes un 3, al hacer click en el botón se generará un h3 con el texto "soy un h3", si elijes un 5 un h5 con el texto "soy un h5" y así para todos.

// const labelElement = document.getElementById('label');
// const rangeElement = document.getElementById('range');
// const buttonElement = document.getElementById('button');
// const containerElement = document.getElementById('container');

// const lengthValue = () => {
//   labelElement.textContent = rangeElement.value;
// };

// const createHeadline = () => {
//   const headline = document.createElement(`h${rangeElement.value}`);
//   const itemText = `soy un h${rangeElement.value}`;
//   headline.textContent = itemText;
//   containerElement.appendChild(headline);
// };

// rangeElement.addEventListener('input', lengthValue);
// buttonElement.addEventListener('click', createHeadline);

// const divContainer = document.createElement('div');
// const buttonRed = document.createElement('button');
// const buttonGreen = document.createElement('button');

// divContainer.id = 'buttons-container';
// buttonRed.id = 'button-red';
// buttonGreen.id = 'button-green';
// buttonRed.textContent = 'Red';
// buttonGreen.textContent = 'Green';
// divContainer.append(buttonRed, buttonGreen);
// document.body.append(divContainer);

// const buttonsContainer = document.getElementById('buttons-container');
// const buttonRedElement = document.getElementById('button-red');
// const buttonGreenElement = document.getElementById('button-green');

// const backgroundGreen = () => {
//   buttonsContainer.classList.remove('container-red');
//   buttonsContainer.classList.add('container-green');
// };
// const backgroundRed = () => {
//   buttonsContainer.classList.remove('container-green');
//   buttonsContainer.classList.add('container-red');
// };

// buttonGreenElement.addEventListener('click', backgroundGreen);
// buttonRedElement.addEventListener('click', backgroundRed);

// const createNumbers = () => {
//   const numbers = [];
//   for (let i = 0; i < 25; i++) {
//     const randomNumber = Math.floor(Math.random() * 26);
//     numbers.push(randomNumber);
//   }
//   return numbers;
// };

// const createLists = numbers => {
//   const fragment = document.createDocumentFragment();

//   const evenList = document.createElement('ul');
//   const oddList = document.createElement('ul');

//   numbers.forEach(number => {
//     const listItem = document.createElement('li');
//     listItem.textContent = number;
//     if (number % 2 === 0) {
//       evenList.appendChild(listItem);
//     } else {
//       oddList.appendChild(listItem);
//     }
//   });
//   const evenTitle = document.createElement('h3');
//   evenTitle.textContent = 'Números pares';
//   const oddTitle = document.createElement('h3');
//   oddTitle.textContent = 'Números impares';

//   fragment.appendChild(evenTitle);
//   fragment.appendChild(evenList);
//   fragment.appendChild(oddTitle);
//   fragment.appendChild(oddList);

//   document.body.appendChild(fragment);
// };

// createLists(createNumbers());

// const formElement = document.getElementById('post-form');
// const postElement = document.getElementById('posts-container');
// const buttonElement = document.getElementById('button');

// const postForm = () => {
//   const title = document.getElementById('title').value;
//   const author = document.getElementById('author').value;
//   const message = document.getElementById('message').value;

//   const newDiv = document.createElement('div');

//   const postTitle = document.createElement('h2');
//   postTitle.textContent = title;

//   const postAuthor = document.createElement('span');
//   postAuthor.textContent = `Author: ${author}`;

//   const postMessage = document.createElement('p');
//   postMessage.textContent = message;

//   newDiv.append(postTitle);
//   newDiv.append(postAuthor);
//   newDiv.append(postMessage);

//   postElement.append(newDiv);
//   formElement.reset();
// };

// buttonElement.addEventListener('click', postForm);

// const inputElement = document.getElementById('text-input');
// const charactersElement = document.getElementById('characters');
// const vowelElement = document.getElementById('vowels');
// const consonantElement = document.getElementById('consonants');
// const spaceElement = document.getElementById('spaces');

// const counterVowels = text => {
//   const allVowels = 'aeiouAEIOU';
//   let counter = 0;
//   for (let vowel of text) {
//     if (allVowels.includes(vowel)) {
//       counter++;
//     }
//   }
//   return counter;
// };

// const counterConsonant = text => {
//   const allConsonants = 'bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ';
//   let counter = 0;
//   for (let consonant of text) {
//     if (allConsonants.includes(consonant)) {
//       counter++;
//     }
//   }
//   return counter;
// };

// const counterSpaces = text => {
//   let counter = 0;
//   for (let space of text) {
//     if (space === ' ') {
//       counter++;
//     }
//   }
//   return counter;
// };

// const updateInput = () => {
//   const text = inputElement.value;
//   const characters = text.length;
//   const vowels = counterVowels(text);
//   const consonant = counterConsonant(text);
//   const space = counterSpaces(text);

//   charactersElement.textContent = `El texto tiene ${characters} caracteres`;
//   vowelElement.textContent = `El texto tiene ${vowels} vocales`;
//   consonantElement.textContent = `El texto tiene ${consonant} consonantes`;
//   spaceElement.textContent = `El texto tiene ${space} espacios`;
// };

// inputElement.addEventListener('input', updateInput);

// const numberInput = document.getElementById('number-input');
// const printTableButton = document.getElementById('print-table');
// const multiplicationTable = document.getElementById('multiplication-table');

// const printTable = () => {
//   for (let i = 0; i <= 10; i++) {
//     const list = document.createElement('li');
//     list.textContent = `${numberInput.value} x ${i} = ${numberInput.value * i}`;
//     multiplicationTable.append(list);
//   }
// };

// printTableButton.addEventListener('click', printTable);

// - Con este objeto debes crear tarjetas de usuario que muestren todos los datos, el diseño es libre, lo importante es que muestren toda la información del usuario y la imagen de perfil. Crea una función que genere todas las tarjetas de usuario y las inserte en el DOM

const user = [
  {
    name: 'Josep Flores',
    age: 77,
    username: 'Josep85',
    email: 'Josep_Flores@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/women/24.jpg'
  },
  {
    name: 'Ricardo Rosas',
    age: 43,
    username: 'Ricardo_Rosas',
    email: 'Ricardo_Rosas22@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/57.jpg'
  },
  {
    name: 'Iván Tamayo',
    age: 40,
    username: 'tamayo87',
    email: 'Ivan_Tamayo61@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/9.jpg',
    job: 'Lead Communications Designer'
  },
  {
    name: 'Maica Villanueva',
    age: 64,
    username: 'Maica.Villanueva18',
    email: 'Maica.Villanueva1@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    name: 'Pedro Estrada',
    age: 77,
    username: 'Pedro29',
    email: 'Pedro_Estrada22@hotmail.com',
    profileImage: 'https://randomuser.me/api/portraits/men/2.jpg',
    job: 'Central Directives Liaison'
  },
  {
    name: 'Jorge Cedillo',
    age: 33,
    username: 'Jorge_Cedillo',
    email: 'Jorge.Cedillo2@yahoo.com',
    profileImage: 'https://randomuser.me/api/portraits/men/88.jpg'
  }
];

function generateUserCards(users) {
  const container = document.getElementById('user-cards-container');

  const fragment = document.createDocumentFragment();
  users.forEach(user => {
    const card = document.createElement('div');
    card.classList.add('user-card');

    const img = document.createElement('img');
    img.className = 'img-card';
    img.src = user.profileImage;

    const userInfo = document.createElement('div');
    userInfo.classList.add('user-info');

    const name = document.createElement('h2');
    name.classList.add('card-title');
    name.textContent = user.name;

    const username = document.createElement('p');
    username.classList.add('card-text');
    username.textContent = `Username: ${user.username}`;

    const age = document.createElement('p');
    age.classList.add('card-text');
    age.textContent = `Age: ${user.age}`;

    const email = document.createElement('p');
    email.classList.add('card-text');
    email.textContent = `Email: ${user.email}`;

    userInfo.append(name, username, age, email);

    if (user.job) {
      const job = document.createElement('p');
      job.classList.add('card-text');
      job.textContent = `Job: ${user.job}`;
      userInfo.append(job);
    }

    card.append(img, userInfo);
    fragment.append(card);
  });
  container.append(fragment);
}

generateUserCards(user);
