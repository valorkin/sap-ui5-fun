(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/alert'), require('@angular/elements')) :
  typeof define === 'function' && define.amd ? define('simple-ng-lib', ['exports', '@angular/core', 'ngx-bootstrap/alert', '@angular/elements'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['simple-ng-lib'] = {}, global.ng.core, global.alert, global.ng.elements));
}(this, (function (exports, i0, alert, elements) { 'use strict';

  function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
      Object.keys(e).forEach(function (k) {
        if (k !== 'default') {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () {
              return e[k];
            }
          });
        }
      });
    }
    n['default'] = e;
    return Object.freeze(n);
  }

  var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

  var SimpleComponent = /** @class */ (function () {
      function SimpleComponent(injector) {
          var AlertElement = elements.createCustomElement(alert.AlertComponent, { injector: injector });
          customElements.define('alert-element', AlertElement);
      }
      return SimpleComponent;
  }());
  SimpleComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleComponent, deps: [{ token: i0__namespace.Injector }], target: i0__namespace.ɵɵFactoryTarget.Component });
  SimpleComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.5", type: SimpleComponent, selector: "simple-component", ngImport: i0__namespace, template: "\n    <span>hello</span>\n<!--\n    <alert type='success'>\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </alert>\n-->\n  ", isInline: true });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'simple-component',
                      template: "\n    <span>hello</span>\n<!--\n    <alert type='success'>\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </alert>\n-->\n  "
                  }]
          }], ctorParameters: function () { return [{ type: i0__namespace.Injector }]; } });
  var SimpleModule = /** @class */ (function () {
      function SimpleModule() {
      }
      return SimpleModule;
  }());
  SimpleModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  SimpleModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, declarations: [SimpleComponent], imports: [alert.AlertModule], exports: [SimpleComponent] });
  SimpleModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, imports: [[alert.AlertModule]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [SimpleComponent],
                      exports: [SimpleComponent],
                      imports: [alert.AlertModule]
                  }]
          }] });

  /**
   * Generated bundle index. Do not edit.
   */

  exports.SimpleComponent = SimpleComponent;
  exports.SimpleModule = SimpleModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=simple-ng-lib.umd.js.map
