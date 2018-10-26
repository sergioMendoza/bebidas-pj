/* eslint linebreak-style: ["error", "windows"] */
/** **********************************DOM******************************************** */


const containerBebidas = document.getElementById('bebidas');


const incrementTotal = (idNumberBox) => {
  let number = document.querySelector(`#${idNumberBox}`).textContent;
  number = parseInt(number, 10) + 1; // valor del número central
  document.querySelector(`#${idNumberBox}`).innerText = number;
};

const decrementTotal = (idNumberBox) => {
  let numberCountPizza = document.querySelector(`#${idNumberBox}`).textContent;
  numberCountPizza = parseInt(numberCountPizza, 10) - 1;
  if (numberCountPizza >= 0) {
    document.querySelector(`#${idNumberBox}`).innerText = numberCountPizza;
  }
};
const activeButtonIncrement = (element, idNumber) => {
  const number = element.parentElement.previousElementSibling;
  const btnDecrement = number.previousElementSibling.children[0].id;
  const btnIncrement = element.id;
  if (document.querySelector(`#${idNumber}`).textContent > 0) {
    document.querySelector(`#${btnDecrement}`).classList.add('btn-active');
    document.querySelector(`#${btnIncrement}`).classList.add('btn-active');
  }
};

const desactiveButtonIncrement = (element, idNumber) => {
  const number = element.parentElement.nextElementSibling;
  const btnIncrement = number.nextElementSibling.children[0].id;
  const btnDecrement = element.id;
  if (document.querySelector(`#${idNumber}`).textContent === '0') {
    document.querySelector(`#${btnIncrement}`).classList.remove('btn-active');
    document.querySelector(`#${btnDecrement}`).classList.remove('btn-active');
  }
};


// Execute

// Events

document.addEventListener('click', (event) => {
  const arrayELements = event.path;
  for (let i = 0; i < arrayELements.length; i += 1) {
    if (arrayELements[i].localName === 'button') {
      if (arrayELements[i].classList[0] === 'increment') {
        const idNumber = arrayELements[i].parentElement.previousElementSibling.id;
        incrementTotal(idNumber);
        activeButtonIncrement(arrayELements[i], idNumber);
      }
      if (arrayELements[i].classList[0] === 'decrement') {
        const idNumber = arrayELements[i].parentElement.nextElementSibling.id;
        decrementTotal(idNumber);
        desactiveButtonIncrement(arrayELements[i], idNumber);
      }
    }
  }
});

// Función que inserta los valores con el estilo determinado de acuerdo a la cantidad de palabras que tenga la descripción
const templateProducts = (element, container) => {
  const boxContainer = container;
  let templateSelect = '';
  let heightDescription = '';
  if (element.description.split(' ').length <= 6) {
    heightDescription = 'heightDescription--1';
  } else if (element.description.split(' ').length > 6 && element.description.split(' ').length <= 10) {
    heightDescription = 'heightDescription--2';
  } else if (element.description.split(' ').length > 10 && element.description.split(' ').length <= 15) {
    heightDescription = 'heightDescription--3';
  } else {
    heightDescription = 'heightDescription--4';
  }

  const template = `<div class="col-6 pt-2 mb-3">
<div class="mb-2">
  <p class="mb-0 adicional__name text-center">${element.name}</p>
  <div class="">
    <img class="img-fluid" src=${element.image}>
  </div>
  <p class="text-center mb-0 adicional__name">S/${element.price}</p>
  <div  class="${heightDescription}">
    <p class="text-center mb-3">${element.description} </p>
  </div>
 
  <div class="template-select text-center p-1">
    ${templateSelect}
  </div>
  <div class="row">
    <div class="col-4 offset-1 text-right">
      <button class=" decrement adicional__button"  id="${element.id}decrement">
        <i class="fas fa-minus"></i>
      </button>
    </div>
    <div class="col-2 text-center adicional__number-span" id=${element.id}>0</div>
    <div class="col-4">
      <button class="increment adicional__button"  id="${element.id}aument">
        <i class="fas fa-plus"></i>
      </button>
    </div>
  </div>
  

</div>
</div>`;
  boxContainer.innerHTML += template;
};



const { bebidas } = data.products;


bebidas.forEach((element) => {
  templateProducts(element, containerBebidas);
});



