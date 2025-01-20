<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="titulo-pantalla">Listado de Tenencias</h2>
      </v-col>

      <v-row>
        <v-col cols="12">
          <v-data-table
            :headers="headers"
            :items="tenencias"
            :search="search"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Tenencias</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>                
                <v-col cols="auto">
                  <v-btn class="custom-text-color" color="#114358" @click="recargarDatos">Recargar Datos</v-btn>
                </v-col>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="search"
                  append-icon="mdi-magnify"
                  label="Buscar"
                  single-line
                  hide-details
                ></v-text-field>
              </v-toolbar>
            </template>
            <template v-slot:item="{ item }">
              <tr :class="{ 'selected-row': item.id_tenencia === selectedTenenciaId }">
                <v-btn color="#F1ECE7" icon @click="selectTenencia(item.id_tenencia)">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <td>{{ item.id_tenencia }}</td>
                <td>{{ item.nombres }}</td>
                <td>{{ item.numero_documento }}</td>
                <td>{{ item.presenta_escritura ? 'Sí' : 'No' }}</td>
                <td>{{ item.forma_propiedad }}</td>
                <td>{{ item.tipo_persona }}</td>
                <td>{{ item.porcentaje_participacion }}%</td>
                <td>{{ item.regimen_propiedad }}</td>
                <td>
                </td>
              </tr>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TabListadoTenencia',

  data() {
    return {
      search: '',
      tenencias: [],
      selectedTenenciaId: null,
      headers: [
        { text: 'Acción', value: 'action', sortable: false },
        { text: 'ID Tenencia', value: 'id_tenencia' },
        { text: 'Nombres', value: 'nombres' },
        { text: 'Número de Documento', value: 'numero_documento' },
        { text: 'Presenta Escritura', value: 'presenta_escritura' },
        { text: 'Forma de Propiedad', value: 'forma_propiedad' },
        { text: 'Tipo de Persona', value: 'tipo_persona' },
        { text: 'Porcentaje de Participación', value: 'porcentaje_participacion' },
        { text: 'Régimen de Propiedad', value: 'regimen_propiedad' }        
      ]
    };
  },

  computed: {
    ...mapGetters(['getIdPredio'])
  },

  async mounted() {
    try {
      console.log('Componente montado');
      console.log('ID DEL PREDIO:', this.getIdPredio);
      await this.fetchTenencias(this.getIdPredio);
    } catch (error) {
      console.error('Error al montar el componente:', error);
    }
  },

  methods: {
    
    ...mapActions(['updateIdTenencia']), 

    // Método para recargar los datos de la tabla
    async recargarDatos() {
      try {
        console.log('Recargando datos...');
        await this.fetchTenencias(this.getIdPredio);
      } catch (error) {
        console.error('Error al recargar los datos:', error);
      }
    },

    // Método para obtener las tenencias de un predio
    async fetchTenencias(idPredio) {
      try {
        if (!idPredio || idPredio.trim() === '') {
          console.log('idPredio no está definido o está vacío');
          return;
        }
        const response = await axios.get(`http://localhost:3001/api/tenencia_by_predio/${idPredio}`);
        this.tenencias = response.data;
      } catch (error) {
        console.error('Error al obtener el listado de tenencias:', error);
      }
    },

    selectTenencia(id_tenencia) {
      this.$store.dispatch('updateIdTenencia', id_tenencia);
      this.$emit('navigateToTenencia'); // Emitir el evento para navegar
    },
  }
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

.v-data-table-header th {
  color: black !important;
}

.v-btn {
  margin-bottom: 10px;
}

.selected-row {
  background-color: #114358; 
  color: white;
}
</style>
