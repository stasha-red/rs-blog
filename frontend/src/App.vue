<script setup>
import { RouterView } from 'vue-router'
import LayoutContainer from './components/LayoutContainer.vue';
</script>

<template>
  <div class="bg-gray-100 w-full min-h-screen flex flex-col">
    <header class="bg-white fixed top-0 left-0 right-0">
      <LayoutContainer>
        Шапка
      </LayoutContainer>
    </header>
    <main class="flex-1 mt-26">
      <RouterView />
    </main>
    <footer class="bg-white">
      <LayoutContainer>
        Подвал
      </LayoutContainer>
    </footer>
  </div>
</template>
