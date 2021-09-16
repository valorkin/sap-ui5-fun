import { ChangeDetectorRef, Component, Injector, OnInit } from '@angular/core';
import { text_token } from '../token';
import { BehaviorSubject } from 'rxjs';

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
    private readonly injector: Injector,
    private readonly cd: ChangeDetectorRef
  ) {
    this.title$ = injector.get<BehaviorSubject<string>>(text_token);
  }

  ngOnInit(): void {
    this.title$?.subscribe(v => {
      console.log(v);
      this.title = v;
      this.cd.detectChanges();
    });
  }

}
