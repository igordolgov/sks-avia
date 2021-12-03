<template>
	<v-card  class="elevation-0">
		<v-card-text class="pa-4">
			<v-row class="white">
				<v-col class="black--text">
          <v-container class="pa-0">
            <h1 class="mb-2 text-h5 font-weight-bold">
              Приветствуем всех Вас на нашем сайте!
            </h1>

            <v-divider class="mb-1" />

            <p class="text-subtitle-1 font-italic">Надеемся, что Вы найдёте то, что искали</p>

            <span class="pa-3 text-caption text-sm-h6">Наш адрес: 
               <a href="https://yandex.ru/maps/?um=constructor%3Adf19a58525151ee2f5daf01e48a55d718f51566244a9a9113bc52cbf08c6018d&source=constructorLink" target="blanc">
               Россия, КБР, г.Нарткала, ул.Кабардинская, д.62
               </a>
            </span>

            <v-img src="https://postervdom.ru/upload/shop_3/2/1/0/item_2105/item_2105.jpg"></v-img>
          </v-container>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>

export default {
  name: 'MainPage',

  components: {

  },

  data: () => ({
    items: [
        {
          text: 'Домой',
          disabled: false,
          href: 'Home',
        },
        {
          text: 'Каталог',
          disabled: false,
          href: 'Catalog',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
  }),
};
</script>

<style scoped>

</style>