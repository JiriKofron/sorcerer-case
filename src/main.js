import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router'

import routes from './router/router'

import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';

defineIonPhaser(window);
const pinia = createPinia();
const router = createRouter({
    history: createWebHistory(),
    routes,
})

createApp(App).use(pinia).use(router).mount('#app')
