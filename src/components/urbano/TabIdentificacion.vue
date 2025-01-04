<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h2>Identificación</h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <!-- Aquí puedes agregar más contenido relacionado con la identificación -->
        <v-text-field label="Nombre" v-model="nombre"></v-text-field>
        <v-text-field label="Apellido" v-model="apellido"></v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TabIdentificacion',
  data() {
    return {
      nombre: '',
      apellido: ''
    };
  },
};
</script>

<style scoped>
/* Aquí puedes agregar estilos específicos para este componente */
</style>