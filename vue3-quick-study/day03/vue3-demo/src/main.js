import { createApp } from 'vue'
// 引入pinia模块
import { createPinia } from 'pinia';

// 从pinia-plugin-persistedstate模块中导入piniaPluginPersistedstate
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';
// 定义pinia实例
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

// createApp(App).mount('#app')
const app = createApp(App);
app.use(pinia);
app.mount("#app");
