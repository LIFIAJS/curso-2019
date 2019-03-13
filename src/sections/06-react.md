## React

----

### Principales características

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

Ver primeras componentes, ejemplos

----

## Desarrollo Declarativo

----

### Declarativo vs Imperativo

----

#### Imperativo

- Librerías, como JQuery, o Vanilla Javascript
- Se crean scripts que tienen que informar en el DOM las tareas a realizar
- Se necesita escribir mucho código
- En varias ocasiones resulta inmantenible

----

#### Declarativo

- Contamos con un estado de la aplicación
- Componentes responden ante la variación de ese estado
- Cuando cambiamos las propiedades de las componentes se produce un cambio en su funcionalidad

----

## Rendimiento gracias al DOM virtual

Las operaciones que realiza React en ejecución son más rápidas.

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

CODE: frontend/react/props-function.js javascript editable

----

```jsx
class Person extends Component {
    render() {
        const { name, surname } = this.props

        return (
            <div>
                { name } { surname }
            </div>
        )
    }
}

const Profile = () => <Person name='Tincho' surname='Brecito' />
```

----

### Estado interno

Casi todas las componentes pueden acceder y modificar su estado interno.

Este estado interno se accede directamente desde `this.state`

Pero se modifica mediante la función `this.setState`

**Nunca se debe modificar directamente el estado interno**

----



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

### Eventos

----

### Renderizado condicional

----

### Renderizado de componentes mediante colecciones

----

### Composición de Componentes

----

### Jerarquía de componentes

React es una librería cuya API es orientada a objetos.

Entonces, ¿es recomendable utilizar jerarquías de componentes para evitar código repetido?

----

<img src="static/no.png" style="background:none; border:none; box-shadow:none;">

----

<img src="static/inheritance-react.png" style="background:none; border:none; box-shadow:none;">