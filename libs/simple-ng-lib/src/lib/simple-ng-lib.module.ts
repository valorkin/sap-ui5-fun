import { Component, Injector, NgModule } from '@angular/core';
import { AlertComponent, AlertModule } from 'ngx-bootstrap/alert';
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'simple-component',
  template: `
    <span>hello</span>
<!--
    <alert type='success'>
      <strong>Well done!</strong> You successfully read this important alert message.
    </alert>
-->
  `
})
export class SimpleComponent {
  constructor(injector: Injector) {
    const AlertElement = createCustomElement(AlertComponent, {injector});
    customElements.define('alert-element', AlertElement);
  }
}

@NgModule({
  declarations: [SimpleComponent],
  exports: [SimpleComponent],
  imports: [AlertModule]
})
export class SimpleModule {
}
