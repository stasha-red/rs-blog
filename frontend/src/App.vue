<script setup>
import { RouterView } from 'vue-router'
import LayoutHeader from './components/LayoutHeader.vue';
import LayoutFooter from './components/LayoutFooter.vue';
</script>

<template>
  <div class="bg-gray-100 w-full min-h-screen flex flex-col">
    <header class="bg-white fixed top-0 left-0 right-0 z-10">
      <LayoutHeader />
    </header>
    <main class="flex-1 mt-26">
      <RouterView />
    </main>
    <footer class="bg-white">
      <LayoutFooter />
    </footer>
  </div>
</template>
