<template>
  <h1>Game container</h1>
  <router-link to="/" @click="returnToMainMenu">Back to main menu</router-link>

  <ion-phaser
      v-bind:game.prop='game'
      v-bind:initialize.prop='isGameInitialized'
  />
</template>

<script>
import Phaser from 'phaser';
import { computed } from 'vue'
import { useGeneralSettingsStore } from '@/stores/generalSettingsStore'

export default {
  name: "TheGameContainer",
  setup() {
    const generalSettingsStore = useGeneralSettingsStore()

    return {
      isGameInitialized: computed(() => generalSettingsStore.isGameInitialized),
      generalSettingsStore
    }

  },
  data() {
    return {
      game: {
        width: "75%",
        height: "75%",
        type: Phaser.AUTO,
        scene: {
          init() {
            this.cameras.main.setBackgroundColor("#24252A");
          },
          create() {
            this.helloWorld = this.add.text(
                this.cameras.main.centerX,
                this.cameras.main.centerY,
                "Hello World",
                { font: "40px Arial",  fill: "#ffffff" }
            );
            this.helloWorld.setOrigin(0.5);
          },
          update() {
            this.helloWorld.angle += 1;
          }
        }
      }
    };
  },
  methods: {
    returnToMainMenu() {
      this.generalSettingsStore.toggleGameInicialization()
    }
  }
}
</script>

<style scoped>

</style>