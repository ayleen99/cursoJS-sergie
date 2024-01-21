//FUNCIONES 
function suma(x, y) { //nombre, parametro 
    return x + y //lo que devuelve 
}

let respuesta = suma(5,6)
console.log(respuesta)

//si le agrego 
let a = 5 
let b = 6 

console.log(`La resouesta de ${a} + ${b} es igual a: `, respuesta)
//este console.log arroja como respuesta "la despuesta de 5 y 6 es igual a: 11 ". a Y b EN ESTE CASO SE CONVIERTEN EN STRINGS AL ESTAR DENTRO DE LOS BACKSTICKS 

//HAY FUNCIONES QUE NO DEVULEVEN NADA
function resta(x, y) {
    console.log(x-y)
}

const temperatura = 76

function transformarACelcius(farenheith) {
    return (farenheith - 32) * (5/9)
}

const respuesta2 = transformarACelcius(temperatura)

console.log(`La temperatura en grados Celcius es de `, parseInt(respuesta2))