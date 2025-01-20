<template>
  <v-window v-model="window" show-arrows arrows-color="red">
    <v-window-item value="listado-tenencia">
      <TabListadoTenencia @navigateToTenencia="navigateToTenencia"/>
    </v-window-item>
    <v-window-item :key="tabTenenciaKey" value="tab-tenencia">
      <TabTenencia/>
    </v-window-item>
  </v-window>
</template>

<script>
import TabListadoTenencia from './TabListadoTenencia.vue';
import TabTenencia from './TabTenencia.vue';
import { mapGetters } from 'vuex';

export default {
  name: 'VentanaTenencia',
  data() {
    return {
      window: 'listado-tenencia',
      tabTenenciaKey: 0, // Añadir una clave para TabTenencia
    };
  },
  components: {
    TabListadoTenencia,
    TabTenencia
  },
  computed: {
    ...mapGetters(['getIdPredio'])
  },
  methods: {
    toggleTabTenencia() {
      this.window = this.window === 'listado-tenencia' ? 'tab-tenencia' : 'listado-tenencia';
    },
    navigateToTenencia() {
      this.tabTenenciaKey += 1; // Cambiar la clave para recargar el componente
      this.window = 'tab-tenencia';
    }
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>