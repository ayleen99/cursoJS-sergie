//OBJETOS 
//es una representacion en el codigo de algo real 
let auto1 = {  // se pueden poner string, numeros, funciones 
    marca: 'FIAT', //se separan con coma
    modelo: 'UNO',
    peso: 1000,
    color: 'Rojo'
}
let auto2 = {
    marca: 'RENAULT',
    modelo: '12',
    peso: 1100,
    color: 'Marron'
}

//se puede modificar una seccion del objeto
auto1.marca = 'BMW'
auto1.modelo = 'X5'
//el OBJETO ES auto1, LA CLAVE ES color, Y EL VALOR ES marron
console.log('Auto 1: ', auto1)
console.log('Auto 2: ', auto2)
console.log('El color del auto1 es: ', auto1.color)// esta es una manera de llamar una seccion del objeto 
console.log('El color del auto2 es: ', auto1["marca"]) // otra manera de llamar otra seccion es con corchetes


const vendedor = {
    nombre: 'Peddro',
    apellido: 'Gonzalez',
    empresa: 'Auto S.A',
    habilidadesBlandas: ['Carisma', 'Puntualidad'],
    vender: function() {
        return "Pedro ha vendido un auto"
    },
    nombreConmpleto: function() {
        return this.nombre + " " + this.apellido //this.nombre llama a un objeto que esta fuera de este scope
    }
}

console.log(vendedor.vender())
console.log(vendedor.nombreConmpleto())
console.log(vendedor.nombre)
console.log(vendedor.habilidadesBlandas)
