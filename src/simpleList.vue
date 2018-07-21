<template>
  <div class="app-list">
    <object type="image/svg+xml" data="tree/master/src/assets/sprite.svg" v-show="false"></object>
    <h1 class="app__head">Разделы</h1> 
    <transition-group appear name="show" tag="ul">
      <icon 
        v-for="item in dataArr"
        :element="item"
        :key="item.id"
      ></icon>
    </transition-group>
  </div>    
</template>

<script>
import iconItem from './icon.vue';
import axios from 'axios';

export default {
  data () {
    return {
      dataArr: []        
    }
  },
  components: {
    'icon': iconItem
  },
  mounted() {
    axios
      .get("https://test-project-775bb.firebaseio.com/dataArr.json")
      .then(response => this.dataArr = response.data)
      .catch(error => console.log(error));     
  }
}
</script>

<style lang="sass" scoped>
  $color-background: #424C52
  $color-text-complimentary: #F1EBE4
  $white: #FFFFFF

  * 
    box-sizing: border-box

  html, body, div, span, applet, object, iframe,h1, h2, h3, h4, h5, h6, p, blockquote, pre,a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video 
    margin: 0
    padding: 0
    border: 0
    font-size: 100%
    font: inherit
    vertical-align: baseline

  body 
    line-height: 1

  html 
    font-size: 62.5%

  ol, ul 
    list-style: none

  .app-list
    width: 35vw 
    min-width: 305px
    margin: auto
    display: flex
    flex-wrap: wrap
    padding-left: 2%
    border-radius: 10px
    background-color: $color-background
    color: $color-text-complimentary

    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;

    .app__head 
      flex-basis: 100%
      margin-bottom: 5%
      font-size: calc( (100vw - 305px)/(1920 - 305) * (80 - 40) + 40px)

    ul
      display: flex
      flex-wrap: wrap
      
  .show-enter-active, .show-leave-active 
    transition: opacity .5s

  .show-enter, .show-leave-to 
    opacity: 0

</style>
