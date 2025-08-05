import type { RouteRecordRaw } from 'vue-router';

const sharedRoutes: RouteRecordRaw[] = [
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/shared/pages/ErrorNotFound.vue'),
  },
];

export default sharedRoutes;
