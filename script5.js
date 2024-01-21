//SCOPE
let x = 5 //ESTE ES EL SCOPE PADRE
{
    let x = 2 //ESTE ES EL SCOPE HIJO 
    console.log(x)
}

console.log(x)

//si fuera de esta manera
let a= 5
{console.log(a)}

console.log(a)
//AL NO ESTAR DECLARADO EL VALOR DENTRO DE LA LLAVE TOMA EL VALOR DE AFUERA DE LA LLAVE YA QUE ES EL SCOPE PADRE 

let y = 5

{
    let y = 3
    x += y//de esta manera SE AHORRA ESPACIO en vez de poner x = x + y
}