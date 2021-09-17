import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleService } from 'simple-ng-lib';

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
    private readonly cd: ChangeDetectorRef
  ) {
    this.title$ = simpleSrv.title$;
    (window as any)._s2 = simpleSrv;
  }

  ngOnInit(): void {
    this.title$?.subscribe(v => {
      console.log(v);
      this.title = v;
      this.cd.detectChanges();
    });
  }

}
