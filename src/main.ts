console.log('🔥 This is the real entry point');
const allowed = ['admin', 'client'];
const appId = process.env.VITE_APP_ID || 'client';

if (!allowed.includes(appId)) {
  throw new Error(`Invalid VITE_APP_ID "${appId}"`);
}

await import(`./apps/${appId}/main.ts`)
  .then(({ default: bootstrap }) => {
    bootstrap();
  })
  .catch((err) => {
    console.error(`[Quasar] Failed to load app: ${appId}`, err);
  });
