//SINTAXIS DE LAS VARIABLES
const $variable = 'nombre'
const variable = 'nombre'
const Variable = 'nombre'
const _variable = 'nombre'
//se puede iniciar una variable con mayuscula, con signo peso y con guion bajo pero la manera recomendable es camelCase(con la primera letra en minuscula y con la primera letra de la segunda palabra en mayuscula y asi con las siguientes palabras)
/* Reglas:
 1) se puede iniciar con $, minuscula, mayuscula y _(guion bajo)
 2)no se puede iniciar con numeros pero si usarlos en el resto del nombre
 3) no se puede usar caracteres salvo $ y _
 */

let nombreapellido
let nombreApellido 
//estas dos variables son diferentes por ms uq etengan el mismo nombre ya que una tiene mayuscula y ptra minuscula
/*POR QUE NO ES LO MISMO?
CASE SENSITIVE
en javaScript, el termino "caseSensitive" se refiere a la sensibilidad de las variables y los identificadores(nombres de variables, funciones, etc) a las difeerencias de mayusculas y minusculas
Cuando una variable es case sensitive, significa qie se distingue entre mayusculas y minusculas al usarla en el codigo. esto implica que "variable" y "Variable" se consideraran dos identificadores diferentes en jvaScript
*/

/* CONVENCIONES DE NOMENCLATURA
CAMEL CASE 
debes empezar con a primera letra minuscula y la primera letra de cada nueva palabra subsecuente en mayuscula: camelCase, variableNueva, newUser

SNAKE CASE 
en snake case, conocido tambien como "underscore case", se utiliza guion bajo en lugar de espacio para separar las palabras: snake_case, variable_nueva, new_user

PASCAL CASE 
tambien conocido como "upper camel case" o "capital case", combina palabras con la primer letra en mayuscula: CamelCase, VariableNueva, NewUser

KEBAB CASE
en kebab case se utiliza el guin para combinar las palabras(no se puede usar en variables pero si en keys de objetos): camel-case, variable-nueva, new-user */
