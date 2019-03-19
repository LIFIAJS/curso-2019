## Frontend

----

### Librerías y Frameworks

- Angular
- Vue
- React
- ...

----

## Angular

----

### Ventajas

- Se crea con la finalidad de utilizar TypeScript, dandole gran soporte al mismo.
- Angular-language-service: Templating
- Generadores de código basados en librerías de npm utilizando CLI.
  <small>
    Permiten generar código para distintas WebComponents basadas en Angular.
  </small>
- Documentación detallada.

----

- MVVM (Model - View - ViewModel) permite a los desarrolladores trabajar por separado en una misma aplicación.
- Inyección de dependencias para los atributos relacionados a las componentes con módulos y modularización en general.
- Estructura y arquitectura creada especificamente para escalabilidad.

----

### Desventajas

- Gran variedad de estructuras diferentes hacen que sea más dificil de aprender en comparación a React y Vue.js
  - Injectables
  - Components
  - Pipes
  - Modules
  - ...

----

- Es "menos performante", de acuerdo a algunos benchmarks.
  <small>
    Sin embargo, esta baja de performance se puede resolver utilizando las denominadas _ChangeDetectionStrategy_, que permite controlar el renderizado de las componentes manualmente.
  </small>

----

## Vue.js

----

### Ventajas

- Tiene características similares a Angular.
- Documentación Detallada.
- Adaptabilidad
  <small>
    Permite un rapido cambio entre cualquiera de los frameworks a Vue.js.
  </small>
- Puede ser utilizado para SPA (**Single Page Application**) o interfaces más complejas.
- Reutilización de templates.
- Pequeño: ~20kb.

----

### Desventajas

- Comparado con React y Angular, se cuenta con menos conocimiento sobre Vue.js
  <small>
    Vue.js se corresponde con una mercado mucho menor.
  </small>
- Demasiada flexibilidad.

----

## React

----

### Ventajas

- Facil de aprender, gracias a su diseño simple, uso de JSX para templating y detallada documentación.
- Los desarrolladores pasan más tiempo programando en JS y menos tiempo preocupandose por los detalles del framework.
- Extremadamente rápido, devido al DOM Virtual.
  <small>
    Lo veremos con más detalle.
  </small>

----

- Buen soporte para Server Side Rendering (SSR)
- Enlace de datos (Data-binding) unidireccional.
  <small>
    Significa menor cantidad de _side effects_.
  </small>
- Redux, la librería más utilizada para manejo de estado de aplicaciones React.
- Implementa conceptos de Programación Funcional (**FP** del inglés _Functional Programming_).

----

- Las aplicaciones pueden desarrollarse en forma tipada utilizando TypeScript o [Flow](https://flow.org/), con soporte para JSX.
- Migrar entre versiones es generalmente simple.
- Las cosas aprendidas en React pueden ser aplicadas (muchas veces en forma directa) al desarrollo en React Native.

----

### Desventajas

- React no cuenta con buenas prácticas implicitas y deja que los desarrolladores tomen decisiones sobre la mejor manera de desarrollar.
  <small>
    Esto se puede abordar mediante un fuerte liderazgo de proyectos y buenos procesos.
  </small>
- CSS Modules and CSS-in-JS.
- React está dejando de lado las componentes basadas en clases.
- Mezclar templates con lógica de la aplicación puede ser confuso al inicio.