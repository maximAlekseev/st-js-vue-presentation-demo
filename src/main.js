import Vue from 'vue'
import App from './App.vue'
import { router } from './router'

export const EventBus = new Vue()

Vue.config.productionTip = false

Vue.component('template-component', {
  template: '<div style.scss="padding: 20px; border: 1px solid blue;">Template component</div>'
});

// example of template components (global declaration)

Vue.component('my-checkbox-string', {
  template: `<div class="checkbox-wrapper" @click="check"><div :class="{ checkbox: true, checked: checked }"></div><div class="title">{{ title }}</div></div>`,
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});

Vue.component('my-checkbox-literal', {
  template: `<div class="checkbox-wrapper" @click="check">
			   <div :class="{ checkbox: true, checked: checked }"></div>
			   <div class="title">{{ title }}</div>
			</div>`,
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});

Vue.component('my-checkbox-x-template', {
  template: '#checkbox-template',
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});

Vue.component('my-checkbox-inline', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  }
});

Vue.component('my-checkbox-render-func', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render(createElement) {
    return createElement(
        'div', {
          attrs: {
            'class': 'checkbox-wrapper'
          },
          on: {
            click: this.check
          }
        }, [
          createElement(
              'div', {
                'class': {
                  checkbox: true,
                  checked: this.checked
                }
              }
          ),
          createElement(
              'div', {
                attrs: {
                  'class': 'title'
                }
              }, [this.title]
          )
        ]
    );
  }
});

Vue.component('my-checkbox-jsx', {
  data() {
    return {
      checked: false,
      title: 'Check me'
    }
  },
  methods: {
    check() {
      this.checked = !this.checked;
    }
  },
  render() {
    return <div class="checkbox-wrapper" onClick={ this.check }>
      <div class={{ checkbox: true, checked: this.checked }}></div>
      <div class="title">{ this.title }</div>
    </div>
  }
});

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
