<template>
  <v-app-bar color="#A9A9A9" :elevation="1" class="d-flex justify-center">
    <v-app-bar-title class="text-center">URBANO</v-app-bar-title>
  </v-app-bar>

  <div class="d-flex justify-center align-center mt-10">    
    <!-- Menu Visor -->
    <v-menu>
      <template v-slot:activator="{ props }" >
        <v-btn 
          append-icon="mdi-folder"
          color="white"
          v-bind="props"
          variant="tonal"
          class="custom-list-item"
        >VISOR
        </v-btn>
        <v-divider vertical> </v-divider>
      </template>      
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsVisor"
          :key="index"
          :value="index"
          @click="navigateTo(item.route)"          
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- Menu Gestion Catastral -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-divider vertical> </v-divider>
        <v-btn 
          append-icon="mdi-folder"
          color="white"
          v-bind="props"
          variant="tonal"
          class="custom-list-item"
        >GESTIÓN CATASTRAL
        </v-btn>
        <v-divider vertical> </v-divider>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsGestionCatastral"
          :key="index"
          :value="index"
          @click="navigateTo(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <!-- Menu Reportes -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-divider vertical> </v-divider>
        <v-btn 
          append-icon="mdi-folder"
          color="white"
          v-bind="props"
          variant="tonal" 
          class="custom-list-item"
        >REPORTES
        </v-btn>
        <v-divider vertical> </v-divider>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsReportes"
          :key="index"
          :value="index"
          @click="navigateTo(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu> 
    <!-- Menu Valoracion -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-divider vertical> </v-divider>
        <v-btn 
          append-icon="mdi-folder"
          color="white"
          v-bind="props"
          variant="tonal" 
          class="custom-list-item"
        >VALORACIÓN
        </v-btn>
        <v-divider vertical> </v-divider>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsValoracion"
          :key="index"
          :value="index"
          @click="navigateTo(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>      
    <v-divider vertical> </v-divider>

    <!-- Boton Salir -->
    <v-btn
        append-icon="mdi-close"
        color="white"
        variant="tonal" 
        @click="$router.push('/menu-ingreso')"
        class="custom-list-item"
    >SALIR
    </v-btn>
  </div>

  <v-col cols="12">
    <v-img
      src="@/assets/fondo-pantalla-gris.png "
      class="my-3 centered-image"
      contain
      height="200"
    />
  </v-col>


</template>

<script>
export default {
  name: 'MenuUrbano',

  data: () => ({
    itemsVisor: [
      { title: 'Geo Visor', route: '/visor-geo' },
    ],
    itemsGestionCatastral: [
      { title: 'Ingreso Predio', route: '/ficha-predial-urb' },
      { title: 'Listado de Predios', route: '/listado-predios' },
      { title: 'Gestión Documental', route: '/gestion-documental' },
    ],
    itemsReportes: [
      { title: 'Fichas Registradas', route: '/reporte-1' },
      { title: 'Pisos Registrados', route: '/reporte-2' },
      { title: 'Registros de Tenecia Activos', route: '/reporte-3' },
      { title: 'Certificado de Tenecia Predios', route: '/reporte-1' },
      { title: 'Vias / Frentes Registrados', route: '/reporte-2' },
      { title: 'Mejoras Registradas', route: '/reporte-3' },
      { title: 'Viviendas Registradas', route: '/reporte-1' },
      { title: 'Contribuyentes Registrados', route: '/reporte-2' },              
    ],
    itemsValoracion: [
      { title: 'Genera Valoración', route: '/valoracion-predial' },
      { title: 'Certificado Catastral', route: '/valoracion-predial' },
      { title: 'Valores Comerciales o de Peritaje', route: '/valoracion-predial' },
      { title: 'Valoración Suelo Factores', route: '/valoracion-predial' },
      { title: 'Valoración Mejoras Obras', route: '/valoracion-predial' },
      { title: 'Valoración Predio Resultado', route: '/valoracion-predial' },
      { title: 'Valoración - Patrimonio', route: '/valoracion-predial' },
      { title: 'Listado Tipología', route: '/valoracion-predial' },
      { title: 'Ingreso Tipologia', route: '/valoracion-predial' },
      { title: 'Listado Factor Tamaño', route: '/valoracion-predial' },
      { title: 'Ingreso Factor Tamaño', route: '/valoracion-predial' },
      { title: 'Listado Fitto Corvini', route: '/valoracion-predial' },
      { title: 'Ingreso Fitto Corvini', route: '/valoracion-predial' },
    ],

  }),

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },

}
</script>

<style scoped>

.centered-image {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain; 
}

.custom-list-item {
  background-color: #276E90;
  color: #FFFFFF;
  transition: background-color 0.3s ease;
}

.custom-list-item:hover {
  background-color: #114358;
}

</style>