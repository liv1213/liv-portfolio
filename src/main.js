import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

Vue.config.productionTip = false

//LOGIN
import About from './components/About.vue';
import Homepage from './components/Homepage.vue';
import Contact from './components/Contact.vue';


Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(VueResource);
// Vue.use(Router)


const routes = [
  {
    path: '/',
    component: Homepage,
  },
  {
    path: '/about',
    component: About,
   
  },
  {
    path: '/contact',
    component: Contact,
  },
  
]


const router = new VueRouter({
  routes
})



new Vue({
  render: h => h(App),
  router
}).$mount('#app')
