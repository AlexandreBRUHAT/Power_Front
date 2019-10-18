import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

Vue.config.productionTip = false

Vue.use(VueMaterial);

Vue.material.theme.register('default', {
  primary: '#F29202',
  accent: '#F7C375'
})

new Vue({
  render: h => h(App),
}).$mount('#app')
