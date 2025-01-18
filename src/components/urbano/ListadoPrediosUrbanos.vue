<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="titulo-pantalla">Listado de Predios Urbanos</h2>
      </v-col>
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-plus" @click="navigateToFormFichaPredial">Nuevo</v-btn>
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-close" @click="navigateToMenuUrbano">Salir</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="predios"
          :search="search"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title>Predios Urbanos</v-toolbar-title>
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                label="Buscar Predio"
                single-line
                hide-details
              ></v-text-field>
            </v-toolbar>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small @click="editItem(item)">mdi-pencil</v-icon>
          </template>
          <template v-slot:[`item.id_predio`]="{ item }">
            {{ item.id_predio }}
          </template>
          <template v-slot:[`item.clave_catastral`]="{ item }">
            {{ item.clave_catastral }}
          </template>
          <template v-slot:[`item.clave_catastral_anterior`]="{ item }">
            {{ item.clave_catastral_anterior }}
          </template>
          <template v-slot:[`item.tipo_predio`]="{ item }">
            {{ item.tipo_predio }}
          </template>
          <template v-slot:[`item.regimen_propiedad`]="{ item }">
            {{ item.regimen_propiedad }}
          </template>
          <template v-slot:[`item.parroquia`]="{ item }">
            {{ item.parroquia }}
          </template>
          <template v-slot:[`item.eje_principal`]="{ item }">
            {{ item.eje_principal }}
          </template>
          <template v-slot:[`item.eje_secundario`]="{ item }">
            {{ item.eje_secundario }}
          </template>
          <template v-slot:[`item.sector`]="{ item }">
            {{ item.sector }}
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ListadoPrediosUrbanos',
  data() {
    return {
      search: '',
      headers: [
        { text: 'Acciones', value: 'actions', sortable: false },
        { text: 'ID Predio', value: 'id_predio' },
        { text: 'Clave Catastral', value: 'clave_catastral' },
        { text: 'Clave Catastral Anterior', value: 'clave_catastral_anterior' },
        { text: 'Tipo Predio', value: 'tipo_predio' },
        { text: 'Régimen Propiedad', value: 'regimen_propiedad' },
        { text: 'Parroquia', value: 'parroquia' },
        { text: 'Eje Principal', value: 'eje_principal' },
        { text: 'Eje Secundario', value: 'eje_secundario' },
        { text: 'Sector', value: 'sector' },
        
      ],
      predios: []
    };
  },
  async created() {
    await this.fetchPredios();
  },
  methods: {
    async fetchPredios() {
      try {
        const response = await axios.get('http://localhost:3001/api/ficha_predio');
        this.predios = response.data;
      } catch (error) {
        console.error('Error al obtener el listado de predios:', error);
      }
    },
    navigateToFormFichaPredial() {
      this.$router.push('/ficha-predial-urb');
    },
    navigateToMenuUrbano() {
      this.$router.push('/menu-urbano');
    },
    editItem(item) {      
      const idPredio = item.id_predio;
      this.$router.push({ path: '/ficha-predial-urb', query: { id_predio: idPredio } });
    },
  },
};
</script>

<style scoped>
.titulo-pantalla {
  font-size: 2rem;
  color: #ffffff;
}

.container {
  background-color: #114358;
}

.btn_app {
  background-color: #276E90;
  color: #ffffff;
}
</style>
