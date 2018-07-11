<template>
	<form class="login" @submit.prevent="addNewName">
		<div v-if="errors.length" class="login__err">
			<b>Please enter correct name master....</b>
		</div>

		<label for="username"></label>
		<input v-model="newNameText" id="username" type="text" name="username" class="placeholder" placeholder="Enter name master...">
		<div v-if="newNameText === ''" @click="addNewName" :style="{pointerEvents: 'none'}" class="add__button disabled">-DISABLED-</div> 
		<div v-else @click="addNewName" :style="{pointerEvents: 'auto'}" class="add__button">-ENABLED-</div>
	</form>
</template>

<script>
export default {
	props: ["name"],
	data () {
		return {
			newNameText: '',
			newId: this.name.length + 1,
			errors: []
		}
	},
	methods: {
		addNewName: function () {
			if(this.newNameText === '') {
				this.errors.push('Name required.');
				return
			}

			this.errors = [];
		
			this.name.push({
				id: this.newId,
				name: this.newNameText
			})
			this.newNameText = ''
			this.newId = this.name.length + 1
		}
	}
}
</script>

<style lang="sass">
	.login
		margin-top: 2rem

		.login__err
			border: 1px solid;
			text-align: center;
			margin: 10px 0px;
			padding: 15px 5px 15px 5px;
			color: #D8000C;
			background-color: #FFBABA;

		.add__button 
			position: relative
			display: inline-block
			cursor: pointer
			font-size: 90%
			font-weight: 700
			color: rgb(209,209,217)
			text-decoration: none
			text-shadow: 0 -1px 2px rgba(0,0,0,.2)
			padding: .5em 1em
			outline: none
			border-radius: 3px
			background: linear-gradient(rgb(110,112,120), rgb(81,81,86)) rgb(110,112,120)
			box-shadow: 0 1px rgba(255,255,255,.2) inset, 0 3px 5px rgba(0,1,6,.5), 0 0 1px 1px rgba(0,1,6,.2)
			transition: .2s ease-in-out

			&:hover:not(:active) 
				background: linear-gradient(rgb(126,126,134), rgb(70,71,76)) rgb(126,126,134)
	
			&:active 
				top: 1px;
				background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82)
				box-shadow: 0 0 1px rgba(0,0,0,.5) inset, 0 2px 3px rgba(0,0,0,.5) inset, 0 1px 1px rgba(255,255,255,.1)

		.disabled
			background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898 
			background-blend-mode: multiply,multiply

</style>