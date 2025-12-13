import { createApp } from 'vue';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import vuetify from './plugins/vuetify';
import App from './App.vue';

const app = createApp(App);

app.use(vuetify);
app.mount('#app');
