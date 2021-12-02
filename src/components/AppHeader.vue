<!-- "Шапка" сайта, верхняя часть -->
<template>
	<div>
		<!-- v-app-bar - аналог <header> в html. Обязательно должен иметь аттрибут app -->
		<v-app-bar app fixed dark dense flat style="background-color: #069">
			<v-container d-flex class="px-0">
				<v-img
					src="img/logo-sks-white.png"
					class="mr-2 my-auto"
					max-width="53px"
					max-height="42px"
					style="background-position: center center"
				>
				</v-img>

				<v-app-bar-title
					v-text="'SKSAVIA.RU'"
					class="text-body-1 my-auto"
				></v-app-bar-title>

				<v-spacer></v-spacer>

				<v-btn
					class="hidden-xs-only ml-3 py-0 elevation-2 rounded-xl"
					style="background-color: #0075b0"
					v-for="item in menuItems"
					:href="item.adress"
					:key="item.index"
				>
					{{ item.title }}
				</v-btn>

				<v-app-bar-nav-icon
					@click.stop="drawer = !drawer"
					class="hidden-sm-and-up"
				>
				</v-app-bar-nav-icon>
			</v-container>
		</v-app-bar>

		<v-navigation-drawer v-model="drawer" temporary fixed width="auto">
			<v-list nav dense>
				<v-list-item-group v-model="group">
					<v-list-item
						v-for="item in menuItems"
						:key="item.index"
						:href="item.adress"
					>
						<v-btn
							style="background-color: #069"
							elevation="6"
							x-large
							class="white--text my-1 rounded-lg"
							>
							<v-list-item-title>
								{{ item.title }}
							</v-list-item-title>
						</v-btn>
					</v-list-item>
				</v-list-item-group>
			</v-list>
		</v-navigation-drawer>
	</div>
</template>

<script>
export default {
	name: "AppHeader",
	data: () => ({
		drawer: false, // Отображение или скрытие мобильного меню
		group: null,
	}),
  computed: {
		menuItems() {
			return [
				{
					index: "0",
					title: "+7(903)425-30-68",
					adress: "tel:+79034253068",
				},
				{
					index: "1",
					title: "sksavia@mail.ru",
					adress: "mailto:sksavia@mail.ru",
				},
			];
		},
	},
};
</script>

<style>
</style>