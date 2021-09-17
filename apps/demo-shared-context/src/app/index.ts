import { PlatformRef } from '@angular/core';
import { AppModule } from './app.module';

export function bootstrap(platform: PlatformRef) {
  platform.bootstrapModule(AppModule).catch((err) => console.error(err));
}
