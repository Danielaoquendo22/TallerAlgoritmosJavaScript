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



//punto 5

function obtenerTotal(valorUnidad, cantidad) {
    let subtotal = valorUnidad * cantidad;
    let iva = subtotal * 0.19;
  
    let valorTotal = subtotal + iva;
  
    if (valorTotal > 500000 && valorTotal < 1000000 ) {
      valorTotal = valorTotal - iva;
    }
  
    if (valorTotal > 1000000) {
      valorTotal = valorTotal*0.90;
    }
  
     
  console.log(`El valor de la compra total es: ${valorTotal}`);
  console.log(`Las cantidades son : ${cantidad}`);
  console.log(`El iva de la transaccion es : ${iva}`);
  }
  
  
  let precio = parseFloat(prompt("Ingrese el precio del producto: "));
  let cantidad = parseInt(prompt("Ingrese la cantidad de productos: "));
  
  obtenerTotal(precio, cantidad);
  
//punto 6


function calcularNotaFinal(nota1, nota2, nota3, nota4) {
        
    let notaFinal
  
    
    if (nota4 === 5) {
      if ((nota1 + 1)<=5 ){
        nota1 = nota1 + 1
      }else {
        nota1 = 5
      }
      if ((nota2 + 1)<=5 ){
        nota2 = nota2 + 1
      }else {
        nota2 = 5
      }
      if ((nota3 + 1)<=5 ){
        nota3 = nota3 + 1
      }else {
        nota3 = 5
      }

    }

    notaFinal = nota1 * 0.1 + nota2 * 0.2 + nota3 * 0.3 + nota4 * 0.4;
  
   
  
   
  
   
    if (notaFinal > 3.5) {
        console.log(`El estudiante con nota  ${notaFinal} gano la materia`);
       
    } else {
        console.log(`El estudiante con nota  ${notaFinal} perdio la materia`);
    }

    console.log(`Nota 1 ${nota1} `);
    console.log(`Nota 2 ${nota2} `);
    console.log(`Nota 3 ${nota3} `);
    console.log(`Nota 4 ${nota4} `);
  }
  
 let nota1
 let nota2 
 let nota3 
 let nota4 
  
  do {
    nota1 = parseFloat(prompt(`Ingrese la nota numero 1 Debe ser un numero de 0 a 5:`));
  } while (nota1 < 0 || nota1 > 5);
  do {
    nota2 = parseFloat(prompt(`Ingrese la nota numero 2 Debe ser un numero de 0 a 5:`));
  } while (nota2 < 0 || nota2 > 5);
  do {
    nota3 = parseFloat(prompt(`Ingrese la nota numero 3 Debe ser un numero de 0 a 5:`));
  } while (nota3 < 0 || nota3 > 5);
  do {
    nota4 = parseFloat(prompt(`Ingrese la nota numero 4 Debe ser un numero de 0 a 5:`));
  } while (nota4 < 0 || nota4 > 5);


  
  let resultado = calcularNotaFinal(nota1, nota2, nota3, nota4);
  
      
      
      
 
  