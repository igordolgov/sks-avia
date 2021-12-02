<!-- Кнопка "Назад" в карточке товара -->
<template>
	<div class="text-right button-styles">
		<v-btn
			href="#"
			@click.prevent="gotoPage('main')"
			style="background-color: #069"
			dark z-index="50"
			class="mx-2 my-1 rounded-xl elevation-4"
		>
			Назад
		</v-btn>
	</div>
</template>

<script>
// Импортируем справочник товаров (в переменную 'products')
import products from "@/data/products.js";
// Импортируем справочник категорий товаров (в переменную 'products')
import categories from "@/data/categories.js";
import eventBus from "@/eventBus";

export default {
	name: "ButtonBack",

	data: () => ({
		products: products,
		categories: categories,
	}),

	methods: {
		// Переход по страницам
		gotoPage(pageName) {
			eventBus.$emit("gotoPage", pageName);
		},
	},
};
</script>

<style>
	.button-styles {
		position: relative;
		margin-bottom: -45px !important;
		bottom: 50px !important;
	}
</style>