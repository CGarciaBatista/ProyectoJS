<template>
  <base-card>
    <form @submit.prevent="updateSubmit">
      <div id="header">
        <h2>Actualizar Grado de Alumno</h2>
      </div>

      <label for="nombreAlumno"> Nombre de Alumno</label>
      <input type="text" name="nombreAlumno" id="nombreAlumno" ref="inpNombre" />
      <label for="nuevoGrado">Nuevo Grado</label>
      <input type="text" name="nuevoGrado" id="nuevoGrado" ref="inpGrado" />

      <card-button type="submit"> Actualizar Grado</card-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['updateAlumno'],
  data() {
    return {
      invalidInp: false
    }
  },
  methods: {
    updateSubmit() {
      const nombre = this.$refs.inpNombre.value
      const grado = this.$refs.inpGrado.value
      if (nombre.trim() === '' || grado.trim() === '') {
        this.invalidInp = true
        this.invalid()
      }

      this.updateAlumno(nombre, grado)
    },
    invalid() {
      alert('Alguna de las entradas no es valida')
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.9rem;
  text-align: center;
  color: whitesmoke;
  background-color: darkblue;
  padding: 0.4rem;
  border-radius: 15px;
  width: 60%;
  margin-left: 3.5rem;
}

button {
  width: 100%;
}

#header {
  text-align: center;
  background-color: cadetblue;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
}

input {
  display: block;
  width: 80%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
  margin: 1rem 0;
  margin-left: 1.5rem;
  border-radius: 12px;
}

input:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
