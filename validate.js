const Pizzas = [
  {
    id: 1,
    nombre: "Pizza Napolitana",
    ingredientes:
      [
        "1 prepizza",
        "Salsa de tomate",
        "250 gr de Muzzarella",
        "Tomate en rodajas",
        "250 gramos de Mozzarella",
        "Queso provolone",
        "Ajo y perejil",
        "Orégano",
        "Aceituna"
      ],
    image: "https://recetinas.com/wp-content/uploads/2019/03/pizza-napolitana-receta.jpg",
    precio: 950
  },
  {
    id: 2,
    nombre: "Pizza Fugazza",
    ingredientes:
      [
        "1 prepizza",
        "2 Cebollas",
        "Aceite",
        "Sal",
        "Provolone",
        "Orégano",
        "Aceituna"
      ],
    image: "https://www.recetas-argentinas.com/base/stock/Recipe/14-image/14-image_web.jpg",
    precio: 830
  },
  {
    id: 3,
    nombre: "Pizza de Rúcula",
    ingredientes:
      [
        "1 Prepizza",
        "Salsa de tomate para pizza",
        "Muzzarella 250 g",
        "1 atado de Rucula",
        "Queso provolone",
        "Orégano",
        "Aceituna"
      ],
    image: "https://assets.unileversolutions.com/recipes-v2/214547.jpg",
    precio: 730
  },
  {
    id: 4,
    nombre: "Pizza de Jamón con huevo",
    ingredientes:
      [
        "1 prepizza",
        "Salsa de tomate para pizza",
        "250 gramos de Muzzarella",
        "Jamón",
        "2 Huevos duros",
        "Orégano",
        "Aceituna"
      ],
    image: "https://pizzasargentinas.com/wp-content/uploads/2020/10/Pizza-de-jamon-con-huevo.jpg",
    precio: 670
  },
  {
    id: 5,
    nombre: "Pizza de Ananá",
    ingredientes:
      [
        "1 prepizza",
        "Salsa de tomate para pizza",
        "Muzzarella",
        "Jamón cocido",
        "Orégano",
        "Aceituna de oliva",
        "Ananá"
      ],
    image: "https://margherita.com.ar/wp-content/uploads/2019/05/pespecialanana.jpg",
    precio: 800
  },
  {
    id: 6,
    nombre: "Pizza de Roquefort",
    ingredientes:
      [
        "1 prepizza",
        "Salsa de tomate",
        "250 gr de Muzzarella",
        "100-200 gr de queso Roquefort",
        "Orégano",
        "Aceituna de oliva"
      ],
    image: "https://img-global.cpcdn.com/recipes/d53d5968c0b16951/1200x630cq70/photo.jpg",
    precio: 720
  },
  {
    id: 7,
    nombre: "Pizza de Calabresa",
    ingredientes:
      [
        "1 prepizza",
        "Salsa de tomate",
        "250 gr de Muzzarella",
        "Rodajas de Calabresa",
        "Provenzal",
        "Orégano",
        "Aceituna de oliva"
      ],
    image: "https://ep00.epimg.net/elcomidista/imagenes/2013/09/05/receta/1378357200_137835_1378357200_noticia_normal.jpg",
    precio: 580
  },
  {
    id: 8,
    nombre: "Pizza de Jamón y Morrón",
    ingredientes:
      [
        "1 prepizza",
        "Salsa de tomate",
        "Jamón cocido",
        "250 gr de Muzzarella",
        "Morrones asados o en lata",
        "Orégano",
        "Aceituna de oliva"
      ],
    image: "https://locosxlaparrilla.com/wp-content/uploads/2015/02/Receta-recetas-locos-x-la-parrilla-locosxlaparrilla-Receta-pizza-pizza-receta-pizza-mozzarella-jamon-morrones-pizza-mozzarella-jamon-morrones-2.jpg",
    precio: 500
  }
]
const input = document.querySelector("#input")
const button = document.querySelector(".container__button")
const container = document.querySelector(".container__result")
const form = document.querySelector(".container__form")
const iconError = document.querySelector(".fa-circle-exclamation")

const createCard = (object) => {
  container.innerHTML = `<div class="card" id="${object.id}"><img src=${object.image} class="card__img" alt=${object.name}/><div class="card__header"><h3>${object.nombre}</h3><h4>$${object.precio}</h4></div></div>`
}

const addCard = (e) => {
  e.preventDefault();
  const valueInput = input.value;
  const resultValidation = validate()
  if (resultValidation === true) {
    const pizza = findPizza(valueInput)
    createCard(pizza)
    input.value = ""
  } else {
    container.innerHTML = ""
  }
}

const findPizza = (value) => {
  return Pizzas.find((pizza) => pizza.id === parseInt(value))
}

const init = () => {
  form.addEventListener("submit", addCard)
}

const showErrorMessage = (input, message) => {
  const formField = input.parentElement
  formField.classList.remove("success")
  formField.classList.add("error")
  iconError.classList.remove("hidden")
  const error = formField.querySelector("p")
  error.textContent = message
}

const showSuccess = (input) => {
  const formField = input.parentElement
  console.log(formField);
  iconError.classList.add("hidden")
  formField.classList.add("success")
  formField.classList.remove("error")
  const error = formField.querySelector("p")
  error.textContent = ""
}

const validate = () => {
  let valid = false
  const value = input.value
  if (value.length === 0) {
    showErrorMessage(input, `Debe ingresar un numero de id`)
    valid = false
  } else if (value < 1 || value > Pizzas.length + 1) {
    showErrorMessage(input, `El id no puede ser menor a 1 ni mayor a ${Pizzas.length + 1}`)
    valid = false
  } else {
    showSuccess(input)
    valid = true
  }
  return valid
}

init();