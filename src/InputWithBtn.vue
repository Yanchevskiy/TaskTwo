<template>
	<form class="login" @submit.prevent="addNewName">
		<div v-if="errors.length" class="login-err">
			<b>Пожалуйста заполните поле имя...</b>
		</div>

		<div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
			<input v-model="newNameText" @keyup.enter.prevent="addNewName" class="mdl-textfield__input" type="text" pattern="[A-Z,a-z,А-Я,а-я]*" id="username" />
			<input type="text" style="display:none;">
			<label class="mdl-textfield__label" for="username">Введите имя</label>
			<span class="mdl-textfield__error">Введите имя только буквами и без пробелов!</span>
		</div>
		
		<div v-if="inputValid" @click="addNewName" :style="{pointerEvents: 'none'}" class="add-button add-button_disabled">-DISABLED-</div> 
		<div v-else @click="addNewName" :style="{pointerEvents: 'auto'}" class="add-button">-ENABLED-</div>
	</form>
</template>

<script>
import axios from 'axios';

export default {
	props: ["name"],
	data () {
		return {
			newNameText: '',
			newId: this.name.length + 1,
			errors: [],
			serverArr: []
		}
	},
	computed: {
		inputValid: function() {
			if(this.newNameText === "" || /\s/.test(this.newNameText) || /\d/.test(this.newNameText)) {
				return true;
			} 
			else {
				return false;
			}
		}
	},
	methods: {
		addNewName: function (e) {
			e.preventDefault();

			if(this.newNameText === '') {
				this.errors.push('Name required.');
				return
			};

			this.errors = [];

			this.name.push({
				id: this.newId,
				name: this.newNameText
			});

			axios.post("https://test-project-775bb.firebaseio.com/inputData.json", {
				id: this.newId,
				name: this.newNameText
			}) 
			.then(response => console.log(response));

			this.newNameText = '';
			this.newId = this.name.length + 1;
		}
	},
	mounted() {
		axios
			.get("https://test-project-775bb.firebaseio.com/inputData.json")
			.then(response => {
				this.serverArr = Object.values(response.data)
				for (let i = 0; i < this.serverArr.length; i++) {
					this.name.push(this.serverArr[i])
				}
				this.newId = this.serverArr.length + 1
			})
			.catch(error => console.log(error));     
	}
}
</script>

<style lang="sass" scoped>
	.login
		margin-top: 2rem
		display: flex
		flex-wrap: wrap
		align-items: center
		width: 35vw
		min-width: 400px

	.login-err
		width: 100%
		border: 1px solid
		text-align: center
		margin: 10px 0px
		padding: 15px 5px 15px 5px
		color: #D8000C
		background-color: #FFBABA

	.add-button
		display: flex
		align-content: center
		align-items: center
		position: relative
		cursor: pointer
		font-size: 90%
		font-weight: 700
		color: #ffffff
		text-decoration: none
		text-shadow: 0 -1px 2px rgba(0,0,0,.2)
		padding: .5em 1em
		margin-left: 10px
		outline: none
		border-radius: 3px
		background: linear-gradient(rgb(110,112,120), rgb(81,81,86)) rgb(110,112,120)
		box-shadow: 0 1px rgba(255,255,255,.2) inset, 0 3px 5px rgba(0,1,6,.5), 0 0 1px 1px rgba(0,1,6,.2)
		transition: .2s ease-in-out

		&:hover:not(:active) 
			background: linear-gradient(rgb(126,126,134), rgb(70,71,76)) rgb(126,126,134)
	
		&:active 
			top: 1px
			background: linear-gradient(rgb(76,77,82), rgb(56,57,62)) rgb(76,77,82)
			box-shadow: 0 0 1px rgba(0,0,0,.5) inset, 0 2px 3px rgba(0,0,0,.5) inset, 0 1px 1px rgba(255,255,255,.1)

		.add-button_disabled
			background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898 
			background-blend-mode: multiply,multiply

	.mdl-textfield
		flex-grow: 1
		width: auto

	.mdl-layout 
		align-items: center
		justify-content: center

	.mdl-layout__content 
		padding: 24px
		flex: none

	.mdl-textfield__error 
		width: 100%
		left: 0
		text-align: left

	.mdl-textfield__input
		margin-bottom: 8px

</style>