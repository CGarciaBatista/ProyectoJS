<template>
  <the-header></the-header>
  <the-operations></the-operations>
</template>

<script>
import TheHeader from './components/Layouts/TheHeader.vue'
import TheOperations from './components/Operations/TheOperations.vue'
// eslint-disable-next-line no-unused-vars
export default {
  components: {
    TheHeader,
    TheOperations
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
