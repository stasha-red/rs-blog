import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    login: '',
    role: null,
  })

  const register = async (login, password) => {
    try {
      const response = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          login,
          password,
        }),
      })

      if (!response.ok) {
        throw new Error('Ошибка регистрации пользователя')
      }

      const data = await response.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  return { user, register }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot))
}
