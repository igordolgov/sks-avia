<!-- Список всех товаров. КАТАЛОГ с боковой панелью навигации -->
<template>
  <v-row>
    <!-- cols=="8" означает - по умолчанию список занимает 8 из 12
		md="3" - на ноутбуках ширина карточки 3 из 12
		sm - планшет, md - ноутбук, md - настольный, lg - широкий экран -->
    <!-- <ButtonBack /> -->

    <v-col cols="12" sm="4" md="3" lg="2" class="pa-0 hidden-xs-only">
      <v-list class="px-2 px-sm-3 grey lighten-3 fill-height">
        <v-btn
          to="/"
          block
          class="
            font-weight-bold
            text-caption text-sm-body-2 text-center
            pa-2
            mt-1
            mb-3 mb-2
            rounded-lg
            elevation-6
          "
          active-class="light-blue darken-4 white--text elevation-6"
        >
          Главная
        </v-btn>

        <h2 class="mb-1 text-center">Каталог</h2>

        <v-btn
          :to="tab.route"
          block
          v-for="tab in tabs"
          :key="tab.route"
          class="
            font-weight-bold
            text-body-1 text-sm-body-2
            rounded-lg
            pa-2
            mb-2
            elevation-6
          "
          active-class="light-blue darken-4 white--text elevation-6"
        >
          {{ tab.title }}
          <v-spacer></v-spacer>
        </v-btn>
      </v-list>
    </v-col>

    <v-col cols="12" sm="8" md="9" lg="10" class="pa-0">
      <!-- router-view это аналог слота, в который вставляются компоненты
        в зависимости от url введённого в адресной строке -->
      <router-view class="grey lighten-2" />
    </v-col>
  </v-row>
</template>

<script>
// import ButtonBack from "@/components/ButtonBack";
export default {
  name: "AppSidebar",

  components: {
    // ButtonBack
  },

  data: () => ({
    // Какие входные параметры принимает компонент
    props: ["products"],

    // НАЗВАНИЯ ВКЛАДОК:
    tabs: [
      {
        title: "Моторы",
        route: "/motors",
      },
      {
        title: "Пропеллеры",
        route: "/propellers",
      },
      {
        title: "Стартеры",
        route: "/starters",
      },
    ],

    items: [
      {
        text: "Главная",
        disabled: false,
        href: "/",
      },
      {
        text: "Назад",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
    ],
  }),
};
</script>

<style scoped>
</style>
