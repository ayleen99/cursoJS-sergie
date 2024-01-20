//QUE ES UNA VARIABLE ES JAVASCRIPT?
//una variable es un contenedor en el que se puede almacenar valores como arrays,texto, numeros, objetos

//VAR
var nombreDeLaVariable = 'pedro'
//declaracion sin valor: si = permite escribir solo "nombreDeLaVariable = "
//scope: function 
//QUE ES SCOPE? Es como decir ambito, si declaramos dentro de una funcion o un bloque chiquito de codigo solo va a estar disponible ahi y no fuera de el codigo
//reasignacion: si
//redeclaracion:si
//var ya casi no se usa xq es demasiado reasignable, en un codigo muy grande puede provocar que se te rompa el codigo y no saber en donde fue que se te rompio

//LET
let nombreDeVariable = 'sergie code'
//declaracion sin valor: si = permite escribir solo "nombreDeVariable = "
//scope: bloque
//reasignacion: si
//redeclaracion: no

//CONST
const nombreVariable = 'disponible en youtube '
//declaracion sin valor: no = necesita si o si que la variable sea declarada si no tira error 
//scope: bloque
//reasignacion: no
//redeclaracion: no
//const deberia ser la que mas utulicemos 

let x, y, z
x = 5
y = 7
z = x + y
//con let se pueden declarar varias variables al mismo tiempo, con const NO. se separan con coma.
//tambien podemos declararlas de la sigiente manera con punto y coma todso en una misma linea: x = 5; y = 7; z = x + y;

let a = 5
let b = a
//'a' tiene un valor que es asignado y guardado un lugar en la memoria. 'b' en este caso apunta al mismo lugar en la memoria. Una vez que avanzamos con el codigo es posible que reasignemos el valor de 'a', por lo tanto cambiaria el valor de 'b' y provovcar fallos en el codigo ya que la intencion no es cambiar el valor de 'b' EN LO POSIBLE EVITAR ESTE TIPO DE ASIGNACIONES
//alt + shift + f para darle espacio entre letras

function nombreDeLaFuncion() {
    const nombreDeLaVariable = 'variable dentro de la funcion'
}
//a esto se refiere con el SCOPE, LAS LLAVES EN ESTE CASO SERIA COMO UN PLANETA, el const solo funciona dentro de las llaves y no por fuera, SOLO DENTRO DE ESTE PLANETA Y NO EN EL UNIVERSO(osea el resto del codigo)