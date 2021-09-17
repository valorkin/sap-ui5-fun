import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as i0 from "@angular/core";
export class SimpleService {
    constructor() {
        this.title$ = new BehaviorSubject('hello');
    }
}
SimpleService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
SimpleService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleService, providedIn: 'platform' });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.5", ngImport: i0, type: SimpleService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'platform' }]
        }] });
//# sourceMappingURL=simple.service.js.map