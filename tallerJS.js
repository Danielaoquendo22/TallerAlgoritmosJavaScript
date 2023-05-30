// let num1 = parseFloat(prompt("Ingrese el primer número:"));
// let num2 = parseFloat(prompt("Ingrese el segundo número:"));
// let num3 = parseFloat(prompt("Ingrese el tercer número:"));
// let mayor
// let menor
// let medio

// if(num1 > num2 && num1 >num3){
//     mayor = num1
    
//     if (num2 > num3){
//         medio = num2
//         menor = num3
//     }else{
//         medio = num3
//         menor = num2
//     }
// }

// if(num2 > num1 && num2 >num3){
//     mayor = num2
//     if (num1 > num3){
//         medio = num1
//         menor = num3
//     }else{
//         medio = num3
//         menor = num1
//     }
// }

// if(num3 > num1 && num3 >num2){
//     mayor = num3
//     if (num1 > num2){
//         medio = num1
//         menor = num2
//     }else{
//         medio = num2
//         menor = num1
//     }
// }

// console.log ("Este es el orden de menor a mayor " +  menor +" , "+ medio +" , "+ mayor)
// console.log ("Este es el orden de mayor a menor  " +  mayor +" , "+ medio +" , "+ menor)


let perimetro =parseFloat(prompt("Ingresa el valor del perimetro"));
let radio  = parseFloat(prompt("Ingresa el calor del radio"));
let pI= 3.1416;
let area;
let rdoPerimetro;

rdoPerimetro= (perimetro*pI)*radio;

area= (rdoPerimetro*radio)/2;



console.log("El area del circulo es de:" + area + " " + "cm2");






