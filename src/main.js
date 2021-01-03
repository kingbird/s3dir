import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import configRouter from './router.config';

Vue.use(VueRouter);
Vue.config.productionTip = false;

let routeConfig = {
    base: __dirname,
    routes: configRouter,
    mode: 'hash'
};

const router = new VueRouter(routeConfig);

new Vue({
    render: h => h(App),
    router
}).$mount('#app');
