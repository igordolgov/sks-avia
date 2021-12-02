// Маршрутизатор для Vue
import Vue from "vue";
import VueRouter from "vue-router";
import NotFoundPage from "@/pages/NotFoundPage.vue";
import MainPage from "@/pages/MainPage.vue";
import Products_Tab1 from "@/components/Products_Tab1.vue";
import Products_Tab2 from "@/components/Products_Tab2.vue";
import Products_Tab3 from "@/components/Products_Tab3.vue";
import Tab1_Cards from "@/components/Tab1_Cards.vue";
import Tab2_Cards from "@/components/Tab2_Cards.vue";
import Tab3_Cards from "@/components/Tab3_Cards.vue";

Vue.use(VueRouter); // Сообщаем Vue, что будем использовать vue-router

const routes = [
	// Создаём маршруты (в виде объектов)
	{
		path: "/",
		name: "main",
		component: MainPage,
	},
	{
		path: "/motors",
		name: "motors",
		component: Products_Tab1,
	},
	{
		path: "/propellers",
		name: "propellers",
		component: Products_Tab2,
	},
	{
		path: "/starters",
		name: "starters",
		component: Products_Tab3,
	},
	{
		path: "/product1", // путь в адресной строке
		name: "product1", // ключевое название страницы
		component: Tab1_Cards, //
	},
	{
		path: "/product2",
		name: "product2",
		component: Tab2_Cards,
	},
	{
		path: "/product3",
		name: "product3",
		component: Tab3_Cards,
	},
	{
		path: "*", // путь в адресной строке
		name: "notFound", // ключевое название страницы
		component: NotFoundPage, // компонент для отрисовки
	},
];

const router = new VueRouter({
	// Создаём новый экземпляр вью-роутера
	mode: "history",
	base: "/sks-avia/", // Базовый URL приложения (сайта). В режиме разработки: '/'
	routes,
});

export default router; // Экспортируем vue-router
