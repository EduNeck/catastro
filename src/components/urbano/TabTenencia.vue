<template>
  <v-container class="container">
    <v-row justify="center">
      <v-col cols="12" class="text-center">
        <h2 class="titulo-pantalla">TENENCIA PROPIEDAD</h2>
      </v-col>
      <v-col cols="auto" class="d-flex justify-center"> 
        <v-btn class="btn_app mx-2 custom-text-color" @click="guardar">Guardar</v-btn>
      </v-col>
    </v-row>              
    <!-- Primer y Segundo Bloque juntos en horizontal -->
    <v-row justify="center" class="mb-3">
      <v-col cols="12" md="6">
        <v-card class="block-color fill-width">
          <v-card-title class="centered-title">INFORMACIÓN LEGAL</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="3">
                <v-select
                  v-model="form.permite_ingreso"
                  :items="items"
                  label="Permite Ingreso"
                  item-text="text"
                  item-value="value"
                ></v-select>
                
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select 
                  :items="items" 
                  label="Presenta Escritura" 
                  v-model="form.presenta_escritura" 
                  item-text="name" 
                  item-value="value" 
                  
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select 
                  :items="items" 
                  label="Asent. de Hecho" 
                  v-model="form.asentamiento_de_hecho" 
                  item-text="descripcion"
                  item-value="id"
                  required>                  
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="3">
                <v-select 
                  :items="items" 
                  label="Conflicto" 
                  v-model="form.conflicto" 
                  item-text="name" 
                  item-value="value"
                  
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="6">
        <v-card class="block-color fill-width">
          <v-card-title class="centered-title">PARTICIPACIÓN</v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field label="Porcentaje Participación" 
                  v-model="form.porcentaje_participacion" 
                  type="number"
                  >
                </v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-select 
                  :items="formaPropiedad" 
                  label="Forma de Propiedad o Posesión" 
                  v-model="form.id_forma_propiedad" 
                  item-text="descripcion"
                  item-value="id"
                  required>
                ></v-select>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tercer Bloque -->
    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">PROPIETARIO</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="8">
            <v-select 
              :items="ciudadanoTenencia" 
              label="Propietario" 
              v-model="form.id_propietario" 
              item-text="title" 
              item-value="id"
              required              
            ></v-select>
          </v-col>          
        </v-row>
      </v-card-text>
    </v-card>

    <!-- Cuarto Bloque Protocolización-->
    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">PROTOCOLIZACIÓN - NOTARIA</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="2">                  
            <v-select
              v-model="form.id_prov_protocol"
              :items="provincias"
              item-text="title"
              item-value="id"
              label="Seleccione una provincia"
              @click="onProvinciaProto"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-select
              :items="cantones" 
              label="Cantón" 
              v-model="form.id_canton" 
              item-text="title" 
              item-value="id" 
              required
              @click="onProvinciaProto"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Fecha de Protocolización" 
              v-model="form.fecha_inscripcion" 
              type="date" >
            </v-text-field>
          </v-col>            

          <v-col cols="12" sm="6" md="2">                
            <v-text-field label="Número de Notaría" 
              v-model="form.numero_notaria" 
              type="number" >
            </v-text-field>
          </v-col>
          
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Área" 
              v-model="form.area_registro" 
              type="number" >
            </v-text-field>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>

    <!-- Quinto Bloque  Registro -->
    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">DATOS DE INSCRIPCIÓN - REGISTRO</v-card-title>
      <v-card-text>
        <v-row>

          <v-col cols="12" sm="6" md="2">                  
            <v-select               
              label="Provincia Registro"   
              :items="provincias"               
              v-model="form.id_provincia" 
              item-text="descripcion" 
              item-value="dpa"   
              @click="onProvinciaRegistro"             
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-select               
              label="Cantón Registro" 
              :items="cantones"
              v-model="form.id_canton" 
              item-text="name" 
              item-value="value" 
              @click="onProvinciaRegistro"
            ></v-select>
          </v-col>

          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Fecha de Registro" 
              v-model="form.fecha_escritura" 
              type="date" >
            </v-text-field>
          </v-col>            

          <v-col cols="12" sm="6" md="2">                
            <v-text-field label="Repertorio" 
              v-model="form.repertorio" 
              type="number" >
            </v-text-field>
          </v-col>
          
          <v-col cols="12" sm="6" md="2">
            <v-text-field label="Folio" 
              v-model="form.folio" 
              type="number" >
            </v-text-field>
          </v-col>                

          <v-col cols="12" sm="6" md="2">
            <v-text-field label="N° Registro" 
              v-model="form.numero_registro" 
              type="number" >
            </v-text-field>
          </v-col>

        </v-row>
      </v-card-text>
    </v-card>  

    <v-card class="mb-3 block-color">
      <v-card-title class="centered-title">LINDEROS</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Lindero Norte" 
            v-model="form.lindero_norte" type="text" >
          </v-text-field>
          </v-col>

          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Lindero Sur" 
            v-model="form.lindero_sur" type="text" >
          </v-text-field>
          </v-col>  

          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Lindero Este" 
            v-model="form.lindero_este" type="text" >
          </v-text-field>
          </v-col>  

          <v-col cols="12" sm="6" md="6">
            <v-text-field label="Lindero Oeste" 
            v-model="form.lindero_oeste" type="text" >
          </v-text-field>
          </v-col>  

        </v-row>
      </v-card-text>
    </v-card>

    <v-row justify="center">
      <v-col cols="auto">
        <v-btn class="custom-text-color" color="#114358" @click="guardar">Guardar</v-btn>
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import axios from 'axios';
import { mapGetters } from 'vuex';

export default {
  name: 'TabTenencia',
  data() {
    return {
      form: {
        permite_ingreso: null,
        presenta_escritura: null,
        asentamiento_de_hecho: null,
        conflicto: null,
        porcentaje_participacion: '',
        id_forma_propiedad: null,
        id_propietario: null,
        id_prov_protocol: null,
        id_can_protocol: null,
        fecha_inscripcion: '',
        numero_notaria: '',
        area_registro: '',
        id_unidad: null,
        id_provincia: null,
        id_canton: null,
        fecha_escritura: '',
        repertorio: '',
        folio: '',
        numero_registro: '',
        lindero_norte: '',
        lindero_sur: '',
        lindero_este: '',
        lindero_oeste: '', 
        propietario_anterior: '',        
      },
      // Listados
      items: ['SI', 'NO'],
      provincias: [],
      cantones: [],
      formaPropiedad: [],
      ciudadanoTenencia: [],
    }
  },

  computed: { 
    validacionItems() { 
      return this.validacion.map(item => ({ 
        text: item.name, 
        value: item.value 
      })); 
    },
    ...mapGetters(['getIdPredio']),    
  },

  async mounted() {
    // Cargar listados Provincias
    await this.fetchProvincias();
    
    // Cargar Ciudadano
    try {
      console.log('Componente Ciudadano montado');
      this.ciudadano = await this.fetchCiudadanoTenencia();    
      console.log('Datos del Ciudadano cargados:',this.ciudadanoTenencia, );
    } catch (error) {
      console.error('Error al montar el ciudano:', error);
    }
    
    // Cargar Catalogo
    try {
      console.log('Componente Catalogo montado');
      this.formaPropiedad = await this.fetchCatalogo(20);    
      console.log('Forma Propiedad:',this.formaPropiedad, );
    } catch (error) {
      console.error('Error al montar los componentes:', error);
    }

    //  Cargar IdPredio
    try {      
      console.log('ID DEL PREDIO TENENCIA:', this.getIdPredio);
      /* await this.fetchTenencias(this.getIdPredio);*/ 
    } catch (error) {
      console.error('Error al montar el Id Predio:', error);
    }
  },

  methods: {

    async onProvinciaProto() {
      this.form.id_can_protocol = '';
      console.log('Provincia seleccionada:', this.form.id_prov_protocol);
      if (this.form.id_prov_protocol) {
        console.log('ID de la provincia seleccionada:', this.form.id_prov_protocol);
        await this.fetchCantonesByProvincia(this.form.id_prov_protocol);
      } else {
        this.cantones = [];
      }
    },

    async onProvinciaRegistro() {
      this.form.id_canton = '';
      console.log('Provincia seleccionada:', this.form.id_provincia);
      if (this.form.id_provincia) {
        console.log('ID de la provincia seleccionada:', this.form.id_provincia);
        await this.fetchCantonesByProvincia(this.form.id_provincia);
      } else {
        this.cantones = [];
      }
    },

    async fetchProvincias() {
      try {
        const response = await axios.get('http://localhost:3001/api/catalogo_provincia');
        console.log('Datos obtenidos para provincias:', response.data);
        if (Array.isArray(response.data)) {
          this.provincias = response.data.map(item => {
            if (item.dpa && item.descripcion) {
              return {
                ...item,
                tipoDpa: `${item.dpa}`,
                title: `${item.descripcion}`,
                id: item.id_prov,                
              };              
            } else {
              console.warn('Elemento con datos incompletos:', item);
              return null;
            }
          }).filter(item => item !== null);
        } else {
          throw new Error('La respuesta de la API no es un array');
        }
      } catch (error) {
        console.error('Error fetching provincias:', error);
        this.provincias = [];
      }      
    },

    async fetchCantonesByProvincia(id_prov) {
      try {
        const response = await axios.get(`http://localhost:3001/api/catalogo_cantonByProvincia/${id_prov}`);
        console.log('Datos obtenidos para cantones:', response.data);
        if (Array.isArray(response.data)) {
          this.cantones = response.data.map(item => {
            if (item.id_can && item.descripcion) {
              return {
                ...item,
                id: `${item.id_can}`,
                title: `${item.descripcion}`,                
              };
            } else {
              console.warn('Elemento con datos incompletos:', item);
              return null;
            }
          }).filter(item => item !== null);
        } else {
          throw new Error('La respuesta de la API no es un array');
        }
      } catch (error) {
        console.error('Error fetching cantones:', error);
        this.cantones = [];
      }
    },

    async fetchCatalogo(id_tipo_atributo) {
      try {
        const response = await axios.get('http://localhost:3001/api/catalogo', {
          params: { id_tipo_atributo }
        });
        console.log(`Datos obtenidos para id_tipo_atributo ${id_tipo_atributo}:`, response.data);        
        if (Array.isArray(response.data)) {          
          const uniqueData = response.data.filter((item, index, self) =>
            index === self.findIndex((t) => t.id === item.id)
          );
          return uniqueData.map(item => ({
            ...item,
            tipoNombre: item.descripcion, 
            title: item.descripcion       
          }));
        } else {
          throw new Error('La respuesta de la API no es un array');
        }
      } catch (error) {
        console.error('Error fetching catalogo:', error);
        throw new Error('No se pudo obtener el catálogo');
      }
    },

    async fetchCiudadanoTenencia() {
      try {
        const response = await axios.get('http://localhost:3001/api/ciudadano_tenencia');
        console.log('Datos obtenidos para ciudadano:', response.data);
        if (Array.isArray(response.data)) {
          this.ciudadanoTenencia = response.data.map(item => {
            if (item.id_ciudadano && item.nombres) {
              return {
                ...item,                
                title: `${item.nombres} - ${item.numero_documento}`,
                id: item.id_ciudadano,                
              };              
            } else {
              console.warn('Elemento con datos incompletos:', item);
              return null;
            }
          }).filter(item => item !== null);
        } else {
          throw new Error('La respuesta de la API no es un array');
        }
      } catch (error) {
        console.error('Error fetching provincias:', error);
        this.ciudadanoTenencia = [];
      }      
    },


    // Guardar formulario
    async guardar(){
      console.log('Guardar formulario');

      // Validar permite_ingreso
      this.form.permite_ingreso = this.form.permite_ingreso === 'SI';
      this.form.presenta_escritura = this.form.presenta_escritura === 'SI';
      this.form.conflicto = this.form.conflicto === 'SI';
      this.form.asentamiento_de_hecho = this.form.asentamiento_de_hecho === 'SI';

      const nuevaTenencia = {
        id_predio : this.id_predio,
        permite_ingreso: this.form.permite_ingreso,
        presenta_escritura: this.form.presenta_escritura,
        asentamiento_de_hecho: this.form.asentamiento_de_hecho,
        conflicto: this.form.conflicto,
        porcentaje_participacion: this.form.porcentaje_participacion,
        id_forma_propiedad: this.form.id_forma_propiedad,
        id_propietario: this.form.id_propietario,
        id_prov_protocol: this.form.id_prov_protocol,
        id_can_protocol: this.form.id_can_protocol,
        fecha_inscripcion: this.form.fecha_inscripcion,
        numero_notaria: this.form.numero_notaria,
        area_registro: this.form.area_registro,
        id_unidad: this.form.id_unidad,
        id_provincia: this.form.id_provincia,
        id_canton: this.form.id_canton,
        fecha_escritura: this.form.fecha_escritura,
        repertorio: this.form.repertorio,
        folio: this.form.folio,
        numero_registro: this.form.numero_registro,
        lindero_norte: this.form.lindero_norte,
        lindero_sur: this.form.lindero_sur,
        lindero_este: this.form.lindero_este,
        lindero_oeste: this.form.lindero_oeste, 
        propietario_anterior: this.form.propietario_anterior
      }
      console.log('Datos a guardar', nuevaTenencia);

      try {
        const response = await axios.post('http://localhost:3001/api/inserta_tenencia', nuevaTenencia);
        const idTenecia = response.data.id;
        console.log('ID de la tenencia creada', idTenecia);
        alert('Tenencia creada con éxito');
      } catch (error) {
        console.error('Error al guardar la tenencia', error);
        alert(`Error al guardar la tenencia: ${error.message.data.detail}`);
      }
    },

    navigateToMenuUrbano() { 
      this.$router.push('/menu-urbano'); 
    },
    navigateToCiudadano(){
      this.$router.push('/ingreso-ciudadano'); 
    }
  }
}
</script>

<style scoped>

.container {
  background-color: #276E90; /* Fondo */
  border: 0; /* Borde personalizado */
  padding: 0; /* Eliminar padding */
  margin: 0; /* Eliminar margen */
}

.block-color {
  background-color: #F1ECE7;
  color: #114358; 
}

.custom-text-color {
  color: #F1ECE7; 
}

.vertical-divider { 
  height: 30px; /* Altura de la línea */ 
  align-self: center; 
  margin: 0 16px; /* Espaciado a los lados de la línea */ 
  border-left: 2px solid #114358;
}

.centered-title { 
  display: flex; 
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  text-align: center;
}

.fill-width { 
  width: 100%; /* Asegura que el v-card ocupe todo el ancho del contenedor */
}

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
