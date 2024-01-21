//OPERADORES LOICOS
let x = 5
let y = 5

let z = x == y //el == PREGUNTA si 'x' es igual a 'y'
console.log(x)

let a = 5
let b = '5'

let c = a == b // 'b' en este caso es un STRING pero el == no reconoce que es un string por lo que arroja TRUE
console.log(c)

let d= 5
let e = '5'

let f = d === e // 'e' en este caso es un STRING pero === si reconoce que es un STRING por lo que arroja false   
console.log(f)

let g = 5
let h = '5'  // != es la negacion de algo, este operador pregunta si son distintos 

let i = g != h 
console.log(i)

let j = 5
let k = 5  

let l = j > k //este '>' pregunta si 'j' es mayor que 'k'. '<' este pregunta si 'j' es menor que 'k' y el resultado es TRUE O FALSE 
console.log(l)// TAMBIEN ESTAN LOS '>=' MAYOR O IGUAL O '<=' MENOR O IGUAL Y EL RESULTADO ARROJA TRUE O FALSE

let m = 5
let n = 9
let ñ = 5  

let o = m < n && n > ñ  // este '&&' tiene la condicion de que si las dos son verdaderas, osea m < n y n > ñ es TRUE y uns de las dos condiciones no se cumple es FALSE 

console.log(o)

let p = 5
let q = 9
let r = 5  

let s = p < q || q > r  // este '||' tiene la condicion de que una de las dos se cumpla para que sea VERDADERO

console.log(s)

/*
CONJUNCION   |   DISYUNCION   |  NEGACION
   "&&"      |      "||"      |    "!="
p | q | p^q  |   p | q | p^q  |   p | ~p   
V | V |  V   |   V | V |  V   |   V | F
V | F |  F   |   V | F |  V   |   F | V
F | V |  F   |   F | V |  V   |
F | F |  F   |   F | F |  F   |
*/
