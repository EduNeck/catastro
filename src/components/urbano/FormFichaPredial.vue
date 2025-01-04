<template>
  <v-container>
    <v-tabs v-model="tab" background-color="primary" dark>
      <v-tab v-for="(item, index) in tabs" :key="index">
        {{ item }}
      </v-tab>
    </v-tabs>

    <v-window v-model="tab" show-arrows>
      <v-window-item :value="0">
        <TabIdentificacion />        
      </v-window-item> 
    </v-window>



  </v-container>
</template>

<script>

import TabIdentificacion from './TabIdentificacion.vue';

export default {
  name: 'FormFichaPredial',
  data() {
    return {
      tab: 0,
      tabs: [
        'Identificación',
        'Legal',
        'Características',
        'Vías',
        'Construcciones',
        'Obras',
        'Observaciones',
        'Vivienda',
        'Foto Fachada'
      ],
    };
  },
  components: {
    TabIdentificacion,
  },
};
</script>

<style scoped>
.v-card {
  height: 200px;
}
</style>