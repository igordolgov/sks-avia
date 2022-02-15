<template>
  <v-card>
    <v-card-text class="pa-4">
      <v-row class="tab-height white">
        <v-col cols="12" sm="4" md="3" lg="2" class="pa-0 hidden-sm-and-up">
          <v-list class="px-2 px-sm-3 grey lighten-3 fill-height">
            <h2 class="mb-1 text-center">Каталог</h2>

            <v-btn
              :to="tab.route"
              block
              v-for="tab in tabs"
              :key="tab.route"
              class="
                font-weight-bold
                text-caption text-sm-body-2
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
        <v-col class="black--text">
          <v-container class="pa-0">
            <h1 class="text-h5 font-weight-bold mb-2">
              Приветствуем Вас на нашем сайте!
            </h1>
            <v-divider class="mb-1" />
            <p class="text-subtitle-1 font-italic">
              Надеемся, что Вы найдёте то, что искали
            </p>

            <v-img
              src="https://postervdom.ru/upload/shop_3/2/1/0/item_2105/item_2105.jpg"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "MainPage",

  data: () => ({
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
  }),
};
</script>

<style scoped>
</style>