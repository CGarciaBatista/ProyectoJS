class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }
}

// Clase Alumno que hereda de Persona
// eslint-disable-next-line no-unused-vars
class Alumno extends Persona {
  constructor(nombre, edad, grado, seccion) {
    super(nombre, edad)
    this.grado = grado
    this.seccion = seccion
  }
}

export { Persona, Alumno }
