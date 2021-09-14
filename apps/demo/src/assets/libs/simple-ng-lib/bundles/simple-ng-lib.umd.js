(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('ngx-bootstrap/alert')) :
  typeof define === 'function' && define.amd ? define('simple-ng-lib', ['exports', '@angular/core', 'ngx-bootstrap/alert'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['simple-ng-lib'] = {}, global.ng.core, global.i1));
}(this, (function (exports, i0, i1) { 'use strict';

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
  var i1__namespace = /*#__PURE__*/_interopNamespace(i1);

  var SimpleComponent = /** @class */ (function () {
      function SimpleComponent() {
      }
      return SimpleComponent;
  }());
  SimpleComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleComponent, deps: [], target: i0__namespace.ɵɵFactoryTarget.Component });
  SimpleComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.5", type: SimpleComponent, selector: "simple-component", ngImport: i0__namespace, template: "\n    <alert type='success'>\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </alert>\n  ", isInline: true, components: [{ type: i1__namespace.AlertComponent, selector: "alert,bs-alert", inputs: ["type", "dismissible", "isOpen", "dismissOnTimeout"], outputs: ["onClose", "onClosed"] }] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleComponent, decorators: [{
              type: i0.Component,
              args: [{
                      selector: 'simple-component',
                      template: "\n    <alert type='success'>\n      <strong>Well done!</strong> You successfully read this important alert message.\n    </alert>\n  "
                  }]
          }] });
  var SimpleModule = /** @class */ (function () {
      function SimpleModule() {
      }
      return SimpleModule;
  }());
  SimpleModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
  SimpleModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, declarations: [SimpleComponent], imports: [i1.AlertModule], exports: [SimpleComponent] });
  SimpleModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, imports: [[i1.AlertModule]] });
  i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0__namespace, type: SimpleModule, decorators: [{
              type: i0.NgModule,
              args: [{
                      declarations: [SimpleComponent],
                      exports: [SimpleComponent],
                      imports: [i1.AlertModule]
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
