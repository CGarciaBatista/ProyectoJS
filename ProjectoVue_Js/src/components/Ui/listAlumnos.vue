<template>
  <base-card>
    <h2>Lista de Alumnos</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Edad</th>
          <th>Grado</th>
          <th>Seccion</th>
          <!-- Añade más encabezados según los atributos de los objetos en "alumnos" -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="al in alumnos" :key="al.nombre">
          <td>{{ al.nombre }}</td>
          <td>{{ al.edad }}</td>
          <td>{{ al.grado }}</td>
          <td>{{ al.seccion }}</td>
          <!-- Añade más celdas según los atributos de los objetos en "alumnos" -->
        </tr>
      </tbody>
    </table>
  </base-card>
</template>

<script>
export default {
  inject: ['alumnos']
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

h2 {
  text-align: center;
}

td {
  border: 1px solid #ddd;
  padding: 8px;
  color: #ddd;
  text-align: center;
  background-color: darkblue;
}

th {
  background-color: cadetblue;
  text-align: center;

  padding: 8px;
}
</style>
