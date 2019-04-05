## Limitaciones del estado interno

Al crecer mucho, una aplicación puede necesitar compartir datos entre componentes.

Por ejemplo en una aplicación de ventas tipo Mecadolibre.

----

### tiendalibre

Se require:

- Autenticarse con un usuario, y poder modificar sus datos
- Publicar un producto como un usuario
- Consultar un listado de productos
- Ver un producto en especifico
- Consultar el perfil de un usuario con su reputación

Entre otras cosas

----

Ahora quiero, consultar un listado de notebooks.

Entrar a consultar los detalles de unos cuantos productos.

En cada produto consultar quien es el vendedor, su reputacion y sus datos de contacto.

----

¿Se puede hacer esto sin compartir datos entre las componentes?

----

Si, pero require muchas consultas al servidor.

¿Que pasa si las consultas por cada producto y cada usuario son muy costosas?

**Quiero compartir información entre componentes.**

Esto es posible si centralizo parte de mi estado interno.

----

Por suerte para nosotros, esto ya esta solucionado.

----

## Redux

[Tutorial Redux por su creador](https://egghead.io/courses/getting-started-with-redux)

[Más referencias](https://es.redux.js.org/docs/introduccion/ecosistema.html)

----

### Los 3 principios de Redux

- El estado completo de la aplicación se representa por **un solo** objecto JS

- Este estado, es **inmutable**, toda modificación se inicia mediante **actions**

- Las modificaciones las hace efectivamente una función llamada **reducer**

Más info en <a target='_blank' href='https://es.redux.js.org/docs/introduccion/tres-principios.html'>redux</a>

----

### Estado interno

----

### Actions

----

### Reducer

----

## Ahora a practicar!

[Para ver y jugar](https://github.com/reduxjs/redux/blob/master/docs/introduction/Examples.md)