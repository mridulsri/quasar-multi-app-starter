import { store as defineStore } from 'quasar/wrappers';
import { pinia } from 'src/shared/stores/index';

export default defineStore((/* { ssrContext } */) => {
  // You can add Pinia plugins here specific to app
  // pinia.use(SomePiniaPlugin)

  return pinia;
});
