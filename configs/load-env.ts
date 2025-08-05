import { resolveCmdArgument } from './args-parser';
import { loadEnv } from 'vite';

export const resolveEnvironments = (mode: string): object => {
  const targetApp = resolveCmdArgument('app');
  console.log(`⚙️ Loading environment for app: ${targetApp} in mode: ${mode}`);
  return loadEnv(targetApp, process.cwd(), '');
};
