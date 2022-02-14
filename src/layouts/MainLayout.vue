<!-- Главная разметка сайта -->
<template>
  <!-- компонент v-app является псевдонимом тега <div> с id=”app” -->
  <v-app>
    <!-- Подключаем компонент AppHeader ("шапка" сайта) -->
    <AppHeader />

    <!-- v-main - аналог тега main в html для размещения контента приложения -->
    <v-main class="grey lighten-1">
      <!-- <v-container> - ограничитель контента на странице по ширине -->
      <v-container>
        <!-- Подключаем компонент AppSidebar (Боковая панель) -->
        <AppSidebar />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
// Импортируем компоненты (страницы) для возможности использования в текущем компоненте.
// Символ "@" означает "путь до папки 'src'"
import AppHeader from "@/components/AppHeader";
import AppSidebar from "@/components/AppSidebar";

export default {
  // Название этого компонента
  name: "MainLayout",

  data: () => ({}),

  // Указываем, какие компоненты использовать
  components: {
    AppHeader,
    AppSidebar,
  },
};
</script>

<style scoped>
</style>