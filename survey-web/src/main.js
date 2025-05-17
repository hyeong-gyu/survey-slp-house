import { createApp } from 'vue';
import store from './store/';
import { router } from './router/';
import App from './App.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons';
import HighchartsVue from 'highcharts-vue';
import HighchartMore from 'highcharts/highcharts-more';
import Highcharts from 'highcharts';
import HighchartSolidGauge from 'highcharts/modules/solid-gauge';
import { VueCookieNext } from 'vue-cookie-next';
import vueVimeoPlayer from 'vue-vimeo-player'

const app = createApp(App);
app.use(router);
app.use(store);
app.use(vueVimeoPlayer)
app.use(VueCookieNext);

HighchartMore(Highcharts);
HighchartSolidGauge(Highcharts);
app.use(HighchartsVue, {Highcharts});

app.mount('#app');