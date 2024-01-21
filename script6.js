//TIPOS DE DATOS 

//NUMBER
let a = 5 // valor entero
let b = 5.5 // valor flotante

//STRING
let c = 'cadena de texto' //valor string(texto)

//BOOBLEANO
let d = true // VERDADERO
let e = false // FALSE 

//UNDEFINED
let f // no se asigno valor por lo cual es indefinido

//NULL 
let g = null

//OBJECT
let objeto = { //valor objeto
clave: valor 
}
 
//ARRAY
let array = [1,2,3,4,5,6] //arreglos o listas de numeros 
let array2 = ['HTML', 'CSS', 'JS'] //arreglos o listas de palabras 

//DATE
const date = new Date("14/05/2020")
console.log(date)

//CASO ESPECIAL
let h = 5 //este es un number
let i = '5' // este es un string 

let j = h + i //esto daria un numero cualquiera ya que 'i' es un string

/* para convertir un string a numero se puede colocar de la siguiente manera:
let j = h + parseInt(i)
Y SI i FUERA UN NUMERO DECIMAL:
let j = h +parseFloat(i) */