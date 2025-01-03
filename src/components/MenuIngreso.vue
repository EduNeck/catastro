<template>
  <v-container fill-height class="d-flex flex-column justify-center align-center no-padding">   

    <v-card class="card-style custom-background mt-16" elevation="16">
      <v-card-title class="pb-0 d-flex justify-center title-background ">
        <h3>MENU</h3>
      </v-card-title>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col cols="auto" class="mb-2 d-flex flex-column align-items-center">
            <v-img src="@/assets/login-urbano.png" height="175" width="250" class="mb-2"></v-img>
            <v-btn color="#114358" density="compact" style="color: white;" @click="$router.push('/menu-urbano')">URBANO</v-btn>
          </v-col>

          <v-col cols="auto" class="mb-2 d-flex flex-column align-items-center">
            <v-img src="@/assets/login-rural.png" height="175" width="250" class="mb-2"></v-img>
            <v-btn color="#668A4C" density="compact" style="color: white;" @click="$router.push('/menu-rural')">RURAL</v-btn>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-actions>
        <v-row justify="center" class="w-100">
          <v-col cols="auto" class="d-flex justify-center">
            <v-btn variant="tonal" style="color: white;" @click="$router.push('/login')">Salir</v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script>
import { textVariables } from '@/config/textVariables';

export default {
  name: 'MenuIngreso',
  data() {
    return {
      currentYear: new Date().getFullYear(),
      organizationName: textVariables.organizationName
    }
  }
}
</script>

<style scoped>
.custom-background {
  background-color: #A9A9A9; 
}

.card-style {  
  border-radius: 4px; 
  border: 0.5px solid #090909;
}

h3 {
  color: #ffffff;
  font-size: 2vw; 
}
</style>