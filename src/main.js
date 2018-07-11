import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"

import NavPils from './NavPils.vue'
import InputWithBtn from './InputWithBtn.vue'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  render: h => h(NavPils)
})
