import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import * as i1 from 'ngx-bootstrap/alert';
import { AlertModule } from 'ngx-bootstrap/alert';

class SimpleComponent {
}
SimpleComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleComponent, deps: [], target: i0.ɵɵFactoryTarget.Component });
SimpleComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.5", type: SimpleComponent, selector: "simple-component", ngImport: i0, template: `
    <alert type='success'>
      <strong>Well done!</strong> You successfully read this important alert message.
    </alert>
  `, isInline: true, components: [{ type: i1.AlertComponent, selector: "alert,bs-alert", inputs: ["type", "dismissible", "isOpen", "dismissOnTimeout"], outputs: ["onClose", "onClosed"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleComponent, decorators: [{
            type: Component,
            args: [{
                    selector: 'simple-component',
                    template: `
    <alert type='success'>
      <strong>Well done!</strong> You successfully read this important alert message.
    </alert>
  `
                }]
        }] });
class SimpleModule {
}
SimpleModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
SimpleModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleModule, declarations: [SimpleComponent], imports: [AlertModule], exports: [SimpleComponent] });
SimpleModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleModule, imports: [[AlertModule]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [SimpleComponent],
                    exports: [SimpleComponent],
                    imports: [AlertModule]
                }]
        }] });

/**
 * Generated bundle index. Do not edit.
 */

export { SimpleComponent, SimpleModule };
//# sourceMappingURL=simple-ng-lib.js.map
