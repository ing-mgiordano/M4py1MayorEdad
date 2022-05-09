let nombre = prompt ('Cual es tu nombre?', 'Tu nombre')
if(nombre === 'Tu nombre') {
    alert('No has ingresado el nombre')
    let nombre = prompt ('Cual es tu nombre?', 'Tu nombre')
} 

const apellido = prompt ('Cual es tu apellido?', 'Tu apellido')
/* if(apellido === 'Tu apellido') {
    alert('No has ingresado el apellido')
    const apellido = prompt ('Cual es tu apellido?', 'Tu apellido')
} */

const edad = prompt ('Cual es tu edad?', 'Edad')
/* if(edad === 'Edad') {
    alert('No has ingresado la edad')
    const edad = prompt ('Cual es tu edad?', 'Edad')
} */

const datosUser = `Tu nombre es ${nombre}, tu apellido es ${apellido} y tu edad es ${edad} años`

alert(datosUser)
document.getElementById('datosUsuario').innerHTML = datosUser 
console.log(nombre, apellido, edad)

const datosUserMayor = `${nombre} ${apellido} eres MAYOR de edad`
const datosUserMenor = `${nombre} ${apellido} eres MENOR de edad`

if(edad >= 18) {
    alert(datosUserMayor)
    document.getElementById('mayorOMenorEdad').innerHTML = datosUserMayor
    console.log(datosUserMayor)
} else {
    alert(datosUserMenor)
    document.getElementById('mayorOMenorEdad').innerHTML = datosUserMenor
    console.log(datosUserMenor)
}
