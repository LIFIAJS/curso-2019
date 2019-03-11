## Patrones en React

----

En React pueden encontrarse varios patrones de diseño, desde clasicos como el caso del Template method,
hasta patrones modernos.

----

### Patrones modernos

- Container-Presentational
- Componentes de alto orden (Higher order components or HOC’s)
- Render callback

----

### Container-Presentational

En este patrón se distinguen entre componentes de UI y componentes de lógica.
A las componentes de UI las llamaremos **presentational components**, y a las componentes de lógica las llamaremos **containers**

----

### Contenedor

Un contenedor es una componente que guarda toda la lógica de negocio de frontend de nuestra aplicación
(o casi toda, esto lo veremos luego)

El contenedor debería preparar todos los datos necesarios para que una componente los renderice

----

### Componentes de presentación

Una componente de presentación debería ser una componente sin estado, que solo se ocupe de renderizar los datos
que recibió en sus propiedades

----

### Componentes de alto orden

De igual manera que en funciona, una función de alto orden es aquella recibe y retorna una función,
las componentes de alto orden son aquellas que reciben una componente, y retorna una nueva componente.

----

### Render callback