import { defineStore, acceptHMRUpdate } from 'pinia'
import { ref } from 'vue'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref([])

  const fetchArticles = async (search = '') => {
    try {
      const response = await fetch(`/posts?search=${search}`)
      if (!response.ok) {
        throw new Error('Posts request error')
      }

      const { data } = await response.json()
      articles.value = data.posts
    } catch (error) {
      console.error(error)
    }
  }

  return { articles, fetchArticles }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useArticlesStore, import.meta.hot))
}
