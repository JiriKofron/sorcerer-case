<template>
  <h1>Main page - Sorcerer case</h1>
  <div>
    <router-link to="/">Home again</router-link>
    <router-link to="/game" @click="initializeGame">New game</router-link>
  </div>

</template>

<script>
import { useGeneralSettingsStore } from '@/stores/generalSettingsStore';

export default {
  name: 'TheHomePage',
  setup() {
    const generalSettingsStore = useGeneralSettingsStore()

    return {
      generalSettingsStore
    }

  },
  methods: {
    initializeGame() {
      this.generalSettingsStore.toggleGameInicialization()
    }
  }
}
</script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>