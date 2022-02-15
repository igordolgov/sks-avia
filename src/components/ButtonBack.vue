<!-- Кнопка "Назад" в карточке товара -->
<template>
  <div class="text-right button-styles hidden-sm-and-up">
    <v-btn
      to="/"
      style="background-color: #069"
      dark
      class="mx-2 my-1 rounded-lg elevation-8"
    >
      Назад
    </v-btn>
  </div>
</template>

<script>
// Импортируем справочник товаров (в переменную 'products')
import eventBus from "@/eventBus";

export default {
  name: "ButtonBack",

  data: () => ({}),

  methods: {
    // Переход по страницам
    gotoPage(pageName) {
      eventBus.$emit("gotoPage", pageName);
    },
  },
};
</script>

<style scoped>
.button-styles {
  position: fixed;
  z-index: 5;
  bottom: 9vh !important;
  right: 12px;
}
</style>