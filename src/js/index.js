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

const labelElement = document.getElementById('label');
const rangeElement = document.getElementById('range');
const buttonElement = document.getElementById('button');
const containerElement = document.getElementById('container');

const lengthValue = () => {
  labelElement.textContent = rangeElement.value;
};

const createHeadline = () => {
  const headline = document.createElement(`h${rangeElement.value}`);
  const itemText = `soy un h${rangeElement.value}`;
  headline.textContent = itemText;
  containerElement.appendChild(headline);
};

rangeElement.addEventListener('input', lengthValue);
buttonElement.addEventListener('click', createHeadline);
