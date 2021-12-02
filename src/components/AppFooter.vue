<template>
	<v-footer
		dark
		padless
	>
		<v-card
			class="flex"
			flat tile
		>
			<v-card-title class="primary darken-2 py-2 pl-6">
				<strong class="subheading font-weight-light hidden-sm-and-down">
					Наши контакты в социальных сетях
				</strong>

				<v-spacer></v-spacer>

				<v-btn
					v-for="icon in icons" :key="icon"
					class="mx-4"
					dark icon
				>
					<v-icon size="24px">
						{{ icon }}
					</v-icon>
				</v-btn>		
			</v-card-title>
		</v-card>
	</v-footer>
</template>

<script>
// import Products from '@/components/Products'

export default {
	name: 'AppFooter',
	data: () => ({
		icons: [
			'mdi-facebook',
			'mdi-twitter',
			'mdi-instagram',
			'mdi-whatsapp',
		],
	}),
}
</script>

<style>

</style>