<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          {{ organizationName }}
        </h1>  
      </v-col>  
      <v-col cols="12">
        <v-btn color="primary" @click="$router.push('/login')">INGRESO</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

import { textVariables } from '@/config/textVariables';

export default {
  name: 'PantallaInicio',
  data() {
    return {
      organizationName: textVariables.organizationName
    }
  }
};

</script>

<style scoped>
h1 {
  color: #3f51b5;
  font-size: 2vw; /* Ajusta el tamaño de fuente según el ancho de la ventana */
}
</style>