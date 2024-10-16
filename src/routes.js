import { createRouter, createWebHashHistory } from 'vue-router';

const routerHistory = createWebHashHistory();

import HomePage from './pages/TheHome.vue';
import AboutPage from './pages/TheAbout.vue';
import Item from './pages/TheItem.vue';
import NotFoundPage from './pages/NotFound.vue';

const routers = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },

    {
      path: '/:itemAlias',
      name: 'itemAlias',
      component: Item,
    },
    {
      path: '/:notFoundPage',
      name: 'notFoundPage',
      component: NotFoundPage,
    },
  ],
});

export default routers;
