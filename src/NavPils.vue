<template>
	<div class="app-pils">
		<b-nav pills>
			<input-btn :name="names"></input-btn>	
			<b-nav-item 
				v-for="element in names"
				:key="element.id"
				:name="element.name"
			>{{element.name}}</b-nav-item>
		</b-nav>
	</div>  
</template>

<script>
import inputbtn from './InputWithBtn.vue';
import axios from 'axios';

export default { 
	props: ["element"],
	data () {
		return {
			names: [] 
		}
	},
	components: {
		'input-btn': inputbtn
	}  
}
</script>

<style lang="sass" scoped>
	.app-pils
		display: flex
		flex-direction: column
		align-items: center
		min-width: 300px

	.nav-pills
		flex-direction: column

	.nav-link 
		cursor: default
		color: black

	.nav-item 
		margin-top: 10px
		border: 1px solid #A7988B
		border-radius: 5px
			
</style>