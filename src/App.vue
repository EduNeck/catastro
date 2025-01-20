<template>
  <v-app class="background">
    <v-app-bar app color= #383838 dark>
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

    <v-footer app padless color= #383838>
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

<style scoped>
.background {
  background-color: #6E6E6E; 
  min-height: 100vh;
}

.title-responsive {
  font-size: 1.5rem;
}

.text-center {
  text-align: center;
}


</style>
