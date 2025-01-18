<template>
  <v-container>
    <v-tabs v-model="tab" background-color="primary" dark class="custom-tab">
      <v-tab v-for="(item, index) in tabs" :key="index">
        {{ item }}
      </v-tab>
    </v-tabs>

    <!-- Tabs -->
    <!-- <v-window v-model="tab" show-arrows> -->
    <v-window v-model="tab">

      <v-window-item :value="0">
        <TabIdentificacion/>        
      </v-window-item> 

      <v-window-item :value="1">
        <VentanaTenencia/>
      </v-window-item>  

    </v-window>

  </v-container>
</template>

<script>
import TabIdentificacion from './TabIdentificacion.vue';
import VentanaTenencia from './VentanaTenencia.vue';


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

    VentanaTenencia,
  },
};
</script>

<style scoped>
.v-card {
  height: 200px;
}
</style>

<style>
.custom-tab .v-tab {
  color: #ffffff; 
}
</style>