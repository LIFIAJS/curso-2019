## Programando con JS
# Nuevo enfoque

----

- Uso de manejador de dependencias
  - npm
  - yarn
  - ...

----

- Uso de un lenguaje que transpile a JS
  - EcmaScript
  - TypeScript
  - CoffeeScript
  - ...

----

# Nuevos Estandares

----

## EcmaScript

En este curso nos vamos a centrar en el estándar EcmaScript, apengándonos más que nada a una de sus versiones, **ES6**.

----

### Un poco de historia

EcmaScript es una especificación estandarizada por Ecma Internacional, en `ECMA-262` (1997) y en `ISO/IEC 16262` (1998).

Actualmente se encuentra en su versión 9 lanzada en Junio de 2018, y se esta trabajando en su versión 10 que va a ser lanzada en 2019.

NOTE:

https://medium.com/@selvaganesh93/javascript-whats-new-in-ecmascript-2019-es2019-es10-35210c6e7f4b

https://github.com/tc39/proposals

----

### ES1 (Junio 1997)

Primera edición del documeto ECMA-262

### ES2 (Junio 1998)

Edición del documento por ISO/IEC 16262

----

### ES3 (Diciembre 1999)

- RegExp
- Manejo de strings mejorado
- Nuevas estrucutras de control
- try/catch
- ...

----

### ES4 (abandonada)

Se discutía incluir clases, módulos, tipado estatico, generadores e iteradores, asignación por deconstrucción, tipos de datos algebraicos, y más.

Debido a la complejidad, fue abandonado el proyecto, para seguir en su siguiente versión

----

### ES5 (Diciembre 2009)

- `strict mode`
- `String.trim()`
- `Array.isArray()`
- `Array.forEach()`
- `Array.map()`, `Array.filter()`, `Array.reduce()`, `Array.reduceRight()`
- `Array.every()` y `Array.some()`
- `Array.indexOf()` y `Array.lastIndexOf()`
- `JSON.parse()` y `JSON.stringify()`
- `Date.now()`

----

### ES6 (Junio 2015)

- Clases
- módulos
- for/of loops
- generadores
- funciones arrow
- arreglos tipados
- colecciones (maps, sets and weak maps)
- Promises
- y mucho más

[Features](http://es6-features.org)

----

### ES7 (Junio 2016)

- Operador exponencial (`**`)
- `String.prototype.padStart` y `String.prototype.padEnd`
- `Array.prototype.includes`
- `Object.entries` y `Object.values`
- Trailing Commas

----

### ES8 (Junio 2017)

- `Object.values()` y `Object.entries()`
- `String.prototype.padStart()` y `String.prototype.padEnd()`
- `Object.getOwnPropertyDescriptors()`
- Trailing commas en parametros de funciones
- Async/Await

[Medium](https://medium.com/@Rashaunwarner/new-es8-features-f3d8b7b4fc8c)

----

### ES9 (Junio 2018)

- propiedades rest/spread properties
- iteraciones asincrónicas
- `Promise.prototype.finally()`
- adiciones a RegExp

----

### ES10 (proximamente 2019)

- Bigint
- `String.prototype.matchAll()`
- import dinámicos
- `Array.flat()` y `Array.flatMap()`
- `Object.fromEntries()`
- `String.trimStart()` y `String.trimEnd()`
- Well-formed `JSON.stringify()`
- `Array.prototype.sort()` estable
- `Function.toString()`
- ...

[Medium](https://medium.freecodecamp.org/the-complete-guide-to-es10-features-5fd0feb9513a)

NOTE:
https://medium.freecodecamp.org/the-complete-guide-to-es10-features-5fd0feb9513a

https://medium.freecodecamp.org/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e

https://en.wikipedia.org/wiki/List_of_ECMAScript_engines

----

### ES en los navegadores

<img src="static/es-versions.png" style="background:none; border:none; box-shadow:none; width: 75%; height: 75%;">

----

- Uso de herramientas para manejar los archivos estaticos
  - Webpack
  - Parcel
  - Gulp
  - Grunt
  - Browserify
  - ...

----

### Errores de programación

JavaScript es un lenguaje interpretado sin tipos, propenso a errores en runtime

¿Como hacer para evitar errores?

----

### ESLint

¿Por qué termina siendo necesario aplicar reglas de lint?

¿Por qué se debe seleccionar un estandar que se adapte a nuestro proyecto?

----

### ESLint en diferentes tipos de proyectos JavaScript

- Backend
- Fronted
- Extensiones web
- ...

Note: Comentar diferentes estandares de ESLint

- [aribnb](https://github.com/airbnb/javascript)
- [github](https://github.com/search?q=JavaScript+Style+Guide)

----

### Lo nuevo de Ecma Script
## Vanilla vs Ecma Script 6

----

## Constants

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
const PI = 3.141593
PI > 3.0
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
//  only in ES5 through the help of object properties
//  and only in global context and not in a block scope
var globalObject = typeof global === "object" ? global : window;

Object.defineProperty(globalObject, "PI", {
    value:        3.141593,
    enumerable:   true,
    writable:     false,
    configurable: false
})

PI > 3.0;
```
<!-- .element: contenteditable="true" -->
----

### Scoping
## Block-Scoped Variables

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    …
}

let callbacks = []
for (let i = 0; i <= 1; i++) {
    callbacks[i] = function () { return i * 2 }
}

callbacks[0]() === 0; callbacks[1]() === 2
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
var i, x, y;
for (i = 0; i < a.length; i++) {
    x = a[i];
    …
}
```
<!-- .element: contenteditable="true" -->
----

### Scoping
## Block-Scoped Functions

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
{
    function foo () { return 1 }
    foo() === 1
    {
        function foo () { return 2 }
        foo() === 2
    }
    foo() === 1
}
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
(function () {
    var foo = function () { return 1; }
    foo() === 1;
    (function () {
        var foo = function () { return 2; }
        foo() === 2;
    })();
    foo() === 1;
})();
```
<!-- .element: contenteditable="true" -->
----

## Arrow Functions

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
odds  = evens.map(function (v) { return v + 1; });
pairs = evens.map(function (v) { return { even: v, odd: v + 1 }; });
nums  = evens.map(function (v, i) { return v + i; });
```
<!-- .element: contenteditable="true" -->
----

### Extended Parameters Handling
## Default Values

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
function f(x, y = 7, z = 42) {
    return x + y + z
}

f(1) === 50
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
function f(x, y, z) {
    if (y === undefined)
        y = 7;
    if (z === undefined)
        z = 42;
    return x + y + z;
};

f(1) === 50;
```
<!-- .element: contenteditable="true" -->
----

### Extended Parameters Handling
## Rest Parameter

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
function f(x, y, ...a) {
    return (x + y) * a.length
}

f(1, 2, "hello", true, 7) === 9
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};

f(1, 2, "hello", true, 7) === 9;
```
<!-- .element: contenteditable="true" -->
----

### Extended Parameters Handling
## Spread Operator

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]

function f(x, y, ...a) {
    return (x + y) * a.length
}

f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]
```
<!-- .element: contenteditable="true" -->
**Ecma Script 5**

```javascript
var params = [ "hello", true, 7 ];
function f (x, y) {
    var a = Array.prototype.slice.call(arguments, 2);
    return (x + y) * a.length;
};
f.apply(undefined, [ 1, 2 ].concat(params)) === 9;
```
<!-- .element: contenteditable="true" -->
----

### Destructuring Assignment
## Parameter Context Matching

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
function f([ name, val ]) {
    console.log(name, val)
}

function g({ name: n, val: v }) {
    console.log(n, v)
}

function h({ name, val }) {
    console.log(name, val)
}

f([ "bar", 42 ])
g({ name: "foo", val:  7 })
h({ name: "bar", val: 42 })
```
<!-- .element: contenteditable="true" -->
----

### Modules
## Value Export/Import - Default

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
//  lib/math.js
export function sum(x, y) { return x + y }
export var pi = 3.141593

//  someApp.js
import * as math from "lib/math"
console.log("2π = " + math.sum(math.pi, math.pi))

//  otherApp.js
import { sum, pi } from "lib/math"
console.log("2π = " + sum(pi, pi))
```
<!-- .element: contenteditable="true" -->

----

```javascript
//  lib/mathplusplus.js
export * from "lib/math"
export var e = 2.71828182846
export default (x) => Math.exp(x)

//  someApp.js
import exp, { pi, e } from "lib/mathplusplus"
console.log("e^{π} = " + exp(pi))
```

----

## Detalles del modelo de Objetos

<small>
    Hasta ahora vimos como trabajar con objetos literales en JavaScript. Hoy vamos a entender como funciona el modelo de objetos del lenguaje.
</small>

----

JavaScript es un lenguaje **orientado a objetos basado en prototipos** en lugar de clases. Debido a esta diferencia, puede ser menos evidente cómo JavaScript te permite crear jerarquías de objetos y herencia de propiedades y de sus valores.

----

Los lenguajes orientados a objetos basados en clases, como _Java_ y _C++_, se basan en el concepto de dos entidades distintas: clases e instancias.

----

<!-- .slide: style="font-size: 22px" -->

|Basado en clases (Java)|Basado en prototipos (JavaScript)|
|:-----|:-----|
|La clase y su ejemplificación son entidades distintas|Todos los objetos pueden heredar de otro objeto|
|Define una clase en la definición de clase; se ejemplifica una clase con los métodos constructores.|Define y crea un conjunto de objetos con funciones constructoras.|
|Se crea un objeto con el operador new.|Igual.|
|Se construye una jerarquía de objetos utilizando la definición de las clases para definir subclases de clases existentes.|Se construye una jerarquía de objetos mediante la asignación de un objeto como el prototipo asociado a una función constructor.|
|Se heredan propiedades siguiendo la cadena de clases.|Se heredan propiedades siguiendo la cadena de prototipos.|
|La definición de una clase especifica  _todas_ las propiedades de todas las ejemplificaciones de esa clase. No se pueden añadir propiedades dinámicamente en tiempo de ejecución.|El conjunto inicial de propiedades lo determina la función constructor o el prototipo. Se pueden añadir y quitar propiedades dinámicamente a objetos específicos o a un conjunto de objetos.|

----

### Ecma Script 6
## Classes

----

### Class Definition

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
class Shape {
    constructor(id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move(x, y) {
        this.x = x
        this.y = y
    }
}
```

**Ecma Script 5**

```javascript
function Shape(id, x, y) {
    this.id = id;
    this.move(x, y);
};
Shape.prototype.move = function (x, y) {
    this.x = x;
    this.y = y;
};
```

----

<!-- .slide: style="text-align: left" -->

**Ecma Script 6**

```javascript
class Rectangle extends Shape {
    constructor(id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
```

**Ecma Script 5**

```javascript
var Circle = function(id, x, y, radius) {
    Shape.call(this, id, x, y);
    this.radius = radius;
};

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
```

----

### Y mucho [más](http://es6-features.org)!