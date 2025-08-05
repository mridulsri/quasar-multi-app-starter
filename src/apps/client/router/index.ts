import { route as defineRouter } from 'quasar/wrappers';
import { Router } from 'src/shared/router/index';
import routes from './routes';

export default defineRouter(function (/* { store, ssrContext } */) {
  routes.forEach((route) => {
    Router.addRoute(route);
  });

  return Router;
});
