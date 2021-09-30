import { enableProdMode, PlatformRef, StaticProvider } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { ContentDensityService, DEFAULT_CONTENT_DENSITY, RTL_LANGUAGE, RtlService } from '../services';

enableProdMode();

const keysMap = new Map<string, any>([
  ['rtl_language', RTL_LANGUAGE],
  ['content_density', DEFAULT_CONTENT_DENSITY]
]);

function provide(config?: Record<any, any>): StaticProvider[] | undefined {
  if (!config) {
    return;
  }
  let providers: StaticProvider[] = [];

  if (config['rtl_language']) {
    providers.push({ provide: RtlService, useClass: RtlService });
  }

  if (config['content_density']) {
    providers.push({ provide: ContentDensityService, useClass: ContentDensityService });
  }

  providers = [...providers, ...Object.keys(config).map(key => {
    const provide = keysMap.get(key);
    return { provide: provide, useValue: config[key] };
  })];

  return providers;
}

export function platform(config?: Record<any, any>): PlatformRef {
  const providers = provide(config);
  const platfrom = platformBrowserDynamic(providers);
  if (config && config['rtl_language']) {
    platfrom.injector.get(RtlService).rtl.next(config['rtl_language']);
  }

  // post processing
  return platfrom;
}
