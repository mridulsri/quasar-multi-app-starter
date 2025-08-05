import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/apps/client/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/apps/client/pages/IndexPage.vue') }],
  },
];

export default routes;
