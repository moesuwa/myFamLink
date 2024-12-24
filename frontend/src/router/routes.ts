import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/ui/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/ui/pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/ui/pages/ErrorNotFound.vue'),
  },
];

export default routes;
