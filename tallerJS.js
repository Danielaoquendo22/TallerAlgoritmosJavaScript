








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


