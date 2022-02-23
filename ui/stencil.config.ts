import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';

// const angularValueAccessorBindings: ValueAccessorConfig[] = [];

import { angularOutputTarget as angular } from '@stencil/angular-output-target';

export const config: Config = {
  namespace: 'multiversy',
  plugins: [sass()],
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@multiversy/ui',
      proxiesFile: '../ui-react/src/components/stencil-generated/index.ts',
      includeDefineCustomElements: true,
    }),
    angular({
      componentCorePackage: `@multiversy/ui`,
      directivesProxyFile: `../ui-angular/projects/ui-angular/src/lib/stencil-generated/components.ts`
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
