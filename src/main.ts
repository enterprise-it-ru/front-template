import {createApp} from 'vue'
import './scss/style.scss'
import App from './App.vue'
import router from './router/index';

import 'bootstrap';

const app = createApp(App);
app.use(router);
app.mount('#app');
