import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('src/apps/admin/layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('src/apps/admin/pages/IndexPage.vue') }],
  },
];

export default routes;
