import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({providedIn: 'any'})
export class SimpleService {
  public readonly title$ = new BehaviorSubject('hello');
}
