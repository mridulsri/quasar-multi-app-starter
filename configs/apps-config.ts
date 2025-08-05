export interface SourceFiles {
  rootComponent: string;
  router: string;
  store: string;
}

export interface AppSourceFilesMap {
  [key: string]: SourceFiles;
}

export const appSourceFilesMap: AppSourceFilesMap = {
  admin: {
    rootComponent: '/src/apps/admin/App.vue',
    router: '/src/apps/admin/router/index',
    store: '/src/apps/admin/store/index',
  },
  client: {
    rootComponent: '/src/apps/client/App.vue',
    router: '/src/apps/client/router/index',
    store: '/src/apps/client/store/index',
  },
};
