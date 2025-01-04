import { createRouter, createWebHistory } from 'vue-router';
import PantallaInicio from '../components/PantallaInicio.vue';
import LoginSistema from '../components/LoginSistema.vue';
import MenuIngreso from '@/components/MenuIngreso.vue';
import MenuUrbano from '@/components/MenuUrbano.vue';
import VisorGeo from '@/components/VisorGeo.vue';
import FormFichaPredial from '@/components/urbano/FormFichaPredial.vue';
import TabIdentificacion from '@/components/urbano/TabIdentificacion.vue';

const routes = [

  { path: '/', component: PantallaInicio },
  { path: '/login', component: LoginSistema },
  { path: '/menu-ingreso', component: MenuIngreso },
  { path: '/menu-urbano', component: MenuUrbano },
  { path: '/visor-geo', component: VisorGeo },
  { path: '/ficha-predial-urb', component: FormFichaPredial},
  { path: '/tab-identificacion-urb', component: TabIdentificacion},
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;