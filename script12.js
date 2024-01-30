//DATE 
const date = new Date()
console.log(date)
//esto da como resultado la fecha actual con horas, minutos y segundos
//FORMA .set(), manera de seteat(configurar) la fecha 
date.setDate(27)
date.setFullYear(2027)
date.setMonth(2)

//forma .get(), manera de pedir alguna parte de la fecha
console.log(date.getFullYear())
//.getFullYear() te da como resultado el año en curso '2024'
console.log(date.getMonth())
//.getMonth() da como resultado el indice del mes que en este caso es '0' porque estamos en enero
console.log(date.getMinutes())
//.getMinutes() da como resultado los minutos actuales
console.log(date.getDate())
//.getDate() da como resultado el dia 


//ESTA ES UNA MANERA PARA QUE MUESTRE EL MES CON LETRAS EN VEZ DEL INDICE DEL MES
let meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
let resultado = meses[date.getMonth()]
console.log(resultado)

//forma de poner la fecha AAAA/MM/DD ESTA FORMA DE ESCRIBIRLO SE LLAMA(ISO)
//LA FORMA SHORT 01/30/2024
//LA FORMA LONG Ene 30 2024
const date2 = new Date("2023/01/30")
console.log(date2)
//ESTE DA COMO RESULTADO LA FECHA QUE INTRODUCIS EN EL PARENTESIS