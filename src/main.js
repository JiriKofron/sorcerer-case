import { createApp } from 'vue'
import App from './App.vue'

import { defineCustomElements as defineIonPhaser } from '@ion-phaser/core/loader';

defineIonPhaser(window)

createApp(App).mount('#app')
