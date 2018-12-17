import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

Vue.config.productionTip = false

Vue.component('template-component', {
  template: '<div style="padding: 20px; border: 1px solid blue;">Template component</div>'
});

// mounting Vue instance with $mount method (delay is possible)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// mounting Vue instance with el prop (no delay)

// new Vue({
//   el: '#app',
//   render: h => h(App),
// })

// declaring root-level reactive props (is it?)

// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       value: 1
//     }
//   },
//   template: `<div>
//     <h3 @click="inc">This is dummy app</h3>
//     <p @click="inc">{{value}}</p>
//     <p @click="incAdded">{{newValue}}</p>
// </div>`,
//   methods: {
//     inc() {
//       this.value++;
//     },
//     incAdded() {
//       console.log('newValue is trying to update');
//       this.newValue++;
//     }
//   }
// })
//
// vm.value = 2
//
// vm.newValue = 7

// declaring sub-level reactive props

// const vm = new Vue({
//   el: '#app',
//   data() {
//     return {
//       obj: {
//         value: 1
//       }
//     }
//   },
//   template: `<div>
//     <h3 @click="inc">This is dummy app</h3>
//     <p @click="inc">{{obj.value}}</p>
//     <p @click="incAdded">{{obj.newValue}}</p>
// </div>`,
//   methods: {
//     inc() {
//       this.obj.value++;
//     },
//     incAdded() {
//       console.log('obj.newValue is trying to update');
//       this.obj.newValue++;
//     }
//   }
// })
//
// vm.obj.value = 2
//
// vm.obj.newValue = 7

// Vue.set(vm.obj, 'newValue', 5)
