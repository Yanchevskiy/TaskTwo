
Vue.component('name-item', {
  template: '\
    <li>\
      <a href="#">\
        {{ name }}\
      </a>\
    </li>\
  ',
  props: ['name']
})

new Vue({
  el: '.app',
  data: {
    newNameText: '',
    names: [
      {
        id: 1,
        name: 'Сенсей Василий'
      },
      {
        id: 2,
        name: 'Падаван Игорь'
      }
    ],
    nextNameId: 3
  },
  methods: {
    addNewName: function () {
      this.names.push({
        id: this.nextNameId++,
        name: this.newNameText
      })
      this.newNameText = ''
    }
  }
})