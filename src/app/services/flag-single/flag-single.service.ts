import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable, timer } from 'rxjs'
import { take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FlagSingleService {

  private _immediateVisible$ = new BehaviorSubject<boolean>(true)
  private _immediateVisible: boolean = false

  private _delayVisible$ = new BehaviorSubject<boolean>(true)
  private _delayVisible: boolean = false

  private _buttonDisabled$ = new BehaviorSubject<boolean>(false)
  private _buttonDisabled: boolean = false

  constructor() { }

  setImmediateVisible(_: boolean): void {
    this._immediateVisible = _
    this._immediateVisible$.next(this._immediateVisible)
  }

  watchImmediateVisible$(): Observable<boolean> {
    return this._immediateVisible$.asObservable()
  }

  setDelayVisible(_: boolean): void {
    this._delayVisible = _
    this._delayVisible$.next(this._delayVisible)
  }

  watchDelayVisible$(): Observable<boolean> {
    return this._delayVisible$.asObservable()
  }

  toggleDelayVisible(_: boolean): void {
    this.setButtonFlag(true)

    timer(2000).pipe(take(1)).subscribe(
      __ => {
        this.setDelayVisible(!_)
        this.setButtonFlag(false)
      }
    )
  }

  setButtonFlag(_: boolean): void {
    this._buttonDisabled = _
    this._buttonDisabled$.next(this._buttonDisabled)
  }

  watchButtonFlag$(): Observable<boolean> {
    return this._buttonDisabled$.asObservable()
  }

}
