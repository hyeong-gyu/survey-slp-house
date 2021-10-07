import { createApp } from 'vue';
import store from './store/';
import { router } from './router/';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons';


const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app');