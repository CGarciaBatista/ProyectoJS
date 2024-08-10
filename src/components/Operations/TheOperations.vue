<template>
  <div id="btn">
    <card-button @click="setOp('add-Alumno')" :mode="addAl"> Agregar Alumno</card-button>
    <card-button @click="setOp('updateGrade-Alumno')" :mode="updateAl"
      >Actualizar Grado de Alumno</card-button
    >
  </div>

  <div id="sec">
    <keep-alive>
      <component id="sec1" :is="selectedComp"></component>
    </keep-alive>
    <list-alumnos id="sec2"></list-alumnos>
  </div>
</template>

<script>
import addAlumno from './addAlumno.vue'
import updateGradeAlumno from './updateGradeAlumno.vue'
import listAlumnos from '../Ui/listAlumnos.vue'
// eslint-disable-next-line no-unused-vars
import { Persona, Alumno } from '../Classes/Clases'
export default {
  components: {
    addAlumno,
    updateGradeAlumno,
    listAlumnos
  },
  data() {
    return {
      selectedComp: 'add-Alumno',
      alumnos: [
        new Alumno('Carlos', 21, '2do', 'Informatica'),
        new Alumno('Felix', 21, '2do', 'Informatica'),
        new Alumno('Roger', 20, '2do', 'Informatica')
      ]
    }
  },
  computed: {
    addAl() {
      return this.selectedComp === 'add-Alumno' ? null : 'flat'
    },
    updateAl() {
      return this.selectedComp === 'updateGrade-Alumno' ? null : 'flat'
    }
  },
  provide() {
    return {
      addAlum: this.agregarAlumno,
      updateAlumno: this.updateAlumno,
      alumnos: this.alumnos,
      alumno: Alumno
    }
  },
  methods: {
    setOp(cmp) {
      this.selectedComp = cmp
    },
    agregarAlumno(nombre, edad, grado, seccion) {
      return new Promise((resolve, reject) => {
        try {
          this.alumnos.push(new Alumno(nombre, edad, grado, seccion))
          console.log(this.alumnos)
          this.selectedComp = 'add-alumno'
          resolve('Alumno agregado exitosamente')
        } catch (error) {
          reject('Error al agregar alumno')
        }
      })
    },
    updateAlumno(nombre, nuevoGrado) {
      const alumno = this.alumnos.find((al) => al.nombre === nombre)
      if (alumno) {
        alumno.grado = nuevoGrado
      }
    }
  }
}
</script>

<style scoped>
#sec {
  display: flex;

  width: 60%;
  justify-content: center;
  align-items: baseline;
  margin: auto;

  /* Solo para visualización */
}

#sec1,
#sec2 {
  flex: 1;
}
#btn {
  width: 30%;
  display: flex;
  margin: auto;
  justify-content: center;
}
</style>
