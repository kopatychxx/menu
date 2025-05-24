import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

// 👇 Добавляем это для Pinia
import { createPinia } from 'pinia';

import './registerServiceWorker';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
