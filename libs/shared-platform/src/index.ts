import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

enableProdMode();

export function getSharedPlatform(isProd = true): PlatformRef {
  return platformBrowserDynamic();
}



