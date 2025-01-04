<template>
  <div class="d-flex justify-center align-center mt-10">
    <!-- Menu Visor -->
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="white"
          v-bind="props"
          variant="tonal" 
        >VISOR
        </v-btn>
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
        <v-btn
          color="white"
          v-bind="props"
          variant="tonal"
        >GESTIÓN CATASTRAL
        </v-btn>
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
        <v-btn
          color="white"
          v-bind="props"
          variant="tonal" 
        >REPORTES
        </v-btn>
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
        <v-btn
          color="white"
          v-bind="props"
          variant="tonal" 
        >VALORACIÓN
        </v-btn>
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

    <!-- Boton Salir -->
    <v-btn
        color="white"
        variant="tonal" 
        @click="$router.push('/menu-ingreso')"
    >SALIR
    </v-btn>

  </div>
</template>

<script>
export default {
  name: 'MenuUrbano',

  data: () => ({
    itemsVisor: [
      { title: 'Geo Visor', route: '/visor-geo' },
    ],
    itemsGestionCatastral: [
      { title: 'Ingreso Predio', route: '/ingreso-predio' },
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