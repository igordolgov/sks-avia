<template>
	<v-card>
		<v-card-text class="pa-4">
			<v-row class="tab-height white">
				<v-col class="black--text">
          <v-container class="pa-0">
            <h1 class="text-h5 font-weight-bold mb-2">
              Приветствуем всех Вас на нашем сайте!
            </h1>
            <v-divider class="mb-1" />
            <p class="text-subtitle-1 font-italic">Надеемся, что Вы найдёте то, что искали</p>

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