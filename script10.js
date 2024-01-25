//QUE ES UN EVENTO EN JS? es una accion o suceso que pasa dentro de la pagina web, puede ser desencadenado por el usuario al hacer click o por el mismo navegador al terminar de cargar la pagina, un recurso,etc
function mostrar() {
    document.getElementById('seleccionable').innerHTML = Date()

}
function mostrar2() {
    document.getElementById('seleccionable2').innerHTML = Date()

}
/* document lo que hace es llamar al documento html
  getElementById('seleccionable') llama al p declarado en un id como seleccionable
  .innetHTML no se que hace
  date te tira la fecha*/

  //STRINGS 
let string = 'let\'s do it' //el simbolo que se usa para escapar de laas comillas por si debemos usarlas en e cidgo es la barra invertida \
let string2 = 'el simbolo con el que se escapa es \ probalo'
console.log(string2)//cuando ejecutamo esta accion la barra de escape no aparece en el codigo, para que aparezca habria que ponerla doble \\

//PARA REALIZAR UN SALTO DE LINEA SE ESCRIBE \n
let string3 = 'esto esta arriba \n esto esta abajo'//esto hace que lo que esta luego del \n se escriba en la linea de abajo
console.log(string3)

// \b es un backspace, borra un espacio 
// \t es un tabulador hace un esoacio
// \v tambien es un salto de linea 

//como contas las letras de un string 
let string4 = 'muercielago'
console.log(string4.length)//hay que colocarl .lenght para que cuente las vocales

let string5 = 'murcielago \n'
console.log(string5.length)//los espacios y el salto en linea cuenta como un espacio

//PARA RECORTAR PARTES DE UNA PALABRA 
let string6 = 'educacion'
console.log(string6.slice(4,7))//hay que utilizar el comando slice y pasarle parametros
//START comienza desde el 4(en el 5) HASTA EL 7(el 7 si lo toma)
//si ponemos -5, -2 logramos el mismo resultado pero contando desde atras desde el ultimo carscter

//PARA REEMPLAZAR PALABRAS 
let string7 = 'la educacion es muy importante en Argentina'
console.log(string7.replace('Argentina', 'el mundo'))

//para pasar texto a mayuscula
let string8 = 'la educacion es muy importante en Argentina'
console.log(string8.toUpperCase())

//PARA CONCATENAR STRINGS
let string9 = 'la educacion es muy importante en '
let string10 = 'ARGENTINA'
let string11 = 'el mundo'

console.log(string9.concat(string10))
console.log(string9 + string11)
//se puede concatenar de estas dos maneras

//PARA BORRAR LOS ESPACIOS 
let string12 = '            la educacion es muy importante en      '
let string13 = '   ARGENTINA'
let string14 = '  el mundo'

console.log(string12.trim().concat(string13)
)

//para marcar x letra en x lugar
let string15 = 'educacion'
console.log(string15.charAt(5))

//para utilizar una referencia para separar texto
let string16 = 'este texto te lo manda el backend. Este texto es importante. Dividi el texto'
console.log(string16.split('. '))//SI EL SPLIT NO TIENE PARAMETRO TE SEPARA LETRA POR LETRA 


