<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="titulo-pantalla">FICHA CATASTRAL - IDENTIFICACIÓN</h2>
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
              label="Tipo Predio" v-model="form.id_tipo_predio" :items="tipoPredios"
              item-text="descripcion" item-value="id" required   >
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
    <v-card class="block-color fill-width">
      <v-card-title class="centered-title">CLAVE CATASTRAL</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2" class="bold-text large-text">         
              Provincia Pichincha: {{ form.id_prov }}            
          </v-col>
          <v-col cols="12" sm="6" md="2" class="bold-text large-text">           
              Cantón Cayambe: {{ form.id_can }}            
          </v-col>

          <v-col cols="12" sm="6" md="3">
            <v-select
              label="Parroquia" v-model="form.id_par" :items="formattedParroquias"
              item-text="descripcion" item-value="dpa" required @input="updateClaveCatastral">
            </v-select>
          </v-col>

          <v-col cols="12" sm="6" md="1">
            <v-text-field
              label="Zona"
              color="#F2AA1F"
              v-model="form.cod_zon"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 9 || 'Debe ser un número entre 1 y 9']"
              maxlength="1" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 1)"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
              label="Sector"
              color="#F2AA1F"
              v-model="form.cod_sec"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 9 || 'Debe ser un número entre 1 y 9']"
              maxlength="1" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 1)">
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="1">
            <v-text-field
              label="Pol/Manzana"
              color="#F2AA1F"
              v-model="form.cod_pol_man"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 999 || 'Debe ser un número entre 1 y 999']"
              maxlength="3" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 3)">
            </v-text-field>
          </v-col>          
          <v-col cols="12" sm="6" md="1" >
            <v-text-field
              label="Predio"
              color="#F2AA1F"
              v-model="form.cod_pred"
              type="number"
              :rules="[v => !!v && v >= 1 && v <= 999 || 'Debe ser un número entre 1 y 999']"
              maxlength="3" @input="updateClaveCatastral"
              @keypress="limitDigits($event, 3)">
            </v-text-field>
          </v-col> 
      </v-row> 
      </v-card-text> 
    </v-card>     
    <!-- Tercer Bloque -->
    <v-card class="mb-3 block-color fill-width" v-if="form.id_regimen_propiedad === 4">
      <v-card-title class="centered-title">PROPIEDAD HORIZONTAL</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-text-field 
                label="Unidad" 
                color="#F2AA1F" 
                v-model="form.cod_uni"               
                type="number"
                :rules="[v => !!v && v >= 0 && v <= 999 || 'Debe ser un número entre 0 y 999']"
                maxlength="3"
                @input="updateClaveCatastral"></v-text-field> 
            </v-col> 
            <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-text-field 
                label="Bloque" 
                color="#F2AA1F" 
                v-model="form.cod_bloq"
                type="number"
                :rules = "[v => !!v && v >= 0 && v <= 999 || 'Debe ser un número entre 0 y 999']"
                maxlength="3"
                @input="updateClaveCatastral"></v-text-field> 
            </v-col> 
            <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-select
              label="Tipo de Piso" v-model="form.id_tipo_piso" :items="tipoPisos" 
              item-text="descripcion" item-value="id" required color="#F2AA1F" 
              @input="updateClaveCatastral">
            </v-select> 
            </v-col> 
            <v-col cols="12" sm="6" md="2" v-if="form.id_regimen_propiedad === 4"> 
              <v-text-field 
                label="Piso" 
                color="#F2AA1F" 
                v-model="form.cod_piso"
                type="number"
                :rules = "[v => !!v && v >= 0 && v <= 99 || 'Debe ser un número entre 0 y 99']"
                maxlength="2"
                @input="updateClaveCatastral"></v-text-field> 
          </v-col>        
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Tercer Bloque -->
    <v-card class="mb-3 block-color fill-width" v-if="form.id_regimen_propiedad === 4">
      <v-card-title class="centered-title">ÁREAS</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Alicuota" 
             color = #F2AA1F 
             v-model="form.alicuota" 
             type="number"
             >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área de Terreno" 
             color = #F2AA1F 
             v-model="form.area_terreno" 
             type="number" 
             >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Común de Terreno" 
             color = #F2AA1F 
             v-model="form.area_comun_terreno" 
             type="number"
              >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">                
            <v-select 
              :items="unidadAreas"
              label="Unidad de Área" 
              v-model="form.id_unidad_area" 
              item-text="descripcion" 
              item-value="id" 
              required color="#F2AA1F"
            ></v-select>
          </v-col>          
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Individual Construida" 
             color = #F2AA1F 
             v-model="form.area_individual_construida" 
             type="number"
             >
            </v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área Común Construida" 
             color = #F2AA1F 
             v-model="form.area_comun_construida" 
             type="number"
             >
            </v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>  

     <!-- Cuarto Bloque -->
    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">EJES VIALES</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Eje Principal" color = #F2AA1F v-model="form.eje_principal"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Eje Secundario" color = #F2AA1F v-model="form.eje_secundario"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field label="Sector" color = #F2AA1F v-model="form.sector"></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4">
            <v-text-field
              label="Área Gráfica" 
              v-model="form.area_grafica" 
              readonly
             >
            </v-text-field>
          </v-col>          
        </v-row>
      </v-card-text>
    </v-card>
    <!-- Botón -->    
    <v-row justify="center">
      <v-col cols="auto">
        <v-btn class="custom-text-color" color=#114358 @click="guardar">Guardar</v-btn>
      </v-col>
    </v-row>     
    <!-- Sexto Bloque -->                    
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  // Nombre del componente
  name: 'TabIdentificacion',

  data() {    
    return {      
      isWindowVisible: true,
      
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
      // Catálogos
      tipoPredios: [],
      regimens: [],
      tipoPisos: [],
      unidadAreas: [],
      parroquias: [],
      idPredio: null,
     };     
  },

  // Crea el componente Id del predio
  created() {
    const idPredio = this.$route.query.id_predio;
    console.log('ID del predio recibido:', idPredio);
    if (idPredio) {
      this.id_predio = idPredio;
      this.fetchPredio(idPredio);
    }
  },

  async mounted() {
    // Cargar catálogos
    try {
      console.log('Componente montado');
      this.tipoPredios = await this.fetchCatalogo(1); // Obtén los datos para el tipo de persona
      this.regimens = await this.fetchCatalogo(2); // Obtén los datos para el tipo de persona
      this.tipoPisos = await this.fetchCatalogo(3); // Obtén los datos para el tipo de persona
      this.unidadAreas = await this.fetchCatalogo(8); // Obtén los datos para el tipo de area
      this.parroquias = await this.fetchParroquia(); // Obtén los datos para el tipo de persona
      console.log('Datos del catálogo cargados:', this.tipoPredios, this.regimens, this.tipoPisos);
      console.log('Datos de parroquias cargados:', this.parroquias);
    } catch (error) {
      console.error('Error al montar el componente:', error);
    }    
  }, 
  
  // Cancatenar descripción de parroquia
  computed: {
    formattedParroquias() {
      return this.parroquias.map(parroquia => ({
        ...parroquia,
        descripcion: `${parroquia.dpa} - ${parroquia.descripcion}`
      }));
    },
    isUpdateMode() {
      return this.idPredio !== null;
    }
  },

  // Métodos del componente
  methods: {
    // Obtener parroquia
    async fetchParroquia() {
      try {
        const response = await axios.get('http://localhost:3001/api/catastro_parroquia');
        return response.data;
      } catch (error) {
        console.error('Error fetching parroquia:', error);
        return [];
      }
    },
    // Obtener catálogo
    async fetchCatalogo(id_tipo_atributo) {
      try {
        const response = await axios.get('http://localhost:3001/api/catalogo', {
          params: { id_tipo_atributo }
        });
        console.log(`Datos obtenidos para id_tipo_atributo ${id_tipo_atributo}:`, response.data);
        return response.data;
      } catch (error) {
        console.error('Error fetching catalogo:', error);
        throw new Error('No se pudo obtener el catálogo');
      }
    },

    // Obtener área del predio
    async fetchAreaPredio() {
      const claveCatastral = this.form.clave_catastral;
      if (!claveCatastral) {
        console.log('Clave catastral no definida');
        return;
      }
      try {
        console.log('Realizando solicitud para obtener el área del predio con clave catastral:', claveCatastral);
        const response = await axios.get(`http://localhost:3001/api/geo_consultas/area_predio/${claveCatastral}`);
        const areaPredio = response.data;
        console.log('Área del predio recuperada:', areaPredio);
        this.form.area_grafica = areaPredio.area; // Asigna el área recuperada al campo "area_grafica"
        console.log('Área gráfica asignada:', this.form.area_grafica);
      } catch (error) {
        console.error('Error fetching area del predio:', error);
      }
    },

    // Guardar formulario
    async guardar() {
      console.log('Guardando formulario:');            
      const nuevoPredio = { 
        id_tipo_predio: this.form.id_tipo_predio, 
        id_regimen_propiedad: this.form.id_regimen_propiedad, 
        clave_catastral_anterior: this.form.clave_catastral_anterior, 
        clave_catastral: this.form.clave_catastral, 
        id_prov: this.form.id_prov, 
        id_can: this.form.id_can, 
        id_par: this.form.id_par, 
        cod_zon: this.form.cod_zon, 
        cod_sec: this.form.cod_sec,
        cod_pol_man: this.form.cod_pol_man,
        cod_pred: this.form.cod_pred,
        eje_principal: this.form.eje_principal,
        eje_secundario: this.form.eje_secundario,
        sector: this.form.sector
      };

      if (this.form.id_regimen_propiedad === 4) {
        // Si el régimen de propiedad es PROPIEDAD HORIZONTAL - PH (código 4)
        nuevoPredio.cod_uni = this.form.cod_uni;
        nuevoPredio.cod_bloq = this.form.cod_bloq;
        nuevoPredio.id_tipo_piso = this.form.id_tipo_piso;
        nuevoPredio.cod_piso = this.form.cod_piso;
        nuevoPredio.alicuota = this.form.alicuota;
        nuevoPredio.area_terreno = this.form.area_terreno;
        nuevoPredio.area_comun_terreno = this.form.area_comun_terreno;
        nuevoPredio.id_unidad_area = this.form.id_unidad_area;
        nuevoPredio.area_individual_construida = this.form.area_individual_construida;
        nuevoPredio.area_comun_construida = this.form.area_comun_construida;
      } else {
        // Si el régimen de propiedad no es PROPIEDAD HORIZONTAL - PH (código 4)
        nuevoPredio.cod_uni = 0;
        nuevoPredio.cod_bloq = 0;
        nuevoPredio.id_tipo_piso = 5;
        nuevoPredio.cod_piso = 0;
        nuevoPredio.alicuota = null;
        nuevoPredio.area_terreno = null;
        nuevoPredio.area_comun_terreno = null;
        nuevoPredio.id_unidad_area = null;
        nuevoPredio.area_individual_construida = null;
        nuevoPredio.area_comun_construida = null;
      }

      console.log('Datos a guardar:', nuevoPredio);

      try {
        const response = await axios.post('http://localhost:3001/api/catastro_predio', nuevoPredio);
        const idPredio = response.data.id;
        console.log('ID del nuevo registro:', idPredio);
        alert('Predio guardado exitosamente');
        // Aquí puedes usar newRecordId como clave foránea para los siguientes recursos
      } catch (error) {
        console.error('Error al guardar el predio:', error);
        alert(`Error al guardar el predio: ${error.response.data.detail}`);
      }
    },

    // Actualizar formulario
    async actualizar() {
      console.log('Actualizando identificación');
      const identificacion = {
        id_tipo_predio: this.form.id_tipo_predio,
        id_regimen_propiedad: this.form.id_regimen_propiedad,
        clave_catastral_anterior: this.form.clave_catastral_anterior,
        clave_catastral: this.form.clave_catastral,
        id_prov: this.form.id_prov,
        id_can: this.form.id_can,
        id_par: this.form.id_par,
        cod_zon: this.form.cod_zon,
        cod_sec: this.form.cod_sec,
        cod_pol_man: this.form.cod_pol_man,
        cod_pred: this.form.cod_pred,
        eje_principal: this.form.eje_principal,
        eje_secundario: this.form.eje_secundario,
        sector: this.form.sector
      };
    
      console.log('Datos a actualizar:', identificacion);

      try {
        const response = await axios.put(`http://localhost:3001/api/catastro_predio/${this.id_predio}`, identificacion);
        console.log('Identificación actualizada:', response.data);
        this.snackbarMessage = 'Datos actualizada exitosamente';
        this.snackbar = true;
      } catch (error) {
        console.error('Error al actualizar la identificación:', error);
        this.snackbarMessage = 'Error al actualizar la identificación';
        this.snackbar = true;
      }
    },

    // Limpiar Campos
    limpiarCampos() {
      console.log('Limpiando campos');
      this.id_predio = null;
      this.form.alicuota = '';
      this.form.area_terreno = '';
      this.form.area_comun_terreno = '';
      this.form.id_unidad_area = '';
      this.form.area_individual_construida = '';
      this.form.area_comun_construida = '';
      this.form.cod_pred = '';
      this.form.cod_uni = '';
      this.form.cod_bloq = '';
      this.form.id_tipo_piso = '';
      this.form.cod_piso = '';
      this.form.eje_principal = '';
      this.form.eje_secundario = '';
      this.form.sector = '';
    },

    // Limitar dígitos
    limitDigits(event, maxDigits) {
      const input = event.target;
      if (input.value.length >= maxDigits) {
        event.preventDefault();
      }
    },

    async fetchPredio(idPredio) {
      try {
        const response = await axios.get(`http://localhost:3001/api/catastro_predio/${idPredio}`);
        const predio = response.data;
        console.log('Datos del predio:', predio);
        this.form = {
          id_tipo_predio: predio.id_tipo_predio,
          id_regimen_propiedad: predio.id_regimen_propiedad,
          clave_catastral_anterior: predio.clave_catastral_anterior,
          clave_catastral: predio.clave_catastral,
          id_prov: predio.id_prov,
          id_can: predio.id_can,
          id_par: predio.id_par,
          cod_zon: predio.cod_zon,
          cod_sec: predio.cod_sec,
          cod_pol_man: predio.cod_pol_man,
          cod_pred: predio.cod_pred,
          cod_uni: predio.cod_uni,
          cod_bloq: predio.cod_bloq,
          id_tipo_piso: predio.id_tipo_piso,
          cod_piso: predio.cod_piso,
          alicuota: predio.alicuota,
          area_terreno: predio.area_terreno,
          area_comun_terreno: predio.area_comun_terreno,
          id_unidad_area: predio.id_unidad_area,
          area_individual_construida: predio.area_individual_construida,
          area_comun_construida: predio.area_comun_construida,
          eje_principal: predio.eje_principal,
          eje_secundario: predio.eje_secundario,
          sector: predio.sector,
          area_grafica: predio.area_grafica,
        };
        this.idPredio = idPredio;
        await this.fetchAreaPredio(predio.area_grafica);
      } catch (error) {
        console.error('Error fetching predio:', error);
      }
    },

    // Actualizar clave catastral
    updateClaveCatastral() {
      const { id_par, cod_zon, cod_sec, cod_pol_man, cod_pred, 
        id_regimen_propiedad, cod_uni, cod_bloq, id_tipo_piso, cod_piso } = this.form;

      // Asegurarse de que los campos manzana y predio sean de 3 dígitos
      const formattedCodPolMan = cod_pol_man ? cod_pol_man.padStart(3, '0') : '';
      const formattedCodPred = cod_pred ? cod_pred.padStart(3, '0') : '';

      if (id_regimen_propiedad !== 4) {
        // Si el régimen de propiedad no es PROPIEDAD HORIZONTAL - PH (código 4)
        this.form.clave_catastral = `${id_par}${cod_zon}${cod_sec}${formattedCodPolMan}${formattedCodPred}000000P00`;
      } else {
        // Si el régimen de propiedad es PROPIEDAD HORIZONTAL - PH (código 4)
        const formattedCodUni = cod_uni ? cod_uni.padStart(3, '0') : '';
        const formattedCodBloq = cod_bloq ? cod_bloq.padStart(3, '0') : '';
        let formattedCodPiso = cod_piso ? cod_piso.padStart(2, '0') : '';

        if (id_tipo_piso === 5) {
          // Si el tipo de piso es PISO (código 5)
          formattedCodPiso = `P${formattedCodPiso}`;
        } else if (id_tipo_piso === 6) {
          // Si el tipo de piso es SUBSUELO (código 6)
          formattedCodPiso = `S${formattedCodPiso}`;
        }

        this.form.clave_catastral = `${id_par}${cod_zon}${cod_sec}${formattedCodPolMan}${formattedCodPred}${formattedCodUni}${formattedCodBloq}${formattedCodPiso}`;
      }
    },

    // Navegar a la página de menú urbano
    navigateToMenuUrbano() {
      this.$router.push('/menu-urbano');
    },
    // Valida si el régimen de propiedad es propiedad horizontal
    handleRegimenChange() {
      if (this.form.id_regimen_propiedad !== 4) {
        this.limpiarCampos();
      }
    },

    toggleWindow() {
      this.isWindowVisible = !this.isWindowVisible; // Alterna la visibilidad del v-window
    },

  }, // Fin de métodos
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
  /* background-color: #6E6E6E;*/
  background-color: #276E90;
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

.bold-text {
  font-weight: bold;
}

.large-text {
  font-size: 1.2em;
}


</style>