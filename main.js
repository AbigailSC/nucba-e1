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
    precio: 500
  }
]

const pizzasImpar = Pizzas.filter((pizza) => pizza.id % 2 !== 0)

/* Tengo entendido por la consigna que solo se esta pidiendo el primer resultado con esa condición, 
en caso contrario cambiar find por filter */

const pizzaMinValue = Pizzas.find((pizza) => pizza.precio < 600)

const pizzaFilterData = Pizzas.map((pizza) => {
  return {
    nombre: pizza.nombre,
    precio: pizza.precio
  }
})

console.log(`Las pizzas que tienen un id impar son las siguientes: ${pizzasImpar.map((pizza) => `${pizza.nombre} con el id ${pizza.id}`)}`)

console.log("----------------------------")

console.log(`La ${pizzaMinValue.nombre} tiene un valor de ${pizzaMinValue.precio}`)

console.log("----------------------------")

pizzaFilterData.map((pizza) => console.log(`La ${pizza.nombre} vale $${pizza.precio}`))

console.log("----------------------------")

for (let i = 0; i < Pizzas.length; i++) {
  console.log(`Ingredientes de la ${Pizzas[i].nombre}:`)
  for (let j = 0; j < Pizzas[i].ingredientes.length; j++) {
    console.log(`${[j + 1]}: ${Pizzas[i].ingredientes[j]}`)
  }
}
