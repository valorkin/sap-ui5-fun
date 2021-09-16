import { Component, Injector, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { text_token } from '../token';
import { BehaviorSubject } from 'rxjs';

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

  constructor(private readonly injector: Injector) {
    this.title$ = injector.get<BehaviorSubject<string>>(text_token);
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
