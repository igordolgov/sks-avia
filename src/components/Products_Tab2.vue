<!-- Список товаров 2-й вкладки -->
<template>
	<!-- Карточка в каталоге -->
	<v-card height="93vh" class="rounded-0 elevation-0">
		<!-- "pa" - paddings, "ma" - margins, "pl" - padding-left, "mb" - margin-bottom... -->
		<v-card-text
				class="pa-3 text-body-2"
				style="line-height:1.2"
		>
			<v-row>
				<!-- cols=="8" означает - по умолчанию список занимает 8 из 12
				md="3" - на ноутбуках ширина карточки 3 из 12
				sm - планшет, md - ноутбук, md - настольный, lg - широкий экран -->
				<v-col
						cols="12" sm="4" md="3"	lg="3" xl="3"
						class="pa-1"
						v-for="product in products"
						:key="product.id"
				>
					<v-hover v-slot="{ hover }">
						<!-- Эффект при наведении на карточку -->
						<!-- При клике на карточку товара вызываем локальный метод "gotoPage"
                                    и передаём в него название страницы и доп. параметры для страницы -->
						<v-card
								href="#"
								@click.prevent="gotoPage('product2', { id: product.id })"
								:elevation="hover ? 16 : 6"
								width="auto"
								min-height="188px"
								class="pa-2"
						>
							<!-- Картинка карточки в каталоге -->
							<v-card class="mb-1 grey lighten-2">
								<v-img
										contain
										position="center"
										aspect-ratio="1"
										:src="product.images[0]"
								></v-img>
							</v-card>

							<!-- Описание карточки в каталоге -->
							<!-- Название товара -->
							<v-card
									height="3.8em"
									flat
									class="d-block pt-1 pb-0 font-weight-bold"
							>
								{{ product.title }}
							</v-card>

							<!-- Количество товара -->
							<v-card
									flat
									v-if="product.quantity > 0"
									class="d-block pb-0 mb-0"
							>
								Кол-во: {{ product.quantity }} шт.
							</v-card>

							<!-- Если товара нет в наличии (кол-во: 0) -->
							<v-card
									flat
									v-if="product.quantity === 0 || product.quantity === ''"
									class="red--text pb-0 mb-0"
							>
								Нет в наличии
							</v-card>

							<!-- Состояние товара (новый или б/у) -->
							<v-card flat
									class="pb-0 mb-0"
							>
								{{ product.condition }}
							</v-card>

							<!-- Стоимость товара -->
							<v-card flat
									class="pb-1 mb-0">
								Цена: {{ product.price }} ₽
							</v-card>
						</v-card>
					</v-hover>
				</v-col>
			</v-row>
		</v-card-text>
	</v-card>
</template>

<script>
	// Импортируем справочник товаров (в переменную 'products'):
	import products from "@/data/products.js";
	// Импортируем Шину событий:
	import eventBus from "@/eventBus";

	export default {
		name: "Products_Tab2",

		data: () => ({
			// товары берём из соответствующей вкладки и записываем в переменную products
			products: products.propellers,
		}),

		methods: {
			// Переход по страницам
			gotoPage(pageName, pageParams) {
				eventBus.$emit("gotoPage", pageName, pageParams);
			},
		},
	};
</script>

<style>
	.tab-height {
		height: 93.9vh;
		align-content: flex-start;
	}
</style>