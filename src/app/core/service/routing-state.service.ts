import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoutingStateService {

  hasLanded = false;

  private readonly _isFadeOut = new BehaviorSubject<boolean>(false);
  readonly isFadeOut$ = this._isFadeOut.asObservable();

  get isFadeOut(): boolean {
    return this._isFadeOut.getValue();
  }

  set isFadeOut(val: boolean) {
    this._isFadeOut.next(val);
  }

  constructor() {
    this.isFadeOut = false;
  }
}
