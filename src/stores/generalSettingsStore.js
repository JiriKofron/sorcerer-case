import { defineStore } from 'pinia';
import { ref, computed} from 'vue'


export const useGeneralSettingsStore = defineStore('generalSettingsStore', () => {
    let initialized = ref(false)
    const isGameInitialized = computed(() => initialized.value)

    function toggleGameInicialization() {
        initialized.value = !initialized.value
    }

    return { initialized, isGameInitialized, toggleGameInicialization }
})