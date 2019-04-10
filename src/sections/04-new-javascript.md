### Nuevo enfoque de programación con JS

----

- Uso de manejador de dependecnias
  - npm
  - yarn

----

- Uso de un lenguaje que transpile a JS
  - EcmaScript
  - TypeScript
  - CoffeeScript
  - ...

----

## EcmaScript

En este curso nos vamos a centrar en el estándar EcmaScript, apengándonos más que nada al estándar ES6

----

### Un poco de historia

ES es una especificación estandarizada por Ecma Internacional, en `ECMA-262` (1997) y en `ISO/IEC 16262` (1998)

Actualmente se encuentra en su versión 9 lanzada en Junio de 2018, y se esta trabajando en su versión 10 que va a ser lanzada en 2019

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