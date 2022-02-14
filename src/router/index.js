// Маршрутизатор для Vue
import Vue from "vue";
import VueRouter from "vue-router";
// Импортируем компоненты для возможности их использования в этом файле
import MainPage from "@/pages/MainPage.vue";
import ProductList from "@/pages/ProductList.vue";
import ProductItem from "@/components/ProductItem.vue";
import NotFoundPage from "@/pages/NotFoundPage.vue";
// Импортируем справочник товаров (в переменную 'products'):
import products from "@/data/products.js";

Vue.use(VueRouter); // Сообщаем Vue, что будем использовать vue-router

const routes = [
    // Создаём маршруты (в виде объектов с тремя свойствами)
    {
        path: "/", // путь (то, что отображается в строке url)
        name: "main", // ключевое название страницы (имя роута)
        component: MainPage, // какой компонент отображать при введённом url
    },
    {
        path: "/motors",
        name: "motors",
        component: ProductList,
        props: { products: products.motors, }
    },
    {
        path: "/motors/:id",
        name: "ProductItem",
        component: ProductItem,
    },
    {
        path: "/propellers",
        name: "propellers",
        component: ProductList,
        props: { products: products.propellers, }
    },
    {
        path: "/propellers/:id",
        name: "propellers",
        component: ProductItem,
    },
    {
        path: "/starters",
        name: "starters",
        component: ProductList,
        props: { products: products.starters, }
    },
    {
        path: "/starters/:id",
        name: "starters",
        component: ProductItem,
    },
    {
        path: "*",
        name: "notFound",
        component: NotFoundPage,
    },
];

const router = new VueRouter({
    // Создаём новый экземпляр вью-роутера
    routes,
    mode: "history",
    base: "/", // Базовый URL приложения (сайта). В режиме разработки: '/'
});

export default router; // Экспортируем vue-router