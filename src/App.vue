<template>
  <v-app>
    <v-main>
      <PantallaInicio/>
    </v-main>
  </v-app>
</template>

<script>

import PantallaInicio from './components/PantallaInicio.vue';

export default {
  name: 'App',

  components: {    
    PantallaInicio,
  },

  data: () => ({
    //
  }),
}
</script>
