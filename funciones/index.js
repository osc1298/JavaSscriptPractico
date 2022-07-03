// Código del cuadrado
console.group("Cuadrados");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm");

function perimetroCuadrado(lado) {
  return lado * 4;
}
// console.log("El perímetro del cuadrado es: " + perimetroCuadrado + "cm");

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log("El área del cuadrado es: " + areaCuadrado + "cmˆ2");
console.groupEnd();

// Código del triángulo
console.group("Triángulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
//   "Los lados del triángulo miden: "
//   + ladoTriangulo1
//   + "cm, "
//   + ladoTriangulo2
//   + "cm, "
//   + baseTriangulo
//   + "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo es de: " + alturaTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log("El perímetro del triángulo es: " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
console.log("El área del triángulo es: " + areaTriangulo + "cmˆ2");

console.groupEnd();

// Código del círculo
console.group("Círculos");

// Radio
// const radioCirculo = 4;
// console.log("El radio del círculo es: " + radioCirculo + "cm");

// Diámetro
function diametroCirculo(radio) {
  return radio * 2;
}

// PI
const PI = Math.PI;
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Área
function areaCirculo(radio) {
  return (radio * radio) * PI;
}

console.groupEnd();


// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}
function calcularAreaCuadrado() {
  const input = document.getElementById("InputCuadrado");
  const value = input.value;

  const area = areaCuadrado(value);
  alert(area);
}


//interaccion con el html para la opcion circulo
function calcularAreaCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const area = areaCirculo(value)
  alert(area);
}

function calcularPerimetroCirculo() {
  const input = document.getElementById("InputCirculo");
  const value = input.value;

  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

//integracion del html con la funcion del triangulo
function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("lado1").value;
  const lado2 = document.getElementById("lado2").value;
  const base = document.getElementById("base").value;
 

  const perimetro = perimetroTriangulo(lado1, lado2, base);
  alert(perimetro);
}

function calcularAreaTriangulo() {
  const altura = document.getElementById("altura").value;
 
  const base = document.getElementById("base").value;
 

  const perimetro = areaTriangulo(base, altura)
  alert(perimetro);
}

//funcion para calcular la altura de un triangulo isósceles

function calcularAlturaIsosceles(lado1, lado2, base)
{
  if(lado1 === lado2 && lado2 != base)
  {
    console.log('es un isoseles')
    let a = (lado1*lado1)-(base**2/4)
    const altura = Math.sqrt(a)
    console.log(altura)
  }else
  {
    console.log('no es un isoseles')
  }

}

calcularAlturaIsosceles(2,2,1);
console.groupEnd();
