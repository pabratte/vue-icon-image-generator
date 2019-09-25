import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-select/dist/vue-select.css';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
