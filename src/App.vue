<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-img
        src="@/assets/logo_ventana.png"
        alt="Logo"
        contain
        max-height="40"
        max-width="40"
        class="mr-3"
      ></v-img>
      <v-toolbar-title class="title-responsive">{{ organizationName }}</v-toolbar-title>      
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>    

    <v-footer app padless>
      <v-col class="text-center">
        <span>SIGCAL © {{ currentYear }}</span>
      </v-col>
    </v-footer>

  </v-app>
</template>

<script>

import { textVariables } from '@/config/textVariables';

export default {
  name: 'App',
  data() {
    return {

      currentYear: new Date().getFullYear(),
      organizationName: textVariables.organizationName
    }
  }
};
</script>
