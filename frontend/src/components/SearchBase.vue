<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ref, watch } from 'vue';

const searchQuery = ref('');

const props = defineProps({
  onSearch: {
    type: Function,
    required: true
  }
})

const handlerSearch = () => {
  props.onSearch(searchQuery.value)
}

let deboucedTimer;

const debouncedSearch = (query) => {
  clearTimeout(deboucedTimer);

  deboucedTimer = setTimeout(() => {
    props.onSearch(query)
  }, 2000)
}

watch(searchQuery, (newQuery) => {
  debouncedSearch(newQuery)
})
</script>

<template>
  <form @submit.prevent="handlerSearch" class="mt-12 relative">
    <input class="w-full rounded-md bg-white border border-gray-300 p-2 pr-20" type="text" name="search"
      placeholder="Поиск по блогу" v-model="searchQuery">
    <button type="submit"
      class="cursor-pointer bg-blue-500 text-white py-2 px-5 rounded-md hover:bg-blue-700 absolute right-0 top-0">
      <FontAwesomeIcon :icon="faMagnifyingGlass" />
    </button>
  </form>
</template>
