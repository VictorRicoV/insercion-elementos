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

const divContainer = document.createElement('div');
const buttonRed = document.createElement('button');
const buttonGreen = document.createElement('button');

divContainer.id = 'buttons-container';
buttonRed.id = 'button-red';
buttonGreen.id = 'button-green';
buttonRed.textContent = 'Red';
buttonGreen.textContent = 'Green';
divContainer.append(buttonRed, buttonGreen);
document.body.append(divContainer);

const buttonsContainer = document.getElementById('buttons-container');
const buttonRedElement = document.getElementById('button-red');
const buttonGreenElement = document.getElementById('button-green');

const backgroundGreen = () => {
  buttonsContainer.classList.remove('container-red');
  buttonsContainer.classList.add('container-green');
};
const backgroundRed = () => {
  buttonsContainer.classList.remove('container-green');
  buttonsContainer.classList.add('container-red');
};

buttonGreenElement.addEventListener('click', backgroundGreen);
buttonRedElement.addEventListener('click', backgroundRed);

const createNumbers = () => {
  const numbers = [];
  for (let i = 0; i < 25; i++) {
    const randomNumber = Math.floor(Math.random() * 26);
    numbers.push(randomNumber);
  }
  return numbers;
};

const createLists = numbers => {
  const fragment = document.createDocumentFragment();

  const evenList = document.createElement('ul');
  const oddList = document.createElement('ul');

  numbers.forEach(number => {
    const listItem = document.createElement('li');
    listItem.textContent = number;
    if (number % 2 === 0) {
      evenList.appendChild(listItem);
    } else {
      oddList.appendChild(listItem);
    }
  });
  const evenTitle = document.createElement('h3');
  evenTitle.textContent = 'Números pares';
  const oddTitle = document.createElement('h3');
  oddTitle.textContent = 'Números impares';

  fragment.appendChild(evenTitle);
  fragment.appendChild(evenList);
  fragment.appendChild(oddTitle);
  fragment.appendChild(oddList);

  document.body.appendChild(fragment);
};

createLists(createNumbers());
