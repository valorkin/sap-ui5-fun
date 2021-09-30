import './polyfills';

import { PlatformRef } from '@angular/core';

// 1. platform level configuration
async function loadPlatform(config?: Record<string, any>): Promise<PlatformRef> {
  const module = await import('./platform');
  return module.platform(config);
}

const modules: Record<string, any> = {
  'approval-flow': async (platform: PlatformRef) => {
    const approvalFlowApp = await import('./app2');
    approvalFlowApp.bootstrap(platform);
  },
  list: async (platform: PlatformRef) => {
    const listApp = await import('./app');
    listApp.bootstrap(platform);
  }
};

// provide - custom element level
export async function loadComponent(name: string, config?: Record<string, any>): Promise<void> {
  modules[name](await loadPlatform(config));
}

loadComponent('approval-flow', {'rtl_language': ['en-US']});
loadComponent('list', {'rtl_language': ['en'], 'content_density': 'condensed'});

// TEST
// 1. How angular will behave if you call platformBrowserDynamic twice with different static providers
// 2. update config in runtime -> ContentDensity

// ONLY 1. platform/application/core - config (application)
// agreed on awff.loadComponent('approval-flow', config);
// agreed we change only application level default configuration, if you need component level config - provide a property

// DON'T
// 2. type of component (like tooltip) - config
// 3. configure particular custom element instance (html properties)
