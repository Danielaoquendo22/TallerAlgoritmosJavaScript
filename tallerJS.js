//punto 1
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
let num3 = parseFloat(prompt("Ingrese el tercer número:"));
let mayor
let menor
let medio

if(num1 > num2 && num1 >num3){
    mayor = num1
    
    if (num2 > num3){
        medio = num2
        menor = num3
    }else{
        medio = num3
        menor = num2
    }
}

if(num2 > num1 && num2 >num3){
    mayor = num2
    if (num1 > num3){
        medio = num1
        menor = num3
    }else{
        medio = num3
        menor = num1
    }
}

if(num3 > num1 && num3 >num2){
    mayor = num3
    if (num1 > num2){
        medio = num1
        menor = num2
    }else{
        medio = num2
        menor = num1
    }
}

console.log ("Este es el orden de menor a mayor " +  menor +" , "+ medio +" , "+ mayor)
console.log ("Este es el orden de mayor a menor  " +  mayor +" , "+ medio +" , "+ menor)

//punto 2

let perimetro =parseFloat(prompt("Ingresa el valor del perimetro"));
let radio  = parseFloat(prompt("Ingresa el calor del radio"));
let pI= 3.1416;
let area;
let rdoPerimetro;

rdoPerimetro= (perimetro*pI)*radio;

area= (rdoPerimetro*radio)/2;



console.log("El area del circulo es de:" + area + " " + "cm2");


//punto 3

let ladoUno= parseFloat(prompt("Ingrese el valor del lado uno: "));
let ladoDos= parseFloat(prompt("Ingrese el valor del lado dos: "));
let ladoTres= parseFloat(prompt("Ingrese el valor del lado tres: "));

if (ladoUno == ladoDos && ladoUno ==ladoTres && ladoDos == ladoTres){
    console.log("Es un triangulo Equilatero")      
}else{
    if(ladoUno !=ladoDos && ladoUno !=ladoTres && ladoDos == ladoTres){
        console.log("Es un triangulo Isosceles")
    }else{
        if (ladoUno !=ladoDos && ladoUno!= ladoTres && ladoDos != ladoTres)
            console.log("Es un triangulo Escaleno")
        }
    }

//  punto 4 

function calDivisor(numero) {
    let sumatoria = 0
    for (let i = 1; i < numero; i++) {
      if (numero % i === 0) {
        sumatoria = sumatoria + i;
      }
    }
    return sumatoria;
  }
  
  function amigos(num1, num2) {
    let sumNum1 = calDivisor(num1);
    let sumNum2 = calDivisor(num2);
  if (sumNum1===num2&&sumNum2===num1){

    return true

  }else{

    return false
  }

  }
  
  let numero1 = parseInt(prompt("Ingrese el primer número:"));
  let numero2 = parseInt(prompt("Ingrese el segundo número:"));
  
  if (amigos(numero1, numero2)) {
    console.log(`${numero1} y ${numero2} son números amigos.`);
  } else {
    console.log(`${numero1} y ${numero2} no son números amigos .`);
  }




  

  
      
      
      
 
  