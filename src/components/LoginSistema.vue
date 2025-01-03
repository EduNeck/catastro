<template>
  <v-container fill-height class="d-flex justify-center align-center no-padding">
    <!-- Contenido de la página -->
    <v-card width="500" class="mx-auto mt-16" elevation="16">
      <v-card-title class="pb-0 text-center">
        <h1>Ingreso Sistema</h1>
      </v-card-title>
      <v-spacer> </v-spacer>
      <v-card-text>
        <v-form>
          <v-text-field 
            label="Usuario" 
            prepend-icon="mdi-account-circle"
          />
          <v-text-field 
            :type="showPassword ? 'text' : 'password'" 
            label="Contraseña"
            prepend-icon="mdi-lock"
            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="showPassword = !showPassword"
          />
        </v-form>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-actions>
        <v-btn color= "primary" variant="tonal" @click="login">Ingresar</v-btn>
        <v-btn color= "success" variant="tonal" @click="salir">Salir</v-btn>
      </v-card-actions>
    </v-card> 
    <!-- Contenido de la página -->

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
};
</script>

<style scoped>
.title-background {
  background-color:  #203de0; /* Color de fondo */
  color: white; /* Color del texto */
  padding: 8px; /* Espacio interno */
  border-radius: 4px; /* Bordes redondeados */
}

h1 {
  color: #3f51b5;
  font-size: 2vw; 
}
</style>