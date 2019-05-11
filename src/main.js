import Vue from 'vue';
import App from './App.vue';
import store from './store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import underscore from 'vue-underscore';

Vue.use(ElementUI);
Vue.use(underscore);
// import {
//   Select,
//   Button
//   // ...
// } from 'element-ui'
 
// Vue.component(Select.name, Select)
// Vue.component(Button.name, Button)

const app = new Vue({
    store,
    render: h => h(App)
}).$mount('#app');
if (window.Cypress) {
    window.app = app;
}
