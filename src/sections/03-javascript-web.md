## JavaScript en la Web

----

- DOM
- Objetos predefinidos
  - window
  - document
  - console (accesible en todo entorno de JS)
  - ...
- Selectores
- Eventos

Note: Ejemplos

----

### Interfaz Window

Representa una ventana (window) que contiene un DOM.

Cuenta con la propiedad `document` que representa el DOM cargado en esa ventana.

Todos los navegadores cuentan con una instancia de la ventana actual, almacenada en la variable global `window`

----

### Constructores de Window

- DOMParser
- Image
- Worker

----

### Propiedades de Window

- console: Consola del navegador
- history: Interfaz para manejar el historial de sesión del navegdor
- location: Ubicación actual, puede cambiarse
- document: Documento DOM cargado en la ventana
- localStorage: Almacenamiento del navegador
- sessionStorage: Almacenamiento de la sesión
- naviagator: Información del navegador

Y muchas más

----

### Métodos de Window

- alert(message)
- close()
- confirm(message)
- find(aString, aCaseSensitive, aBackwards, aWrapAround, aWholeWord, aSearchInFrames, aShowDialog)

----

### Interfaz Document

Sirve para comunicarse e interactuar con un DOM

Hereda de `Node`

En el navegador contamos con una variable global `document` que nos permite acceder al DOM cargado en `window`

<small>Esta variable document es una propiedad de la variable `window`, luego veremos porque podemos accederla de esta forma</small>

NOTE:
https://developer.mozilla.org/en-US/docs/Web/API/Document

----

### Propiedades de Document

- body
- location
- defaultView
- cookie (HTML5)

----

### Métodos de Document

- createElement(tagName[, options])
- getElementsByClassName(name)
- getElementsByName(name)
- getElementById(id)
- querySelector(selectors)
- querySelectorAll(selectors)

----

### Interfaz Node

Sirve para interactuar con un nodo específico del DOM

Hereda de `EventTarget`

----

### Propiedades de Node

- childNodes
- firstChild
- lastChild
- nodeName
- nodeType
- parentNode
- parentElement
- textContent

----

### Métodos de Node

- appendChild(Node)
- cloneNode([deep])
- isEqualNode(otherNode)
- isSameNode(otherNode)
- normalize()
- removeChild(child)
- replaceChild(newChild, oldChild)

----

### Interfaz EventTarget

Nos permite interactuar con eventos, asignarlos a elementos (como window, document, nodos, etc)

La interfaz es muy simple, cuenta con solo 3 métodos

----

### Métodos de EventTarget

- addEventListener(type, listener[, options])
- removeEventListener(type, listener[, options])
- target.dispatchEvent(event)

----

### Tipos de eventos

Hay muchos eventos, los más comunes son

- click
- keydown | keypress | keyup
- focus
- cut | copy | paste
- ...

https://developer.mozilla.org/en-US/docs/Web/Events

----

### Práctica

Dado un HTML, se debe poder completar la funcionalidad de una lista de tareas básica.

Se debe poder:

- Listar las tareas pendientes
- Listar las tareas finalizadas
- Crear una tarea nueva
- Finalizar una tarea

_No pueden existir 2 tareas **en curso** llamadas igual._

Se debe poder limpiar el listado

----

### Forma antigua de usar JS

- JQuery / Selectors
- Manejo directo sobre el DOM
- Eventos
- Lenguaje para "efectos" en la web

----

### Problematicas comunes de este enfoque

- index.html con muchos tags script
  - Dependencias cruzadas?
  - No hay nada parecido a un import, require o include en un navegador
- No queremos programar mas en Vanilla. Queremos un require!
  - Transpilación