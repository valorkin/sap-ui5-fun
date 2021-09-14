import { Component, NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'simple-component',
  template: `
    <alert type='success'>
      <strong>Well done!</strong> You successfully read this important alert message.
    </alert>
  `
})
export class SimpleComponent {
}

@NgModule({
  declarations: [SimpleComponent],
  exports: [SimpleComponent],
  imports: [AlertModule]
})
export class SimpleModule {
}
