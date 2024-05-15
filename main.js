//Ejercicios destructuring
const empleados = [
    { name: "Luis", email: "Luis@gmail.com" },
    { name: "Ana", email: "Ana@gmail.com" },
    { name: "Andrea", email: "Andrea@gmail.com" },
  ];

//Extrae la empleada Ana
const ana=findByName("Ana")
console.log(ana);

//Extrae el email del empleado Luis 
const emailLuis=getEmail("Luis")
console.log(emailLuis)

function findByName(userName){
    const { name, email } = empleados.find(empleado => empleado.name === userName)
    return { name, email }
}
function getEmail(userName){
    const user=findByName(userName)
    return user.email
}

const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
        "primary": "Overgrow",
        "hidden": "Chlorophyll"
    },
    stats: {
        hp: 45,
        attack: 49,
        deffense: 59,
        speed: 45
    },
    moves: [
        "Growl", "Tackle", "Vine Whip", "Razor Leaf"
    ]
}

//Cambia el nombre de la propiedad “name” por “nombre"
const { name: nombre, ...resto } = pokemon;
const pokemonRenamedAttribute = { nombre, ...resto };
console.log(pokemonRenamedAttribute);

//Extrae el nombre del Pokemon
const pokemonName= pokemon.name
console.log(pokemonName)
//Extrae el tipo de Pokemon que es
const pokemonType=pokemon.type
console.log(pokemonType)

//Extrae el movimiento “Tackle”
const pokemonMovesTackle=pokemon.moves[1]
console.log(pokemonMovesTackle)


//Ejercicios spread/rest

//Mergea el siguiente pokémon con el Pokemon del ejercicio anterior
const pikachu = {
    name: "Pikachu",
    type: "electric",
    ability: {
        "primary": "Static",
        "hidden": "Lightning rod"
    },
    stats: {
        hp: 35,
        attack: 55,
        deffense: 40,
        speed: 90
    },
    moves: [
        "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
    ],
}

const mergeObjets = { ...pokemon, ...pikachu }
console.log(mergeObjets)

//Escribe una función llamada sumEveryOther que pueda recibir cualquier cantidad de números y devuelva la suma de todos los demás argumentos.
console.log(sumEveryOther(6, 8, 2, 3, 1)) //20
console.log(sumEveryOther(11, 3, 12)) //26

function sumEveryOther(...arrayNumbers){
    let sum=0
    for (let i=0; i<arrayNumbers.length;i++){
        sum+=arrayNumbers[i]
    }
    return sum
}

//Escribe una función llamada addOnlyNums que pueda recibir cualquier número de argumentos (incluyendo números y strings y retorne la suma solo de los números.
console.log(addOnlyNums(1, 'perro', 2, 4)) //7

function addOnlyNums(...arrayData){
    let sum=0
    for (let i=0; i<arrayData.length;i++){
        if(typeof arrayData[i] === "number"){
            sum+=arrayData[i]
        }
    }
    return sum
}

//Escribe una función llamada countTheArgs que pueda recibir cualquier número de argumentos y devuelva un número que indique cuántos argumentos ha recibido.
console.log(countTheArgs('gato', 'perro')) //2
console.log(countTheArgs('gato', 'perro', 'pollo', 'oso')) //4

function countTheArgs(...arrayData){
    return arrayData.length
}

//Escribe una función llamada combineTwoArrays que reciba dos array cómo argumentos y devuelva solo un array que combine los dos (usando spread operator).
const a=[4,2,5,2]
const b=[7656543]
console.log(combineTwoArrays(a,b))

function combineTwoArrays(array1,array2){
return [...array1, ...array2]
}