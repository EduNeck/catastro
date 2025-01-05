<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="titulo-pantalla">FICHA PREDIAL</h2>
      </v-col>
      <!-- Botones -->
      <v-col cols="12" class="d-flex justify-center flex-wrap">
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-plus">Nuevo</v-btn>
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-check">Guardar</v-btn>
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-pencil">Actualizar</v-btn>
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-download">Imp. Ficha</v-btn>
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-file">Valorar</v-btn>
        <v-btn class="btn_app mx-2 my-2" append-icon="mdi-close" @click="navigateToMenuUrbano">Salir</v-btn>
      </v-col>
    </v-row>

    <!-- Primer Bloque -->
    <v-btn variant="text" color="white"  size="x-small" @click="toggleWindow">{{ isWindowVisible ? 'Cerrar' : 'Abrir' }}</v-btn>
    <v-window class="custom-window" v-show="isWindowVisible">
      <v-card-title class="window-title custom-card-title">INFORMACIÓN</v-card-title>
      <v-row justify="center">
        <v-img :src="require('@/assets/foto-predio.png')" class="my-image">Foto Predio</v-img>
        <v-img :src="require('@/assets/croquis-predio.png')" class="my-image" >Croquis Predio</v-img>
      </v-row>
    </v-window>
    <!-- Segundo Bloque -->
    <v-card class="block-color fill-width">
      <v-card-title class="centered-title">IDENTIFICACIÓN</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2">
            <v-select 
              label="Tipo Predio" v-model="form.id_tipo_predio" 
              item-text="descripcion" item-value="id" required  >
            </v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">                
            <v-select 
              label="Regimen de Propiedad" 
              v-model="form.id_regimen_propiedad"  item-text="descripcion" 
              item-value="id" 
              required >
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Clave Catastral Anterior"
              v-model="form.clave_catastral_anterior">
            </v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-text-field label="Clave Catastral"
              v-model="form.clave_catastral" disabled>
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>   
    <!-- Segundo Bloque -->
  </v-container>
</template>

<script>
export default {
  name: 'TabIdentificacion',
  data() {
    return {
      form: {
        id_predio: null, 
        id_tipo_predio: '',
        id_regimen_propiedad: '',
        clave_catastral_anterior: '',
        clave_catastral: '',
        id_prov: '17',
        id_can: '1702',
        id_par: '',
        cod_zon: '',
        cod_sec: '',
        cod_pol_man: '',
        cod_pred: '',
        cod_uni: '',
        cod_bloq: '', 
        id_tipo_piso: '',
        cod_piso: '',
        alicuota: '',
        area_terreno: '',
        area_comun_terreno: '',
        id_unidad_area: '',
        area_individual_construida: '',
        area_comun_construida: '',
        eje_principal: '',
        eje_secundario: '',
        sector: '',
        area_grafica: '',
      },

      isWindowVisible: true, // Variable para controlar la visibilidad del v-window
    };
  },

  methods: {
    navigateToMenuUrbano() {
      this.$router.push('/menu-urbano');
    },
    toggleWindow() {
      this.isWindowVisible = !this.isWindowVisible; // Alterna la visibilidad del v-window
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

.btn_app {
  background-color: #6E6E6E;
  color: #ffffff;
}

.centered-title {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  background-color: #276E90;
  color: #F1ECE7; 
  font-size: 1.0rem;
}

.custom-window {
  background-color: #F1ECE7;   
  border-radius: 2px;
}

.window-title {
  text-align: center;
  font-size: 1rem;
  color: #276E90;
  margin-bottom: 16px;
}

.custom-card-title {
  background-color: #276E90; 
  color: #F1ECE7; 
  padding: 8px;
  border-radius: 4px;
}

.my-image {
  width: 100%; 
  height: auto; 
  max-width: 300px; 
  border: 2px solid #276E90;
  border-radius: 2px;
  object-fit: cover; 
  color: #ffffff;
  text-align: center;
  text-shadow: 2px 2px 3px #000000;
  font-weight: bold;
}

.block-color {
  background-color: #F1ECE7;
  color: #114358; 
    
  
}

.fill-width { 
  width: 100%; 
}

</style>