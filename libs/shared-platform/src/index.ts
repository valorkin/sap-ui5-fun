import { enableProdMode, PlatformRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

declare global {
  interface Window {
    _shared_platform: PlatformRef;
  }
}
enableProdMode();

export function getSharedPlatform(isProd = true): PlatformRef {
  if (window._shared_platform) {
    return window._shared_platform;
  }
  window._shared_platform = platformBrowserDynamic();
  return window._shared_platform;
}



