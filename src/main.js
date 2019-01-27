import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import TemplateComponent from './non-sfc-components/template-component'
import LiteralComponent from './non-sfc-components/literal-component'
import XTemplateComponent from './non-sfc-components/x-template-component'
import InlineComponent from './non-sfc-components/inline-component'
import RenderFunctionComponent from './non-sfc-components/render-function-component'
import JSXComponent from './non-sfc-components/JSX-component'

export const EventBus = new Vue()

Vue.config.productionTip = false

Vue.component('template-component', {
  template: '<div style.scss="padding: 20px; border: 1px solid blue;">Template component is here!</div>'
});

// example of template components (global declaration)

Vue.component('my-checkbox-string', TemplateComponent);

Vue.component('my-checkbox-literal', LiteralComponent);

Vue.component('my-checkbox-x-template', XTemplateComponent);

Vue.component('my-checkbox-inline', InlineComponent);

Vue.component('my-checkbox-render-func', RenderFunctionComponent);

Vue.component('my-checkbox-jsx', JSXComponent);

// mounting Vue instance with $mount method (delay is possible)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// mounting Vue instance with el prop (no delay)

// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App),
// })

// basic explanation of Vue reactivity system

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
