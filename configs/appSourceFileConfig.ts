import type { SourceFiles } from './apps-config';
import { appSourceFilesMap } from './apps-config';

import { resolveCmdArgument } from './args-parser';

export const resolveSourceFile = (): SourceFiles => {
  const targetApp = resolveCmdArgument('app');
  console.log(`⚙️  Loading sourceFiles for app: ${targetApp}`);
  return (
    appSourceFilesMap[targetApp] ||
    ({
      rootComponent: '/src/apps/client/App.vue',
      router: '/src/apps/client/router/index',
      store: '/src/apps/client/store/index',
    } as SourceFiles)
  );
};
