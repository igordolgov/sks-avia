<!-- Список товаров 1-й вкладки -->
<template>
  <!-- Карточка в каталоге -->
  <v-card height="93vh" class="rounded-0 elevation-0">
    <!-- "pa" - paddings, "ma" - margins, "pl" - padding-left, "mb" - margin-bottom... -->
    <v-card-text class="pa-3 text-body-2" style="line-height: 1.2">
      <v-row>
        <!-- Фотографии товара -->
        <v-col cols="12" sm="7" md="8" xl="9"
          class="pa-0 mb-3">
          <v-sheet
            class="
              cards-height
              pa-0
              mx-auto
              d-flex
              align-center
              grey
              lighten-2
              elevation-10
            "
          >
            <v-carousel
              v-model="model"
              height="100%"
              :aspect-ratio="1"
              dark
              hide-delimiters
              class="pa-0"
            >
              <v-carousel-item
                v-for="(image, i) in product.images"
                :key="i"
                :src="image.src"
                contain
                eager
                height="100%"
                :aspect-ratio="1"
              >
              </v-carousel-item>
            </v-carousel>
          </v-sheet>
        </v-col>

        <!-- Описание товара -->
        <v-col
          col="7"
          sm="4"
          md="3"
          xl="3"
          class="py-0 px-sm-0 pb-sm-3 pr-lg-0 mx-sm-0"
        >
          <v-sheet class="fill-height pa-2 mx-sm-auto elevation-10 rounded-lg">
            <!-- Название товара -->
            <span
              class="
                d-block
                pt-1
                px-2
                pb-0
                font-weight-bold
                text-body-2 text-md-body-1
              "
            >
              {{ product.title }}
            </span>

            <!-- Описание товара -->
            <span class="d-block pl-2 pb-0 mb-0 text-body-2 text-md-body-1">
              {{ product.description }}
            </span>

            <div class="text-body-2 pa-0">
              <!-- Количество товара -->
              <span
                v-if="product.quantity > 0"
                class="d-block pl-2 pb-0 mb-0 text-md-body-1"
              >
                Кол-во: {{ product.quantity }} шт.
              </span>

              <!-- Если товара нет в наличии (кол-во: 0) -->
              <span
                v-if="product.quantity === 0 || product.quantity === ''"
                class="width-50px pl-2 pb-0 mb-0 red--text text-md-body-1"
              >
                Нет в наличии
              </span>

              <!-- Состояние товара (новый или б/у) -->
              <span class="d-block pl-2 pb-0 mb-0 text-md-body-1">
                {{ product.condition }}
              </span>

              <!-- Стоимость товара -->
              <span class="d-block pl-2 pb-1 mb-0 text-md-body-1">
                Цена: {{ product.price }} ₽
              </span>
            </div>
          </v-sheet>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
// Импортируем справочник товаров (в переменную 'products'):
import products from "@/data/products.js";

export default {
  name: "ProductItem",

  data() {
    return {
      props: ["products", "nextPageName"],
      model: 0,
      product: null,
    };
  },

  // Информация о товаре
  created() {
    /* Фильтруем список товаров и оставляем тот товар, который просматриваем,
      то есть у которого id совпадает с id переданным через входные параметры */
    for (let key of Object.keys(products)) {
      const product = products[key].find(
        (product) => product.id == this.$route.params.id
      );
      if (product) {
        this.product = product;
        break;
      }
    }
  },
};
</script>

<style>
.tab-height {
  height: 93.9vh;
  align-content: flex-start;
}
</style>