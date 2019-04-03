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

----

<small>
    El valor undefined se convierte en NaN, no numérico, cuando se usa en una operación aritmética.
</small>

```javascript
var a;

a + 2; // Se evalua a NaN
```

----

<small>
    Cuando se evalúa una variable nula, el valor null se comporta como el 0 en operaciones aritméticas y como false en operaciones lógicas. Por ejemplo:
</small>

```javascript
var n = null;

console.log(n * 32); // Va a lanzar 0 a la consola
```

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

----

Debido al **hoisting**, todas las declaraciones var en una función deben colocarse lo más cerca posible de la parte superior de la función. Esta buena práctica mejora la claridad del código.

----

### Hoisting y let

```javascript
console.log(x); // ReferenceError

let x = 3;
```

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

----

## Estructura de datos y tipos

----

## Literales