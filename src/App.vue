<template>
	<div class="global-wrap">
		<list></list>
		<pils></pils>
	</div>
</template>

<script>
import simpleList from './simpleList.vue';
import NavPils from './NavPils.vue';

export default {
  data () {
    return {
      
    }
  },
  components: {
    'list': simpleList,
    'pils': NavPils
  }
}
</script>

<style lang="sass">
  
  .global-wrap
  	display: flex
  	flex-direction: column

</style>