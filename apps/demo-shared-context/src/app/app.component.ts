import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SimpleService } from 'simple-ng-lib';
import { RtlService } from '../services';

@Component({
  selector: 'app-comp',
  template: `
    <span>app component 1 {{title}}</span>
    <input type='text' [(ngModel)]='title' (ngModelChange)='updateTitle(title)'>
  `
})
export class AppComponent implements OnInit {
  title$?: BehaviorSubject<string>;
  title?: string;

  constructor(private readonly simpleSrv: SimpleService, rtl: RtlService) {
    console.log('app one', rtl.rtl.getValue());
    this.title$ = simpleSrv.title$;
  }

  updateTitle(value?: string) {
    this.title$?.next(value || '');
  }

  ngOnInit(): void {
    this.title$?.subscribe(v => {
      console.log(v);
      this.title = v;
    });
  }
}


