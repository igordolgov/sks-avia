<!-- Список всех товаров. КАТАЛОГ -->
<template>
	<v-row>
		<!-- cols=="8" означает - по умолчанию список занимает 8 из 12
		md="3" - на ноутбуках ширина карточки 3 из 12
		sm - планшет, md - ноутбук, md - настольный, lg - широкий экран -->
		<v-col cols="4" sm="3" md="2" class="pa-0">
			<v-list class="px-2 px-sm-3 grey lighten-3 fill-height">
				<v-btn
					to="/" block
					class='font-weight-bold text-caption text-sm-body-2
					text-center	pa-2 mt-1 mb-3 mb-2 rounded-lg elevation-6'
					active-class='light-blue darken-4 white--text elevation-6'>
					Главная
				</v-btn>

				<h2 class="mb-1 text-center">
					Каталог
				</h2>
				
				<v-btn
					:to="tab.route" block
					v-for='tab in tabs' :key='tab.route'
					class='font-weight-bold text-caption
					text-sm-body-2 rounded-lg pa-2 mb-2 elevation-6'
					active-class='light-blue darken-4 white--text elevation-6'
				>
					{{ tab.title }}
					<v-spacer></v-spacer>
				</v-btn> 
			</v-list>
		</v-col>
		
		<v-col cols="8" sm="9" md="10" class="pa-0">
			<router-view class="grey lighten-2" />
		</v-col>
	</v-row>
</template>

<script>
export default {
	name: 'MainLayout',

	components: { 
	},
	
	data: () => ({
		// НАЗВАНИЯ ВКЛАДОК:
		tabs: [
			{
				title: 'Моторы',
				route: '/motors'
			}, 
			{
				title: 'Пропеллеры',
				route: '/propellers'
			}, 
			{
				title: 'Стартеры',
				route: '/starters'
			}, 
		],
	}),
}
</script>

<style>
	.button-active {
		background-color:#006699;
	}
</style>
