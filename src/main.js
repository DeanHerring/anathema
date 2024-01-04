import { createApp } from 'vue';
import './styles/default.scss';
import App from './App.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faBars,
  faSortDown,
  faBorderAll,
  faCopy,
  faAngleLeft,
  faAngleRight,
  faSortUp,
} from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSortDown, faSortUp, faBorderAll, faCopy, faAngleLeft, faAngleRight);

// Swiper
import { register } from 'swiper/element/bundle';

register();

// Vue Router
import { createRouter, createWebHistory } from 'vue-router';

import Keno from '@/components/Games/Keno/Keno.vue';
import TheMines from '@/components/Other/TheMines.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Keno },
    { path: '/games/mines', component: TheMines },
  ],
});

// Plugins
import formatNumber from './plugins/formatNumber.js';

// Pinia
import { createPinia } from 'pinia';

const pinia = createPinia();

// Event Bus
import mitt from 'mitt';

const emitter = mitt();

// Vue
const app = createApp(App);

app.config.globalProperties.$emitter = emitter;

app.use(pinia);
app.use(router);
app.use(formatNumber);

app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
