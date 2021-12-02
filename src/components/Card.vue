<template>
	<v-row>
		<!-- Фотографии товара -->
		<v-col
			cols="12" sm="8" lg="7" offset-lg="1" 
			class="pl-3"
		>
			<v-card
				class="
				cards-height
				pa-sm-3 
				d-flex align-center
				grey lighten-3 rounded-lg elevation-10
			">
				<v-carousel
					height="100%"
					dark
					hide-delimiter-background
					delimiter-icon="mdi-minus"
					class="pt-sm-0 pb-sm-0
				">
					<v-carousel-item
						v-for="(image,i) in product.images"
						:key="i"
						:src="image.src"
						contain
						eager
					></v-carousel-item>
				</v-carousel>
			</v-card>
		</v-col>

		<!-- Описание товара -->
		<v-col
			cols="12" sm="4" lg="3"
			class="pb-0 pb-sm-3 pr-sm-3 pr-lg-0 pl-sm-0 "
		>
			<v-card
				height="100%"
				class="pa-2 elevation-10 rounded-lg">
				<!-- Название товара -->
				<span
					class="
						d-block
						pt-1 px-2 pb-0
						font-weight-bold
						text-body-2 text-md-body-1"
				>
					{{ product.title }}
				</span>

				<!-- Описание товара -->
				<span
					d-block
					class="
						d-block
						pl-2 pb-0 mb-0
						text-body-2 text-md-body-1"
				>
					{{ product.description }}
				</span>

				<div class="text-body-2 pa-0">
					<!-- Количество товара -->
					<span
						v-if="product.quantity > 0"
						class="
							d-block 
							pl-2 pb-0 mb-0 
							text-md-body-1"
					>
						Кол-во: {{ product.quantity }} шт.
					</span>

					<!-- Если товара нет в наличии (кол-во: 0) -->
					<span
						v-if="product.quantity == 0"
						class="
							width-50px
							pl-2 pb-0 mb-0
							red--text
							text-md-body-1"
					>
						Нет в наличии
					</span>

					<!-- Состояние товара (новый или б/у) -->
					<span
							class="
							d-block
							pl-2 pb-0 mb-0 
							text-md-body-1"
					>
						{{ product.condition }}
					</span>

					<!-- Стоимость товара -->
					<span
							class="
							d-block
							pl-2 pb-1 mb-0 
							text-md-body-1"
					>
						Цена: {{ product.price }} ₽
					</span>
				</div>
			</v-card>
		</v-col>
	</v-row>
</template>

<script>
// Импортируем справочник товаров (в переменную 'products')
import products from "@/data/products.js";
// Импортируем справочник категорий товаров (в переменную 'products')
import categories from "@/data/categories.js";

export default {
  name: "Card",

  components: {},

  computed: {
    // Информация о товаре
    product() {
      // Фильтруем список товаров и оставляем тот товар, который просматриваем,
      // то есть у которого id совпадает с id переданным через входные параметры
      return products.motors.find(
        (product) => product.id === this.pageParams.id
      );
    },
    category() {
      // Фильтруем список категорий и оставляем ту, у которой идентификатор (id)
      // совпадает c id категории товаров
      return categories.find(
        (category) => category.id === this.product.categoryId
      );
    },
  },

  data: () => ({
    products: products,
    categories: categories,
  }),
};
</script>

<style>
.card-img {
  margin: 8px 0;
  max-height: 75vh;
  max-width: 80vw;
}

.back-button {
  position: fixed;
  z-index: 5;
  top: 50% !important;
  right: 10px;
}
</style>