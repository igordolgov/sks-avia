<template> <!-- Разметка. Что и как отображать на странице -->
	<v-app>
		<AppHeader /> <!-- Подключаем компонент AppHeader ("шапка" сайта) -->

		<v-main class="grey lighten-1"> <!-- v-main - аналог тега main в html -->
			<v-container>
				<!-- "component" - специальный тег во Vue.js, который позволяет отображать
				любой компонент динамически (в свойстве ":is" передаём название компонента).
				В данном случае это вычисляемое свойство "currentPageComponent" -->
				<component
					:is="currentPageComponent"
					:page-params="currentPageParams"
					@gotoPage="(pageName, pageParams) => gotoPage(pageName, pageParams)"
				/>
			</v-container>
		</v-main>
	</v-app>
</template>

<script>
// Импортируем компоненты (страницы) для возможности использования в текущем компоненте.
// Символ "@" означает "путь до папки 'src'"

// Импортируем "Глобальную шину"
import eventBus from '@/eventBus';

import MainPage from "@/pages/MainPage" //
import AppHeader from "@/components/AppHeader"
import MainLayout from "@/pages/MainLayout"
import Tab1_Cards from "@/components/Tab1_Cards" // Карточка товара из 1-й вкладки
import Tab2_Cards from "@/components/Tab2_Cards" // Карточка товара из 2-й вкладки
import Tab3_Cards from "@/components/Tab3_Cards" // Карточка товара из 2-й вкладки
import product1 from "@/components/Products_Tab1" // Список всех товаров 1-й вкладки
import Products_Tab2 from "@/components/Products_Tab2" // Список всех товаров 2-й вкладки
import Products_Tab3 from "@/components/Products_Tab3" // Список всех товаров 2-й вкладки
import NotFoundPage from "@/pages/NotFoundPage" // Страница ошибки (если страница не найдена)

/* Маршруты до страниц. Это объект, где ключ - название страницы, значение - компонент,
который должен отобразиться при переходе на эту страницу */
const routes = {
	main: 'MainLayout',
	product1: 'Tab1_Cards',
	product2: 'Tab2_Cards',
	product3: 'Tab3_Cards',
	motors: 'Products_Tab1',
	propellers: 'Products_Tab2',
	starters: 'Products_Tab3',
}

export default {
	// Название этого компонента
	name: 'App',

	// Указываем, какие компоненты использовать
	components: {
		AppHeader,
		MainPage, 
		MainLayout,
		Tab1_Cards, 
		Tab2_Cards, 
		Tab3_Cards, 
		NotFoundPage, 
		// Products_Tab1, 
		Products_Tab2, 
		Products_Tab3 
	},

	data() { // СОСТОЯНИЕ
		return {
			/* Свойство (переменная) для хранения текущей страницы,
			по умолчанию - главная страница (main) */
			currentPage: 'main',
			// Хранилище параметров страницы
			currentPageParams: {},
		}
	},
	methods: {
		// Переход по страницам
		gotoPage(pageName, pageParams) {
			this.currentPage = pageName;
			this.currentPageParams = pageParams || {};
		}
	},
	
	created() {
		eventBus.$on('gotoPage', (pageName, pageParams) => this.gotoPage(pageName, pageParams))
	},
	computed: {
		/* Вычисляемое свойство, которое возвращает название компонента в зависимости
		от выбранной страницы (в списке "routes"), иначе возвращает 'NotFoundPage' */
		currentPageComponent() {
			return routes[this.currentPage] || 'NotFoundPage';
		},
		product() { // Информация о просматриваемом товаре
			return product1.find((product) => product.id === +this.$route.params.id);
		/* В списке товаров находим товар, у которого идентификатор
		совпадает с идентификатором, переданным через входные параметры */
		},
		// category() {
			// return categories.find((category) => category.id === this.product.categoryId);
		// аналогично для категории (для отображения категории на карточке товара)
		// },
	},
};
</script>

<style scoped>

</style>