## Introducción a Testing en Frontend

----

### TDD (Test-driven development)

----

### Test de unidad vs Test de integración

----

### Librerías

- jest
- react-test-renderer o enzyme
- sinon

----

### jest

Librería para testing en js

Integrable con gran número de librerías para testing

----

### jest - test simple

Supongamos que tenemos una función que suma 2 números, un test simple podría ser:

```js
test('2 + 2 = 4', () => {
  expect(sum(2, 2)).toBe(4)
})
```

----

### jest - test simple (cont)

Ahora escribamos la función que pase el test

```js
function sum(x, y) {
  return x + y
}
```

¿Que pasa si solo le mando un parámetro?

----

### jest - multiples test

Supongamos que tenemos una función suma

```js
describe('Test función de suma', () => {
  it('2 + 2 = 4', () => {
    expect(sum(2, 2)).toBe(4)
  })

  it('2 = 2', () => {
    expect(sum(2)).toBe(2)
  })

  it('sum sin parámetros', () => {
    expect(sum()).toBe(0)
  })
})
```

Ahora tenemos que modificar la función para que pase este segundo test

----

### jest - multiples test (cont)

```js
function sum(x = 0, y = 0) {
  return x + y
}
```

----

### jest - API

Jest cuenta con multiples Matchers, para una lista completa [visitar](https://jestjs.io/docs/en/expect)

Para testear componentes react, jest usa otra librería, que puede ser **react-test-renderer** o **enzyme**

En el curso, veremos ejemplos con **enzyme**

----

### Enzyme

Librería orientada al test de componentes react

3 métodos principales para testing:

- shallow
- mount
- render

----

### Enzyme - shallow

Renderizado de componentes sin sus hijos

Por defecto llama a los siguientes métodos del ciclo de vida

- constructor
- render
- componentDidMount
- componentDidUpdate

__se puede configurar para que solo llame al constructor y al render__

----

### shallow - ejemplos

_Shallow simple_

```js
const wrapper = shallow(<MyComponent />)
```

_Desactivando ciclo de vida extendido_

```js
const wrapper = shallow(
  <MyComponent />,
  { disableLifecycleMethods: true }
)
```

----

### shallow - métodos

- `setProps`
- `setState`
- muchos más

[ver documentación](https://airbnb.io/enzyme/docs/api/shallow.html#shallowwrapper-api)

----

### shallow - unmount

Se puede desmontar componentes para forzar el llamado al ciclo de vida `componentWillUnmount`

```js
const wrapper = shallow(<MyComponent />)
wrapper.unmount()
```

----

### Enzyme - mount

Renderizado de componentes junto con sus hijos.

Require de un DOM (_ver jsdom, domino_)

- constructor
- render
- componentDidMount

_API similar al shallow_

----

### Enzyme - render

Solo llama al ciclo de vida `render`, pero renderizando sus hijos

Cuenta con menos overhead que mount, ya que no llama al ciclo de vida `componentDidMount`

----

### Sinon

Librería para hacer mocks de datos, funciones o hasta servidores

Útil para test de integración, donde se debe probar un ciclo completo

----

### Sinon - fakeServer

Simula rutas de un servidor, definiendo `método`, `tipo de respuesta` y `respuesta`

```js
server = sinon.createFakeServer()
server.respondWith('GET', '/api/v1.0/users', [
  200,
  { 'Content-Type': 'application/json' },
  '[{ "name": "lucasdc", "email":  "lucasdc@gmail.com" }, { "name": "ulises", "email": "ulises@gmail.com" }]'
])

axios.get('/api/v1.0/users').then(data => console.log(data))
// [{ "name": "lucasdc", "email":  "lucasdc@gmail.com" }, { "name": "ulises", "email": "ulises@gmail.com" }]

// No olvidar la respuesta del servidor
server.respond()
```

----

### Sinon - fakeServer - respondImmediately

O configurando la respuesta automática

```js
server = sinon.createFakeServer({ respondImmediately: true })
server.respondWith('GET', '/api/v1.0/users', [
  200,
  { 'Content-Type': 'application/json' },
  '[{ "name": "lucasdc", "email":  "lucasdc@gmail.com" }, { "name": "ulises", "email": "ulises@gmail.com" }]'
])

axios.get('/api/v1.0/users').then(data => console.log(data))
// [{ "name": "lucasdc", "email":  "lucasdc@gmail.com" }, { "name": "ulises", "email": "ulises@gmail.com" }]
```

----

### Links de interés

https://reactjs.org/docs/test-utils.html

https://reactjs.org/docs/test-renderer.html

https://jestjs.io/docs/en/tutorial-react

https://airbnb.io/enzyme/

https://sinonjs.org/

https://sinonjs.org/releases/latest/fake-xhr-and-server/