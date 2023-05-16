console.log("La Siamo!");
let nombre= prompt("Ingrese su nombre");
alert("Bienvenid@ " + nombre + ".")
let edad = Number (prompt ("Ingrese su edad") );
if (edad >= 18){
    alert ("Sos mayor de edad. Podes ingresar");}
else { 
    alert("Sos menor de edad. No podes ingresar")
}  


let diadelasemana = Number (prompt ("Ingrese el dia de hoy"));
switch (diadelasemana){
    case 1:
        alert("Lunes");
        break;
    case 2:
        alert("Martes");
        break;
    case 3:
        alert ("Miercoles");
        break;
    case 4:
        alert("Jueves");
        break;
    case 5:
        alert("Viernes");
        break;
    case 6:
        alert ("Sabado");
        break;
    case 7: 
        alert ("Domingo");
        break;        
    default:
        alert ("Ese dia no existe");
        break;

}
