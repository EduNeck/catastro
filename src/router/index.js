import { createRouter, createWebHistory } from 'vue-router';
import PantallaInicio from '../components/PantallaInicio.vue';
import LoginSistema from '../components/LoginSistema.vue';
import MenuIngreso from '@/components/MenuIngreso.vue';

const routes = [

  { path: '/', component: PantallaInicio },
  { path: '/login', component: LoginSistema },
  { path: '/menu-ingreso', component: MenuIngreso},
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;