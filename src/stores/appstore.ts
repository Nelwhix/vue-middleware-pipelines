import { reactive } from 'vue'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('appstore', () => {
  const user = reactive({
    loggedIn: true,
    isSubscribed: true  
  })
  return { user }
})
