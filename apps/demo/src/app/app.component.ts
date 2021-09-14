import {
  Component,
  Compiler,
  NgModuleFactory,
  Injector,
  Type,
  ChangeDetectorRef,
  AfterViewInit
} from '@angular/core';

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
    // const module = await import('simple-ng-lib');
    const module = await import('../assets/libs/simple-ng-lib/fesm2015/simple-ng-lib');
    const keys = Object.keys(module) as string[];
    const _module = keys.reduce((prev: Record<string, string>, current: string) => {
      const exp = (module as any)[current]
      if (exp.ɵcmp) {
        prev.cmp = exp;
      }
      if (exp.ɵmod) {
        prev.module = exp;
      }
      return prev;
    }, ({} as {module: any, cmp: any}));
    if (!_module.module || !_module.cmp) {
      return;
    }

    this._ngModule = await this.compiler.compileModuleAsync(_module.module as any);
    this._ngComponent = _module.cmp as any;
    this._ngComponentInjector = this.injector;

    this._cd.detectChanges();
  }
}
