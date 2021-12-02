<!-- Карточка товара из 1-й вкладки -->
<template>
	<div>
		

		<div class="pa-0">
			<!-- Меню навигации. "Хлебные крошки" -->
			<!-- <v-row>
				<v-col class="pb-0">
					<v-breadcrumbs
						:items="items" 
						class="grey lighten-3 
						py-0 px-2 elevation-6 rounded-lg"
					>
						<template v-slot:item="{ item }">
							<v-btn>

							<v-breadcrumbs-item
								:href="item.href"
								class="pa-2 text-caption text-lg-body-2 font-weight-black"
							>
								{{ item.text.toUpperCase() }}
							</v-breadcrumbs-item>
							</v-btn>
						</template>
					</v-breadcrumbs>
				</v-col>
			</v-row> -->

			<v-row
				class="pb-0"
				justify="center"
			>

				<!-- Фотографии товара -->
				<v-col
					cols="12" sm="7" md="9" lg="7" xl="7"
					class="pa-0 mb-3"
				>
					<v-sheet
						class="cards-height
						pa-0 mx-auto
						d-flex align-center
						grey lighten-2 elevation-10
					">
						<v-carousel
                            v-model="model"
							height="100%"
							:aspect-ratio="1"
							light
							hide-delimiters
							class="pa-0
						">
							<v-carousel-item
								v-for="(image,i) in product.images"
								:key="i"
								:src="image.src"
								contain
								eager
								height="100%"
								:aspect-ratio="1"
							>
							</v-carousel-item>
							
							<ButtonBack />
						</v-carousel>
					</v-sheet>
				</v-col>

				<!-- Описание товара -->
				<v-col
					col="12" sm="3" md="2" xl="2"
					class="py-0 px-sm-0 pb-sm-3 pr-lg-0 mx-sm-0"
				>
					<v-sheet
						class="fill-height pa-2 mx-sm-auto
						elevation-10 rounded-lg">

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
								v-if="product.quantity === 0 || product.quantity === ''"
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
					</v-sheet>
				</v-col>
			</v-row>
		</div>
	</div>
</template>

<script>
import ButtonBack from "@/components/ButtonBack";
// Импортируем справочник товаров (в переменную 'products')
import products from "@/data/products.js";
// Импортируем справочник категорий товаров (в переменную 'products')
import categories from "@/data/categories.js";
// import eventBus from '@/eventBus';

export default {
  name: "Tab1_Cards",

  props: ["pageParams"],

  components: {
    ButtonBack,
  },
  
  data: () => ({
    model: 0,
    products: products,
    categories: categories,
	items: [
        {
          text: 'Главная',
          disabled: false,
          href: '/',
        },
        {
          text: 'Моторы',
          disabled: false,
          href: '/motors',
        },
        {
          text: ' ',
          disabled: true,
          href: '/product1',
        },
      ],
  }),

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
};
</script>

<style>
/* .v-carousel__controls {
	transform: translateY(12px) !important;
	padding-top: 12px !important;
	padding-bottom: 12px !important;
} */

	.mdi-chevron-right,
	.mdi-chevron-left {
		color: white !important;
	}

	.mdi-minus {
		color: black !important;
	}

	/* @media (min-width: 1800px) {
		.cards-height {
			height: 1000px !important;
			width: 1000px !important;
		}
	} */

	@media (min-width: 1900px) {
		.cards-height {
			height: 850px !important;
			width: 850px !important;
		}
	}

	@media (min-width: 1060px) and (max-width: 1920px) and (orientation: portrait) {
		.cards-height {
			height: 860px !important;
			width: 860px !important;
		}
	}

	@media (min-width: 1179px) and (max-width: 1920px) and (orientation: portrait) {
		.cards-height {
			height: 754px !important;
			width: 754px !important;
		}
	}

	@media (min-width: 1179px) and (max-width: 1919px) and (orientation: landscape) {
		.cards-height {
			height: 590px !important;
			width: 590px !important;
		}
	}

	@media (min-width: 1024px) and (max-width: 1180px) and (orientation: landscape) {
		.cards-height {
			height: 700px !important;
			width: 700px !important;
		}
	}

	@media (min-width: 640px) and (max-width: 1023px)  and (orientation: landscape) {
		.cards-height {
			height: 360px !important;
			width: 360px !important;
		}
	}

	@media (min-width: 640px) and (max-width: 900px) and (orientation: portrait) {
		.cards-height { 
			height: 416px !important;
			width: 416px !important;
		}
	}

	@media (min-width: 740px) and (max-width: 1023px) and (orientation: landscape) {
		.cards-height { 
			height: 300px !important;
			width: 300px !important;
		}
	}

	@media (min-width: 640px) and (max-width: 680px) and (orientation: landscape) {
		.cards-height {
			height: 290px !important;
			width: 290px !important;
		}
	}

	@media (max-width: 639px) and (orientation: portrait) {
		.cards-height {
			width: 100% !important;
		}
	}
</style>