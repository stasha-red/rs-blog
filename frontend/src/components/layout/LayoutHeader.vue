<script setup>
import LayoutContainer from './LayoutContainer.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBackward, faCode, faFile, faUsers } from '@fortawesome/free-solid-svg-icons';
import { RouterLink } from 'vue-router';
</script>


<template>
  <LayoutContainer>
    <div class="flex items-center justify-between py-4">
      <div>
        <RouterLink to="/" class="hover:text-blue-500">
          <FontAwesomeIcon :icon="faCode" class="mr-2" />
          Блог веб-разработчика
        </RouterLink>
      </div>
      <div>
        <p>Веб-технологии</p>
        <p>Написание кода</p>
        <p>Разбор ошибок</p>
      </div>
      <div>
        <p class="mb-3">
          <RouterLink to="/login" class="bg-blue-500 px-4 py-2 text-white rounded-md hover:bg-blue-700">Войти
          </RouterLink>
        </p>
        <p>
          <a href="#" @click="$router.go(-1)" aria-label="Назад" class="hover:text-blue-500">
            <FontAwesomeIcon :icon="faBackward" />
          </a>
          &nbsp;&nbsp;
          <RouterLink to="/post" aria-label="Новая статья" class="hover:text-blue-500">
            <FontAwesomeIcon :icon="faFile" />
          </RouterLink>
          &nbsp;&nbsp;
          <RouterLink to="/users" aria-label="Пользователи" class="hover:text-blue-500">
            <FontAwesomeIcon :icon="faUsers" />
          </RouterLink>
        </p>
      </div>
    </div>
  </LayoutContainer>
</template>
