function Person(name, lastname, age) {
  this.name = name
  this.lastname = lastname
  this.age = age

  // Esto funciona
  this.getName = () => this.name
  this.getAge = function() {
    return this.age
  }
}

l = new Person('Lucas', 'Di Cunzolo', 22)

// Puedo agregar un metodo de esta manera
l.getLastname = function() {
  return this.lastname
}

// Pero esto no funciona
l.getFullname = () => this.name + ' ' + this.lastname

console.log(l.getName())
console.log(l.getLastname())
console.log(l.getAge())
console.log(l.getFullname())

// Aunque si se corrige
l.getFullname = function() {
  return `${this.getName()} ${this.getLastname()}`
}

console.log(l.getFullname())
