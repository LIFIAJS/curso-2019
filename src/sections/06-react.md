<!-- .slide: data-background="static/react-background.png" data-background-transition="zoom" -->

----

React es una _librería Javascript focalizada en el desarrollo de interfaces de usuario_.

<small>
    Así se define la propia librería y evidentemente, esa es su **principal área de trabajo**. Sin embargo, lo cierto es que en React encontramos un excelente aliado para hacer todo tipo de aplicaciones web, SPA (_**Single Page Application**_) o incluso aplicaciones para móviles.
    Para ello, alrededor de React existe un completo ecosistema de _módulos_, _herramientas_ y _componentes_ capaces de ayudar al desarrollador a cubrir objetivos avanzados con relativamente poco esfuerzo.
</small>

----

React representa una base sólida sobre la cual se puede **construir casi cualquier cosa con Javascript**.

----

## Principales características

- Composición de Componentes
- Desarrollo Declarativo
- Flujo de datos unidireccional
- Rendimiento gracias al DOM Virtual
- Isomorfismo
- Elementos y JSX
- Componentes con o sin estado
- Ciclo de vida de las componentes

Note:

[React](https://reactjs.org)

[Tutoriales](https://egghead.io/browse/frameworks/react)

Ver primeras componentes, ejemplos

----

## Desarrollo Declarativo

----

### Declarativo vs Imperativo

----

### Imperativo

- Librerías, como JQuery, o Vanilla Javascript
- Se crean scripts que tienen que informar en el DOM las tareas a realizar
- Se necesita escribir mucho código
- En varias ocasiones resulta inmantenible

----

### Declarativo

- Contamos con un estado de la aplicación
- Componentes responden ante la variación de ese estado
- Cuando cambiamos las propiedades de las componentes se produce un cambio en su funcionalidad

----

## Rendimiento gracias al DOM virtual

- Las operaciones que realiza React en ejecución son más rápidas.
- Se realizan sobre el DOM virtual
- Cargado en memoria permite actualizaciones de hasta 60 frames por segundo
- Sensación de fluidez

----

## Isomorfismo

- También conocido como JavaScript universal
- Capacidad de ejecutar código tanto en el cliente como en el servidor
- Soluciona problemas de posicionamiento tradicionales

----

## Elementos y JSX

El código que embebemos con ReactJS dentro de Javascript, es JSX.

- Apariencia HTML
- Utilizamos una sintaxis propia y el resultado son elementos en memoria y no DOM tradicional
- React DOM y la herramienta de diffing convierten los elementos devueltos por JSX en DOM Real

----

## Componentes

----

### Construcción

- Component
- PureComponent

Note: Mostrar la diferencia entre crear componentes desde la clase y desde una función render

----

### Propiedades

Todas las componentes pueden recibir propiedades.

Estas propiedades son **inmutables**

Veremos luego que estas propiedades pueden estar tipadas

----

#### Función constructora

CODE: frontend/react/src/props-function.js javascript editable

----

#### Sintaxis de clases

CODE: frontend/react/src/props-class.js javascript editable

----

### Estado interno

Casi todas las componentes pueden acceder y modificar su estado interno.

Este estado interno se accede directamente desde `this.state`

Pero se modifica mediante la función `this.setState`

**Nunca se debe modificar directamente el estado interno**

----


### Ciclo de vida básico

<img src="static/lifecycle-simple.jpeg" style="background:none; border:none; box-shadow:none;">

Note:

[Ciclos de vida](http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

----

### Ciclo de vida completo sin errores

<img src="static/lifecycle.jpeg" style="background:none; border:none; box-shadow:none;">

----

### Ciclo de vida para errores

- `static getDerivedStateFromError`
- `componentDidCatch`

----

### Renderizado condicional

Nos permite seleccionar que elementos mostrar dependiendo de condiciones booleanas.

----

#### Renderizado condicional simple

CODE: frontend/react/src/conditional-render-simple.js javascript

----

#### Renderizado condicional ternario

CODE: frontend/react/src/conditional-render-ternary.js javascript

----

#### Renderizado condicional

CODE: frontend/react/src/conditional-render.js javascript

----

### Renderizado de componentes mediante colecciones

Podemos recorrer una colección, utilizando los datos de cada unos de sus elementos.

Esto se puede hacer de varias maneras. La más usada es mediante la función `map` de `Array`

_Tener en cuenta que debe ser una función que retorne algo **renderizable**_

----

#### Ejemplo

CODE: frontend/react/src/people.js javascript

_El uso de parentesis nos permite obviar la sentencia return_

----

### Composición de Componentes

Uso de la propiedad `childen` de las componentes, podemos realizar composiciones de manera muy simple

----

#### Ejemplo

CODE: frontend/react/src/composition.js javascript

----

### Eventos

CODE: frontend/react/src/events.js javascript

----

### Jerarquía de componentes

React es una librería cuya estructura es orientada a objetos.

¿es recomendable utilizar jerarquías de componentes para evitar código repetido?

----

<img src="static/no.png" style="background:none; border:none; box-shadow:none;">

----

<img src="static/inheritance-react.png" style="background:none; border:none; box-shadow:none;">

----

## Ejemplos

Observaremos paso a paso ejemplos que nos permitan repasar cada uno de los conceptos mencionados.

<small>
    Los mismos son tomados de la [página oficial](https://reactjs.org/) de ReactJS.
</small>

----

### Componente Simple

CODE: frontend/react/src/simple-component.js jsx editable

----

### Componente con estado interno

CODE: frontend/react/src/stateful-component.js jsx editable

----

### Aplicación

CODE: frontend/react/src/todo-app.js jsx editable

----

### Online Playgrounds

- [CodePen](https://reactjs.org/redirect-to-codepen/hello-world)
- [CodeSandbox](https://codesandbox.io/s/new)
- [Glitch](https://glitch.com/edit/#!/remix/starter-react-template)
- [Ejemplos interactivos](https://codesandbox.io/s/github/LIFIAJS/curso-2019/tree/develop/src/examples/frontend/react)