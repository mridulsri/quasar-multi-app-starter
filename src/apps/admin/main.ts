import { createApp, markRaw } from 'vue';
import App from 'src/apps/admin/App.vue';
import createRouter from 'src/apps/admin/router';
import createStore from 'src/apps/admin/stores';
import { Quasar } from 'quasar';
import quasarLang from 'quasar/lang/en-US';
import '@quasar/extras/material-icons/material-icons.css';
import 'quasar/src/css/index.sass'; // Quasar CSS common to both

const store = typeof createStore === 'function' ? await createStore({}) : createStore;

const router = markRaw(
  typeof createRouter === 'function' ? await createRouter({ store }) : createRouter,
);

// make router instance available in store
//store.use(({ store }) => { store.router = router })

export default function bootstrap(appId: string) {
  console.log(`🚀 Bootstrapping app: ${appId}`);
  const app = createApp(App);

  app.config.performance = true; // Enable performance tracking

  app.use(store);
  app.use(router);
  app.use(Quasar, {
    plugins: {}, // Add Quasar plugins specific to App
    lang: quasarLang,
    // You can also define global defaults for Quasar components here specific to App
  });

  app.mount('#app');
}
