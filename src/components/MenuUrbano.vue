<template>
  <div class="d-flex justify-center align-center mt-10">
    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
        >VISOR
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          :value="index"
          @click="navigateTo(item.route)"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    <v-menu>
      <template v-slot:activator="{ props }">
        <v-btn
          color="primary"
          v-bind="props"
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
  </div>
</template>

<script>
export default {
  name: 'MenuUrbano',

  data: () => ({
    items: [
      { title: 'Geo Visor', route: '/visor-geo' },
    ],
    itemsGestionCatastral: [
      { title: 'Ingreso Predio', route: '/ingreso-predio' },
      { title: 'Listado de Predios', route: '/listado-predios' },
      { title: 'Gestión Documental', route: '/gestion-documental' },
    ],
  }),

  methods: {
    navigateTo(route) {
      this.$router.push(route);
    }
  }
}
</script>