import { PlatformRef } from '@angular/core';
import { App2Module } from './app2.module';

export function bootstrap(platform: PlatformRef) {
  platform.bootstrapModule(App2Module).catch((err) => console.error(err));
}
