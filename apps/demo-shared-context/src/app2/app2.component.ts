import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleService } from 'simple-ng-lib';
import { RtlService } from '../services';

@Component({
  selector: 'app2-comp',
  template: `
    <span>app component 2 {{title}}</span>
  `
})
export class App2Component implements OnInit {
  title$?: BehaviorSubject<string>;
  title?: string;

  constructor(
    private readonly simpleSrv: SimpleService,
    private readonly cd: ChangeDetectorRef,
    rtl: RtlService
  ) {
    console.log('app two', rtl.rtl.getValue());
    this.title$ = simpleSrv.title$;
  }

  ngOnInit(): void {
    this.title$?.subscribe(v => {
      console.log(v);
      this.title = v;
      this.cd.detectChanges();
    });
  }

}
