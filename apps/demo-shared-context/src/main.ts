import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';

import { AppModule } from './app/app.module';
import { App2Module } from './app2/app2.module';
import { text_token } from './token';
import { BehaviorSubject } from 'rxjs';

if (environment.production) {
  enableProdMode();
}

const platform = platformBrowserDynamic([{
  provide: text_token,
  useValue: new BehaviorSubject('hello')
}]);
platform.bootstrapModule(AppModule).catch((err) => console.error(err));
platform.bootstrapModule(App2Module).catch((err) => console.error(err));

