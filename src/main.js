import { createApp } from 'vue';
import './styles/default.scss';
import App from './App.vue';

// Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBars, faSortDown, faBorderAll, faCopy, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

library.add(faBars, faSortDown, faBorderAll, faCopy, faAngleLeft, faAngleRight);

// Swiper
import { register } from 'swiper/element/bundle';

register();

// Vue
const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.mount('#app');
