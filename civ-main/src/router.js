import {createRouter, createWebHistory } from 'vue-router';
import Home from './views/home.vue';
import Countries from './views/countries/index.vue';
import Search from './views/search/index.vue'


export default createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/civ',
            name: 'Home',
            component: Home
        },
        {
            path: '/countries',
            name: 'Countries',
            component: Countries
        },
        {
            path: '/search',
            name: 'Search',
            component: Search
        }
    ]
});
