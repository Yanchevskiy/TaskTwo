<template>
  <li class="item">
    <div class="svg-box">
      <svg  class="svg-box__item" xmlns="http://www.w3.org/2000/svg"  xmlns:xlink="http://www.w3.org/1999/xlink">
        <use :xlink:href=svgFullDir></use>
      </svg>
    </div>

    <p class="item__title">{{element.title}}</p>

    <div class="counter-box" :style="{backgroundColor: element.color}">
      <span class="counter-box__value">{{element.value}}</span>
    </div>
  </li>
</template>

<script>
export default {
  props: ["element"],
  data () {
    return {
      
    }
  },
  computed: {
    svgFullDir: function () {
      return "blob/master/src/assets/sprite.svg" + this.element.icon
    } 
  }
}
</script>

<style lang="sass" scoped>
  $white: #FFFFFF
  $color-svg: #F1EBE4

  .item
    flex-basis: 100% 
    display: flex
    justify-content: flex-start
    align-items: center
    margin-bottom: 5%
    font-size: calc( (100vw - 305px)/(1920 - 305) * (30 - 15) + 15px)

    .item__title 
      display: flex
      margin-bottom: 0
      padding-left: 5%
      font-size: calc( (100vw - 305px)/(1920 - 305) * (30 - 15) + 15px)
      white-space: nowrap

  .counter-box 
    border-radius: 5px
    padding: 2%
    margin-left: 5%

    .counter-box__value 
      color: $white

  .svg-box 
    display: flex
    flex-shrink: 0
    height: 0
    width: 10%
    padding-top: 10%
    position: relative

    .svg-box__item 
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      fill: $color-svg

</style>
