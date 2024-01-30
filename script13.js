//MATH
Math.E                     //devuelve el numero de euler
Math.PI                    //devuelve el numero PI
Math.SQRT2                 //devuelve la raiz cuadrada de 2
Math.SQRT1_2               //devuelve la raiz cuadrada de 1/2
Math.LN2                   //devuelve el logaritmo natural de 2
Math.LN10                  //devuelve el logaritmo natural de 10
Math.LOG2E                 //devuelve el logaritmo de E en base 2
Math.LOG10E                //devyelve el logaritmo de E en base 10

//forma de redondear
const numero = 2.2
const redondeo = Math.round(numero)
console.log(redondeo)
//de esta manera redondea hacia abajo y elr esultado es 2 
const numero1 = 2.5
const redondeo1 = Math.round(numero1)
console.log(redondeo1)
//de esta manera redondea hacia arriba y el esultado es 3, a partir de 2.5, si es 2.49 es para abajo y es 2 

//manera de redondear hacia arriba siempre no importa cual sea la coma con CEIL
const numero2 = 2.5
const redondeo2 = Math.ceil(numero2)
console.log(redondeo2)

//manera de redondear hacia abajo siempre no importa cual sea la coma con FLOOR
const numero3 = 2.5
const redondeo3 = Math.floor(numero3)
console.log(redondeo3)

//trunc le quita el decimal y lo convierte en entero
const numero4 = 2.5
const redondeo4 = Math.trunc(numero4)
console.log(redondeo4)

//Math.random
console.log(Math.random())
//esto da como resultado un numero con decimales conmenzando con 0, siempre son diferentes

//para que den numeros mayores a 0
console.log(Math.random()*100)
//hay que multiplicarlo x 100 y esto da como resultado un numero mayor a 0 pero con decimales

//para que de sin decimales
let numero5 = Math.random()*100
let redondeo5 = Math.trunc(numero5)
console.log(redondeo5)

