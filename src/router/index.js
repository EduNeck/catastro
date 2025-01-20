import { createRouter, createWebHistory } from 'vue-router';
import PantallaInicio from '../components/PantallaInicio.vue';
import LoginSistema from '../components/LoginSistema.vue';
import MenuIngreso from '@/components/MenuIngreso.vue';
import MenuUrbano from '@/components/MenuUrbano.vue';
import VisorGeo from '@/components/VisorGeo.vue';
import FormFichaPredial from '@/components/urbano/FormFichaPredial.vue';
import TabIdentificacion from '@/components/urbano/TabIdentificacion.vue';
import TabTenencia from '@/components/urbano/TabTenencia.vue';
import TabListadoTenencia from '@/components/urbano/TabListadoTenencia.vue';
import ListadoPrediosUrbanos from '@/components/urbano/ListadoPrediosUrbanos.vue';
import VentanaTenencia from '@/components/urbano/VentanaTenencia.vue';
import ListadoTest from '@/components/urbano/ListadoTest.vue';

const routes = [

  { path: '/', component: PantallaInicio },
  { path: '/login', component: LoginSistema },
  { path: '/menu-ingreso', component: MenuIngreso },
  { path: '/menu-urbano', component: MenuUrbano },
  { path: '/visor-geo', component: VisorGeo },
  { path: '/ficha-predial-urb', component: FormFichaPredial},
  { path: '/tab-identificacion-urb', component: TabIdentificacion},
  { path: '/tab-tenencia-urb', name: 'TabTenencia', component: TabTenencia},
  { path: '/tab-list-tenencia-urb', component: TabListadoTenencia},
  { path: '/listado-predios-urb', component: ListadoPrediosUrbanos},

  { path: '/ventana-tenecia-urb', component: VentanaTenencia},

  { path: '/listado-test', component: ListadoTest}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;