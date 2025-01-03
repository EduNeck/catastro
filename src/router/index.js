import { createRouter, createWebHistory } from 'vue-router';
import PantallaInicio from '../components/PantallaInicio.vue';
import LoginSistema from '../components/LoginSistema.vue';
import MenuIngreso from '@/components/MenuIngreso.vue';
import MenuUrbano from '@/components/MenuUrbano.vue';
import VisorGeo from '@/components/VisorGeo.vue';

const routes = [

  { path: '/', component: PantallaInicio },
  { path: '/login', component: LoginSistema },
  { path: '/menu-ingreso', component: MenuIngreso },
  { path: '/menu-urbano', component: MenuUrbano },
  { path: '/visor-geo', component: VisorGeo },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;