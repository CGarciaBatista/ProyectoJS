<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div id="header">
        <h2>Agregar Alumno</h2>
      </div>

      <label for="nombre">Nombre</label>
      <input type="text" name="nombre" id="nombre" ref="inpNombre" />
      <label for="edad">Edad</label>
      <input type="text" name="edad" id="edad" ref="inpEdad" />
      <label for="grado">Grado</label>
      <input type="text" name="grado" id="grado" ref="inpGrado" />
      <label for="seccion">Seccion</label>
      <input type="text" name="seccion" id="seccion" ref="inpSeccion" />

      <card-button type="submit"> Submit </card-button>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addAlum'],
  data() {
    return {
      inputIsInvalid: false
    }
  },
  methods: {
    submitData() {
      const name = this.$refs.inpNombre.value
      const edad = this.$refs.inpEdad.value
      const grado = this.$refs.inpGrado.value
      const seccion = this.$refs.inpSeccion.value

      if (
        name.trim() === '' ||
        edad.trim() === '' ||
        grado.trim() === '' ||
        seccion.trim() === ''
      ) {
        this.inputIsInvalid = true
        this.invalid()
        return
      }

      if (!Number.isInteger(Number(edad))) {
        this.inputIsInvalid = true
        this.invalid()
        return
      }

      this.addAlum(name, edad, grado, seccion)
        .then((message) => {
          console.log(message)
        })
        .catch((error) => {
          console.error(error)
        })
    },

    invalid() {
      if (this.inputIsInvalid) {
        alert('Alguna de las entradas no es valida ')
      }
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
  width: 30%;
  margin-left: 6.5rem;
}

button {
  width: 100%;
}

#header {
  text-align: center;
  background-color: cadetblue;
  border-radius: 12px;
  padding: 0.5rem;
  margin-bottom: 2rem;
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
