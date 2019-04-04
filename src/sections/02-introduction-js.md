## Introducción a JavaScript

<img src="static/js.png" style="background:none; border:none; box-shadow:none; width: 15%; height: 15%;">

----

## ¿Qué es JavaScript?

JavaScript es un lenguaje de scripting multiplataforma y orientado a objetos.

<small>
    Es un lenguaje pequeño y liviano. Dentro de un ambiente de host, JavaScript puede conectarse a los objetos de su ambiente y proporcionar control programático sobre ellos.
</small>

----

JavaScript contiene una librería estándar de objetos, tales como  _Array_, _Date_, y _Math_, y un conjunto central de elementos del lenguaje, tales como operadores, estructuras de control, y sentencias.

----

El núcleo de JavaScript puede extenderse para varios propósitos, complementándolo con objetos adicionales, por ejemplo:

- Client-side
- Server-side

----

### Client-side

JavaScript extiende el núcleo del lenguaje proporcionando objetos para controlar un navegador y su modelo de objetos (o DOM, por las iniciales de Document Object Model).

<small>
    Por ejemplo, las extensiones del lado del cliente permiten que una aplicación coloque elementos en un formulario HTML y responda a eventos del usuario, tales como clicks del ratón, ingreso de datos al formulario y navegación de páginas.
</small>

----

### Server-side

JavaScript extiende el núcleo del lenguaje proporcionando objetos relevantes a la ejecución de JavaScript en un servidor.

<small>
    Por ejemplo, las extensiones del lado del servidor permiten que una aplicación se comunique con una base de datos, proporcionar continuidad de la información de una invocación de la aplicación a otra, o efectuar manipulación de archivos en un servidor.
</small>

----

## Gramática y Tipos

----

### Conceptos básicos

----

### Comentarios

La sintaxis de comentarios es la misma como en C++ y en muchos otros lenguajes:

```javascript
// comentario en una sola línea
 
/* este es un comentario 
   multilínea
 */
 
/* no puedes, sin embargo, /* anidar comentarios */ SyntaxError */
```
<!-- .element: contenteditable="true" -->

----

### Declaraciones

Hay tres tipos de declaraciones en JavaScript.

- **var**
  Declara una variable, iniciándola opcionalmente a un valor.

- **let**
  Declara una variable local en un bloque de ámbito, inicializándola opcionalmente a un valor.

- **const**
  Declara una constante de sólo lectura en un bloque de ámbito.

----

### Variables

<small>
    Las variables se usan como nombres simbólicos para valores en tu aplicación. Los nombres de las variables, llamados identificadores, se rigen por ciertas reglas.
</small>

----

Un identificador en JavaScript tiene que empezar con una letra, un guión bajo (_) o un símbolo de dólar ($); los valores subsiguientes pueden ser números.

<small>
    Debido a que JavaScript diferencia entre mayúsculas y minúsculas, las letras incluyen tanto desde la "A" hasta la "Z" (mayúsculas) como de la "a" hasta la "z".
</small>

----

Puedes usar la ISO 8859-1 o letras Unicode tales como å y ü en un identificador.

<small>
    Puedes también usar el Unicode escape sequences como caracteres en identificadores.
</small>

----

Algunos ejemplos de nombre permitidos son Numero_Visitas, temp99, _nombre, $nombre.

----

## Declarando variables

Puedes declarar una variable de tres maneras:

----

- Con la palabra clave **var**. Por ejemplo, _var x = 42_.
  <small>
    Esta sintaxis puede ser usada para declarar tanto variables locales como globales.
  </small>
- Simplemente asignándole un valor. Por ejemplo, _x = 42_. 
  <small>
    Esto siempre declara una variable global y no puede ser cambiada a nivel local. Esto genera una advertencia strict de JavaScript. No deberías usar esta variante.
  </small>
- Con la palabra clave let. Por ejemplo, _let y = 13_.
  <small>
    Esta variable puede ser usada para declarar una variable local en un bloque de ámbito. Ver Ámbito de variable más abajo.
  </small>

----

## Evaluando variables

Una variable declarada usando la sentencia var o let sin asignarle un valor inicial tiene el valor undefined.

Al intentar acceder a una variable no declarada dará como resultado la excepción ReferenceError.

----

```javascript
var a;
console.log('El valor de a es ' + a); // El valor de a es undefined

console.log('El valor de b es ' + b); // El valor de b es undefined
var b;

console.log('El valor de c es ' + c); // Uncaught ReferenceError: c no está definida

let x;
console.log('El valor de x es ' + x); // El valor de x es undefined

console.log('El valor de y es ' + y); // Uncaught ReferenceError: y no está definida
let y;
```
<!-- .element: contenteditable="true" -->

----

<small>
    Se puede usar undefined para determinar si una variable tiene un valor. En el siguiente código a la variable input no se le asigna ningún valor y la sentencia de control if la evalúa como true.
</small>

```javascript
var input;

if (input === undefined) {
    hazEsto();
} else {
    hazEso();
}
```
<!-- .element: contenteditable="true" -->

----

<small>
    El valor undefined se comporta como un false cuando se utiliza en un contexto booleano. Por ejemplo, el siguiente código ejecuta la función myFunction porque el elemento myArray no ha sido definido:
</small>

```javascript
var myArray = new Array();

if (!myArray[0]) {
    myFunction();
}
```
<!-- .element: contenteditable="true" -->

----

<small>
    El valor undefined se convierte en NaN, no numérico, cuando se usa en una operación aritmética.
</small>

```javascript
var a;

a + 2; // Se evalua a NaN
```
<!-- .element: contenteditable="true" -->

----

<small>
    Cuando se evalúa una variable nula, el valor null se comporta como el 0 en operaciones aritméticas y como false en operaciones lógicas. Por ejemplo:
</small>

```javascript
var n = null;

console.log(n * 32); // Va a lanzar 0 a la consola
```
<!-- .element: contenteditable="true" -->

----

## Variables hoisting

```javascript
/**
 * Ejemplo 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Ejemplo 2
 */
// devolverá un valor undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();
```
<!-- .element: contenteditable="true" -->

----

Debido al **hoisting**, todas las declaraciones var en una función deben colocarse lo más cerca posible de la parte superior de la función. Esta buena práctica mejora la claridad del código.

----

### Hoisting y let

```javascript
console.log(x); // ReferenceError

let x = 3;
```
<!-- .element: contenteditable="true" -->

----

### Función Hoisting

```javascript
/* Declaración de la función */

foo(); // "bar"

function foo() {
  console.log("bar");
}


/* Expresión de la función */

baz(); // TypeError: baz no es una función

var baz = function() {
  console.log("bar2");
};
```
<!-- .element: contenteditable="true" -->

----

## Estructura de datos y tipos

----

### Tipos de datos

----

<!-- .slide: style="text-align: left" -->

#### Tipos de datos primitivos

-  [**Boolean**](https://developer.mozilla.org/es/docs/Glossary/Boolean). _true_ y _false_
-  [**null**](https://developer.mozilla.org/es/docs/Glossary/Null). Una palabra clave especial que denota un valor _null_. 
<small>
    Como JavaScript es case-sensitive, null no es lo mismo que NULL o cualquier otra variante.
</small>
-  [**undefined**](https://developer.mozilla.org/es/docs/Glossary/undefined). Una propiedad de alto nivel cuyo valor no es definido.
-  [**Number**](https://developer.mozilla.org/es/docs/Glossary/Numero). 42 o 3.14159.
-  [**String**](https://developer.mozilla.org/es/docs/Glossary/String). "Hola".

----

<!-- .slide: style="text-align: left" -->

#### Otros tipos de datos

-  **Object**

* * *

<small>
    Aunque estos tipos de datos son una cantidad relativamente pequeña, permiten realizar funciones útiles con tus aplicaciones. Los otros elementos fundamentales en el lenguaje son los **Objects** y las **funciones**. Puedes pensar en objetos como contenedores con nombre para los valores, y las funciones como procedimientos que puede realizar tu aplicación.
</small>
  
----

### Conversión de Tipos

<small>
    JavaScript es un lenguaje de tipo dinámico. Esto significa que no tienes que especificar el tipo de dato de una variable cuando la declaras, y los tipos de datos son convertidos automáticamente de acuerdo a lo que se necesite en la ejecución del script.
</small>

----

```javascript
var respuesta = 42

// y posteriormente

respuesta = "Hola, soy una respuesta!"
```
<!-- .element: contenteditable="true" -->

<small>
    Debido a que es un lenguaje de tipos dinámicos, esta asignación no causa un mensaje de error.
</small>

----

```haskell
x = "La respuesta es " + 42 // "La respuesta es 42"
y = 42 + " es la respuesta" // "42 es la respuesta"
```
<!-- .element: contenteditable="true" -->

----

En declaraciones que involucran otros operadores, JavaScript no convierte los valores numéricos a string. Por ejemplo:

```javascript
"37" - 7 // 30
"37" + 7 // "377"
```
<!-- .element: contenteditable="true" -->

----

### Convertir string a números

En el caso que un valor representando un número está en memoria como string, hay métodos para la conversión.

-   [parseInt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt)
-   [parseFloat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseFloat)

----

**parseInt** sólo retornará números enteros, por lo que su uso es disminuido por los decimales. Adicionalmente, una buena práctica para parseInt es incluir siempre el parámetro _radix_. El parámetro rádix es usado para especificar qué sistema numérico será usado.

----

Un método alternativo para recibir un número de un string es con el operador + (más unario):

```javascript
"1.1" + "1.1" = "1.11.1"
(+"1.1") + (+"1.1") = 2.2   
// Nota: los paréntesis son para fines demostrativos, no son obligatorios.
```
<!-- .element: contenteditable="true" -->

----

<!-- .slide: style="text-align: left" -->

## Literales

Los literales se utilizan para representar valores en JavaScript. Estos son valores fijos, no variables, que literalmente proporciona en su script.

----

### Literales Array

Un literal array es un lista de cero o más expresiones, cada uno representa un elemento array, entre corchetes ([]).

```javascript
var cafes = [ "Tostado Frances", "Colombiano", "Kona" ];
```
<!-- .element: contenteditable="true" -->

----

Los literales array son también objetos array.

-  [Array](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
-  [colecciones indexadas](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Indexed_collections).

----

```javascript
var peces = [ "Leon", , "Angel" ];

// peces[0] es "Leon"
// peces[1] es undefined
// peces[2] es "Angel"
```
<!-- .element: contenteditable="true" -->

----

```javascript
var miLista = [ 'casa', , 'escuela', ];

// miLista[3]
```
<!-- .element: contenteditable="true" -->

----

```javascript
var miLista = [ , 'casa', , 'escuela' ];

// miLista[0] y miLista[2] faltan
```
<!-- .element: contenteditable="true" -->

----

### Literales Booleanos

Los literales de tipo Booleanos tienen 2 valores posibles: _true_ y _false_.

----

### Literales Enteros

Los Enteros pueden ser expresados en decimal (base 10), hexadecimal (base 16), octal (base 8) y binario (base 2).

-  0, 117 and -345 (decimal, base 10)
-  015, 0001 and -077 (octal, base 8) 
-  0x1123, 0x00111 and -0xF1A7 (hexadecimal, "hex" o base 16)

----

### Literales de Punto Flotante

```javascript
 3.1415
-3.1E12
  .1e12
2E-12
3.14
2345.789
 .3333333333333333333
-.283185307179586
```
<!-- .element: contenteditable="true" -->

----

### Literales Tipo Objeto

Un literal Objeto es una lista de cero o mas parejas de nombres de propiedades asociadas con el respectivo valor, encerradas entre corchetes ({}).

----

```javascript
var Ventas = "Toyota";

function TiposCarro(nombre) {
  if (nombre == "Honda") {
    return nombre;
  } else {
    return "Lo siento, nosotros no vendemos " + nombre + ".";
  }
}

var carro = {
    miCarro: "Saturn",
    getCarro: TiposCarro("Honda"),
    especial: Ventas
};

console.log(carro.miCarro);  // Saturn
console.log(carro.getCarro); // Honda
console.log(carro.especial); // Toyota
```
<!-- .element: contenteditable="true" -->

----

Adicionalmente el nombre de una propiedad puede ser un literal entero o puede corresponder a otro objeto, como se muestra a continuación.

```javascript
var auto = {
    algunosAutos: { a: "Saab", "b": "Jeep" }, 
    7: "Mazda"
};

console.log(auto.algunosAutos.b); // Jeep
console.log(auto[7]); // Mazda
```
<!-- .element: contenteditable="true" -->

----

```javascript
var propiedadesDeNombreInusual = {
  "": "Un string vacio",
  "!": "Bang!"
}

console.log(propiedadesDeNombreInusual."");   // SyntaxError: Unexpected string
console.log(propiedadesDeNombreInusual[""]);  // "Un string vacio"
console.log(propiedadesDeNombreInusual.!);    // SyntaxError: Unexpected token !
console.log(propiedadesDeNombreInusual["!"]); // "Bang!"
```
<!-- .element: contenteditable="true" -->

----

```javascript
var foo = { a: "alpha", 2: "two" };

console.log(foo.a);     // alpha
console.log(foo[2]);    // two
console.log(foo.2);     // Error: missing ) after argument list
console.log(foo[a]);    // Error: a is not defined
console.log(foo["a"]);  // alpha
console.log(foo["2"]);  // two
```
<!-- .element: contenteditable="true" -->

----

### Literales String

```javascript
"foo"
'bar'
"1234"
"Una linea \n otra linea"
"El gato de Jhon"
```
<!-- .element: contenteditable="true" -->

----

```javascript
console.log("El gato de Jhon".length);

// Imprimira el numero de caracteres en el literal, incluyendo espacios en blanco. 
// En este caso, 15.
```
<!-- .element: contenteditable="true" -->

----

#### Carácteres especiales en strings

```javascript
console.log("una linea \n otra linea");
```
<!-- .element: contenteditable="true" -->

----

### RegExp Literales

Un regex literal (_tema fuera del curso_) es un patron encerrado entre barras diagonales. El siguiente es un ejemplo de regex literal.

```javascript
var re = /ab+c/;
```
<!-- .element: contenteditable="true" -->

----

## Control de flujo y manejo de errores

----

### Sentencia de bloque

La sentencia de bloque es el tipo de sentencia más básico y se utiliza para agrupar sentencias. El bloque se delimita entre un par de llaves:

```
<!-- .element: contenteditable="true" -->
{ 
  sentencia_1;
  sentencia_2;
  . 
  . 
  . 
  sentencia_n; 
}
```
<!-- .element: contenteditable="true" -->

----

Los bloques de sentencias son comúnmente utilizados para sentencias de  control de flujo  (ej. if, for, while).

```javascript
while (x < 10) {
  x++;
}
```
<!-- .element: contenteditable="true" -->

En este caso { x++; } es el bloque de sentencias.

----

**Importante**: Javascript no tiene ámbito a nivel bloque en versiones anteriores a ECMAScript 6. 

```javascript
var x = 1;

{
  var x = 2;
}

console.log(x); // imprime 2
```
<!-- .element: contenteditable="true" -->

----

### Sentencias condicionales

```javascript
if (condición) {
    sentencia_1;
} else { 
    sentencia_2;
}
```
<!-- .element: contenteditable="true" -->

----

```javascript
if (condición) {
  ejecutar_sentencia_1_si_condición_es_verdadera;
  ejecutar_sentencia_2_si_condición_es_verdadera;
} else {
  ejecutar_sentencia_3_si_condición_es_falsa;
  ejecutar_sentencia_4_si_condición_es_falsa;
}
```
<!-- .element: contenteditable="true" -->

----

#### Asignación dentro de una expr de condición

```javascript
if ((x = y)) {
  /* sentencias aquí */
}
```
<!-- .element: contenteditable="true" -->

----

#### Valores falsos

Los siguientes valores se evalúan como falso (también conocidos como valores Falsy):

-  false
-  undefined
-  null
-  0
-  NaN
-  la cadena vacía ("")

----

#### Ejemplo

```javascript
var x = 4;

function comprobarDatos() {
  if (x == 3) {
    return true;
  } else {
    alert("Introduce exactamente tres caracteres. " +
    document.form1.threeChar.value + " no es válido.");
    return false;
  }
}
```
<!-- .element: contenteditable="true" -->

----

### Switch

```javascript
switch (tipoFruta) {
  case "Naranjas":
    console.log("Naranjas cuestan 0,59€ el kilo.");
    break;
  case "Manzanas":
    console.log("Manzanas cuestan 0,32€ el kilo.");
    break;
  case "Plátanos":
    console.log("Plátanos cuestan 0,48€ el kilo.");
    break;
  case "Cerezas":
    console.log("Cerezas cuestan 3,00€ el kilo.");
    break;
  case "Mangos":
    console.log("Mangos cuestan 0,56€ el kilo.");
    break;
  case "Papayas":
    console.log("Mangos y papayas cuestan 2,79€ el kilo.");
    break;
  default:
   console.log("Disculpa, no tenemos el tipo de fruta " + tipoFruta + ".");
}

console.log("¿Te gustaría tomar algo?");
```
<!-- .element: contenteditable="true" -->

----

### Sentencias de manejo de excepciones

Puedes lanzar excepciones usando la sentencia throw y manejarlas usando las sentencias _try_..._catch_.

----

Practicamente cualquier objeto puede ser lanzado en JavaScript. Sin embargo, no todos son creados igual.

----

#### Sentencia throw

```javascript
throw "Error2";   // Tipo string
throw 42;         // Tipo número
throw true;       // Tipo booleano
throw { toString: function() { return "¡Soy un objeto!"; } };
```
<!-- .element: contenteditable="true" -->

----

#### Try Catch

```javascript
function getValue(x) {
  if (x != null) {
    return x;
  } else {
    throw "InvalidMonthNo";
  }
}

try {
  value = getValue(x);
} catch (e) {
  value = null;
  console.log(e)
}
```
<!-- .element: contenteditable="true" -->

----

### Finally

```javascript
function f() {
  try {
    throw "bogus";
  } catch(e) {
    console.log('atrapado dentro de f');
    throw e; // Esta sentencia throw es suspendida hasta que
             // el bloque finally se termine de ejecutar
  } finally {
    return false; // Sobreescribe la sentencia throw anterior
  }
  // "return false" es ejecutado ahora
}

try {
  f();
} catch(e) {
  // Esta nunca es encontrada porque la sentencia throw dentro
  // del bloque catch es sobrescrita por la sentencia return
  // en el bloque finally
  console.log('atrapado fuera de f');
}

// SALIDA
// atrapado dentro de f
```
<!-- .element: contenteditable="true" -->

----

## Funciones

----

Las funciones son uno de los pilares fundamentales de JavaScript. Una función es un procedimiento en JavaScript - un conjunto de sentencias que realizan una tarea o calculan un valor.

----

<!-- .slide: style="text-align: left" -->

### Definición de funciones

La definición de una función (también llamada declaración de función o sentencia de función) consiste de la palabra clave (reservada) **function**, seguida por:

- El nombre de la función (opcional).
- Una lista de argumentos para la función, encerrados entre paréntesis y separados por comas (,).
- Las sentencias JavaScript que definen la función, encerradas por llaves, ({}).

----

```javascript
function square(number) {
  return number * number;
}
```
<!-- .element: contenteditable="true" -->

----

-  Los parámetros primitivos (como puede ser un número) son pasados a las funciones por **valor**.
-  Si pasa un objecto (p. ej. un valor no primitivo, como un _Array_ o un objeto definido por el usuario) como parámetro, y la función **cambia las propiedades del objeto**, este cambio es visible desde afuera de la función.

----

```javascript
function myFunc(theObject) {
  theObject.make = "Toyota";
}

var mycar = {make: "Honda", model: "Accord", year: 1998},
    x,
    y;

x = mycar.make;     // x toma el valor "Honda"

myFunc(mycar);

y = mycar.make;
// y toma el valor "Toyota"
// (la propiedad make fue cambida por la funcion)
```
<!-- .element: contenteditable="true" -->

----

<small>
  **Nota**: Tenga en cuenta que asignar un nuevo objeto al parámetro no tendrá ningún efecto fuera de la función, porque esto está cambiando el valor del parámetro en lugar de una de las propiedades del objeto:
</small>

```javascript
function myFunc(theObject) {
  theObject = {make: "Ford", model: "Focus", year: 2006};
}

var mycar = {make: "Honda", model: "Accord", year: 1998},
    x,
    y;

x = mycar.make;     // x toma el valor "Honda"

myFunc(mycar);
y = mycar.make;     // y sigue con el valor "Honda"
```
<!-- .element: contenteditable="true" -->

----

### Expresiones de Función

----

<small>
  Si bien la declaración de la función anterior es sintácticamente una sentencia, las funciones pueden también ser creadas por una expresión de función. Tal función puede ser anónima; no debe tener un nombre.
</small>

```javascript
var square = function(number) { return number * number };

var x = square(4) // x obtiene el valor 16
```
<!-- .element: contenteditable="true" -->

----

```javascript
var factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1)
};

console.log(factorial(3));
```
<!-- .element: contenteditable="true" -->

----

<small>
  Las expresiones de función son convenientes cuando se pasa una función como argumento a otra función. El siguiente ejemplo muestra una función map siendo definida y luego llamada con una expresión de función como primer parámetro:
</small>

```javascript
function map(f, a) {
  var result = [], // Crea un nuevo Array
      i;

  for (i = 0; i != a.length; i++) {
    result[i] = f(a[i]);
  }
  
  return result;
}
```
<!-- .element: contenteditable="true" -->

----

El siguiente código retorna [ 0, 1, 8, 125, 1000 ].

```javascript
var multiplicar = function(x) { return x * x * x; }

map(multiplicar, [0, 1, 2, 5, 10]);
```
<!-- .element: contenteditable="true" -->