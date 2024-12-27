<template>
    <v-container class="background-image" >
      <v-row align="center" justify="center">
        <v-col cols="12" class="text-center">
          <h1>GADM Gobierno Autónomo Descentralizado Intercultural y Plurinacional del Municipio de Cayambe</h1>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    name: 'PantallaInicio',
  };
  </script>
  
  <style scoped>
  .background-image {
    background-image: url('@/assets/fondo-cayambe.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh; /* Asegura que el contenedor ocupe toda la altura de la ventana */
    width: 100%; /* Asegura que el contenedor ocupe todo el ancho */
  }
  
  h1 {
    color: #3f51b5;
    font-size: 2vw; /* Ajusta el tamaño de fuente según el ancho de la ventana */
  }
  
  @media (max-width: 600px) {
    h1 {
      font-size: 4vw; /* Ajusta el tamaño de fuente para pantallas pequeñas */
    }
  }
  </style>