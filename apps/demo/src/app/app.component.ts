import {
  Component,
  Compiler,
  NgModuleFactory,
  Injector,
  Type,
  ChangeDetectorRef,
  NgModule,
  AfterViewInit
} from '@angular/core';
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

@Component({
  selector: 'sap-ui5-fun-root',
  template: `
    <ng-container
      *ngComponentOutlet='_ngComponent; ngModuleFactory: _ngModule; injector: _ngComponentInjector'></ng-container>
  `
})
export class AppComponent implements AfterViewInit {

  _ngComponentInjector!: Injector;
  _ngComponent!: Type<any>;
  _ngModule!: NgModuleFactory<any>;

  constructor(
    private readonly compiler: Compiler,
    private readonly _cd: ChangeDetectorRef,
    private readonly injector: Injector
  ) {
  }

  async ngAfterViewInit(): Promise<void> {
    await this.renderComponent();
  }

  private async renderComponent(): Promise<void> {
    this._ngModule = await this.compiler.compileModuleAsync(SimpleModule);
    this._ngComponent = SimpleComponent;
    this._ngComponentInjector = this.injector;

    this._cd.detectChanges();
  }
}
