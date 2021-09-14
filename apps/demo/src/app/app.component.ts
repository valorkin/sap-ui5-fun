import {
  Component,
  Compiler,
  NgModuleFactory,
  Injector,
  Type,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';
import { mod } from 'ngx-bootstrap/chronos/utils';

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
    const module = await import('./simple');
    this._ngModule = await this.compiler.compileModuleAsync(module.SimpleModule);
    this._ngComponent = module.SimpleComponent;
    this._ngComponentInjector = this.injector;

    this._cd.detectChanges();
  }
}
