<!-- Разметка. Что и как отображать на странице -->
<template>
  <!-- Подключаем компонент с главной разметкой, который будет виден всегда -->
  <MainLayout :products="products" />
</template>

<script>
// Импортируем компоненты (страницы) для возможности использования в текущем компоненте.
// Символ "@" означает "путь до папки 'src'"
import MainLayout from "@/layouts/MainLayout";
// Импортируем справочник товаров (в переменную 'products'):
import products from "@/data/products.js";

export default {
  // Название этого компонента
  name: "App",

  // Указываем, какие компоненты использовать
  components: { MainLayout },

  data: () => ({
    // товары берём из соответствующей вкладки и записываем в переменную products
    products: products,
  }),
};
</script>

<style scoped>
</style>