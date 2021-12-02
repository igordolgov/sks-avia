<!-- Шаблон вкладки -->
<template>
  <div>
    <!-- Картинка карточки в каталоге -->
    <v-card class="mb-1 grey lighten-2">
      <v-img
        contain
        position="center"
        aspect-ratio="1"
        :src="product.image1"
      ></v-img>
    </v-card>

    <!-- Описание карточки в каталоге -->
    <!-- Название товара -->
    <v-card height="3.8em" flat class="d-block pt-1 px-2 pb-0 font-weight-bold">
      {{ product.title }}
    </v-card>

    <!-- Количество товара -->
    <v-card flat v-show="product.quantity > 0" class="pl-2 pb-0 mb-0">
      Кол-во: {{ product.quantity }} шт.
    </v-card>

    <!-- Если товара нет в наличии (кол-во: 0) -->
    <v-card
      flat
      v-show="product.quantity == 0"
      class="red--text pl-2 pb-0 mb-0"
    >
      Нет в наличии
    </v-card>

    <!-- Состояние товара (новый или б/у) -->
    <v-card flat class="pl-2 pb-0 mb-0">
      {{ product.condition }}
    </v-card>

    <!-- Стоимость товара -->
    <v-card flat class="pl-2 pb-1 mb-0"> Цена: {{ product.price }} ₽ </v-card>
  </div>
</template>

<script>
export default {
  name: "ProductsTab",
  data: () => ({}),
};
</script>

<style>
</style>