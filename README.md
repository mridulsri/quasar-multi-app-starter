# Quasar App (quasar-multi-app-starter)

Quasar (Vite) Vue 3 multi-app starter with support for managing multiple apps within a single codebase.

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

This starter kit includes two apps: admin and client.

To run a specific app, use the --app flag in the command line:

```bash
quasar dev --app=client  // for client app
quasar dev --app=admin  // for admin app
```

**Note:** If no --app parameter is provided, the client app will run by default.

Environment variables can be placed in .env.admin or .env.client, respectively.

**Entry Point**
The entry point for the application is src/main.ts. Based on the app ID received from the --app command-line argument, it dynamically calls the appropriate bootstrap method from either src/apps/client/main.ts or src/apps/admin/main.ts to start the application.

Each app has its own App.vue, layout, router, and store. These can be customized independently based on project requirements.

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).
