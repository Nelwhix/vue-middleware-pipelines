import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appstore', () => {
  const user = reactive({
    loggedIn: false,
    isSubscribed: false
  })
  return { user }
})
