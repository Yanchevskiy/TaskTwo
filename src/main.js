import Vue from 'vue'

import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(BootstrapVue, VueAxios, axios)

import app from './App.vue'

new Vue({
  el: '#app',
  render: h => h(app)
})

