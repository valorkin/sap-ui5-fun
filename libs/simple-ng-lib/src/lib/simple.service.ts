import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'platform'})
export class SimpleService {
  public readonly title$ = new BehaviorSubject('hello');
}
