<template>
  <v-window v-model="window" show-arrows>
    <v-window-item value="listado-tenencia">
      <TabListadoTenencia/>
    </v-window-item>
    <v-window-item value="tab-tenencia">
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
    }
  }
};
</script>

<style scoped>
/* Tus estilos aquí */
</style>