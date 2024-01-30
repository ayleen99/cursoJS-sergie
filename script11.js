
//ARRAYS
//QUE ES UN ARRAY EN JS?
//es una estructura de datos que nos permiten almacenar varios elementos en una sola variable, es como una lista ordenada de elementos en la que cada uno tiene un indice que indica cual es la posicion en esta lista,se pueden almacenar todo tipo de elementos, string, number, booleanos,etc. 
//va entre corchetes
//es recomendable usar let en vez de const ya que si le queremos agregar un elemento al array con const no es posible
const array = new Array (5)
array[0] = 'curso HTML'
array[1] = 'curso CSS'
array[2] = 'curso JS'
//EL PRIMER ELEMENTO SIEMPRE EN 0, SE COMIENZA A CONTAR DESDE 0
console.log(array)//esto arroja '2 empty items' porque declramos 5 arrays pero no los definimos entonces son 'undefined'
console.log(array.length)// length arroja la cantidad de elementos que contiene el array, en este caso serian 5
console.log(array[1])// de esta manera seleccionamos al objeto que esta en el indice 1 que es 'curso CSS'
console.log(array[array.length-1])// de esta manera se entra al ultimo elemento del array

console.log(array.sort())// SORT ordena en este caso las palabras por orden alfabetico, toma la primera letra para ordenar, tambien finciona con numeros 

let array2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
console.log(array2.sort())//aqui surge ele problema que sort los ordena mal al tomar el primer numero: '1,10,11,12,13,14,15,2,3,4,5,6,7,8,9' para que los ordene bien hay que colocar lo siguiente 
console.log(array2.sort((x,y) => x.y))// de esta manera los ordena correctamente a los numeros, con las palabras no hay problema 

//BUCLES

let array3 = ['despertarse' , 'comer', 'estudiar', 'dormir']
let texto = ''

for (let index = 0; index < array3.length; index++) {
    texto += "<li>" + array3[index] + "</li>"
    
}

/* un bucle pasa por cada indice y lo imprime, siempre y cuando la condicion sea true*/

//SI LE QUISIERAMOS AGREGAR ALGO UN ARRAY
array3[array3.length] = 'trabajar'
console.log(array3)

//otra forma de agregar elementos en el lugar que deseemos
array3[7] = 'jugar'
console.log(array3)
//de esta manera se agrega a la lista pero deja dos espacios vacios 

//MANIPULACION DE ARREGLOS
let frutas = ['manzana', 'pera', 'banana', 'naranja', 'manzana', 'naranja']
//.filter()
const resultado = frutas.filter(x => x == 'manzana')
console.log(resultado)
//esto da como resultado ['manzana', 'manzana'] ya que filtra la palabra que indtroduzcas en el .filter y te devuelve la cantidad de veces que este en el array

//.map()
const resultado2 = frutas.map(x => {
    if(x == 'manzana') 
    return 'naranja'
})
console.log(resultado2)
//esto da como resultado que todas las palabras que se llamaban manzana se reemplazan por la palabra 'naranja'

//.fill()
const resultado3 = frutas.fill('naranja', 1)
console.log(resultado3)
//esto da como resultado que, a partir del indice 1, como indicamos con el numero 1 entre parentesis, reemplaza todas las palabras por la indicada que en este caso es 'naranja'

//.find()
const resultado4 = frutas.find(x => x == 'naranja')
console.log(resultado4) 
//esto da como resultado la primera coincidencia que tenga con la palabra intriducida, no te pasa la cantidad de veces que este repetida

//.findIndex()
const resultado5 = frutas.findIndex(x => x == 'manzana')
console.log(resultado5)
//esto da como resultado el numero de indice en donde se encuentra la palabra indicada 

//.some
const resultado6 = frutas.some(x => x == 'manzana')
console.log(resultado6)
//esto da como resultado true o false, pregunta si hay alguna manzana en el array

//.every()
const resultado7 = frutas.every(x => x == 'manzana')
console.log(resultado7)
//esto da como resultado true o false y pregunta si el array esta compuesto entero por manzanas

//.pop()
const resultado8 = frutas.pop()
console.log(resultado8)
console.log(frutas)
//pop elimina el ultimo elemento del array, pero al colocar console.log te devuleve el array que quito, para ver los cambios hay que hacerle un cosole log al array

//.shift()
const resultado9 = frutas.shift()
console.log(resultado9)
console.log(frutas)
//shift hace lo mismo que .pop pero quita el primer elemento del array

//.push()
const resultado10 = frutas.push('frutilla')
console.log(resultado10)
console.log(frutas)
//agrega un elemnto al final del array

//.unshift()
const resultado11 = frutas.unshift('sandia')
console.log(resultado11)
console.log(frutas)
//este agrega el elemento al comienzo del array

//.splice
const resultado12 = frutas.splice(0,1, 'cereza')
console.log(resultado12)
console.log(frutas)
//esto corta la palabra que sellecionas clocando el indice, en este caso puse '0', el '1' indica cuantos quiero cortar, y 'cereza' va en reemplazo

//.slice()
const resultado13 = frutas.slice(0, 3)
console.log(resultado13)
console.log(frutas)
//el slice no modifica el array, te devuelve el resultado de lo que pedis cortas el '2' es el numero de indice de donde comienza a cortar y el '4' en donde termina

//PARA CONCATENAR UN ARRAY CON OTRO
console.log(array.concat(frutas))

document.getElementById("seleccionable").innerHTML = texto

document.getElementById("seleccionable").innerHTML = frutas.join(' - ')
//esta es una manera de agregarle espacio al la lista con JOIN