<template>
  <v-container fill-height class="justify-center align-center no-padding">
    <v-app-bar app color="primary" dark>
      <v-img
        src="@/assets/logo_ventana.png"
        alt="Logo"
        contain
        max-height="40"
        max-width="40"
        class="mr-3"
      ></v-img>
      <v-toolbar-title class="title-responsive">GADM Gobierno Autónomo Descentralizado Intercultural y Plurinacional del Municipio de Cayambe</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
    </v-app-bar>

    <v-row align="center" justify="center" class="flex-grow-1">
      <v-col cols="12" sm="10" md="8" lg="6">
        <v-card class="login-card">
          <v-card-title class="pb-0 d-flex justify-center title-background">
            <h3>INGRESO</h3>
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-text-field 
                label="Usuario" 
                prepend-icon="mdi-account-circle"
                v-model="username"
              />
              <v-text-field 
                :type="showPassword ? 'text' : 'password'" 
                label="Contraseña"
                prepend-icon="mdi-lock"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                v-model="password"
              />
            </v-form>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions>
            <v-row justify="center" class="w-100">
              <v-col cols="auto" class="d-flex justify-center">                             
                <v-btn color="info" @click="login">Ingreso</v-btn>
              </v-col>
              <v-col cols="auto" class="d-flex justify-center">                             
                <v-btn color="error" @click="salir">Salir</v-btn>
              </v-col>
            </v-row>              
          </v-card-actions>
          <v-divider></v-divider>
        </v-card>
      </v-col>
    </v-row>

    <v-footer app padless>
      <v-col class="text-center">
        <span>SIGCAL © {{ currentYear }}</span>
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'LoginSistema',
  data() {
    return {
      showPassword: false,
      username: '',
      password: '',
      currentYear: new Date().getFullYear()
    }
  },
  methods: {
    login() {
      // Lógica de autenticación
      console.log('Username:', this.username);
      console.log('Password:', this.password);
      // Aquí puedes agregar la lógica para redirigir a otra página después del login
      this.$router.push('/menu-ingreso');
    },
    salir() {
      // Navegar de regreso a la pantalla de inicio
      this.$router.push('/');
    }
  }
}
</script>