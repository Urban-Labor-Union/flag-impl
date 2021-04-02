import { Injectable } from '@angular/core'

import { BehaviorSubject, interval, Observable, timer } from 'rxjs'
import { map, take } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class FlagScatteredService {

  private _immediateVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _immediateVisible: boolean = true

  private _delayVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _delayVisible: boolean = true

  private _buttonDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _buttonDisabled: boolean = false

  private _alternateVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _alternateVisible: boolean = true

  constructor() { }

  toggleImmediateVisible(): void {
    this.setImmediateVisible(!this._immediateVisible)
  }

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

  toggleDelayVisible(): void {
    this.setButtonFlag(true)

    timer(1000).pipe(take(1)).subscribe(
      __ => {
        this.setDelayVisible(!this._delayVisible)
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

  toggleAlternateVisible(): void {
    interval(2000)
      .pipe(
        take(9),
        map(_ => !(_ % 2))
      )
      .subscribe(_ => {
        this.setAlternateVisible(_)
      })
  }

  setAlternateVisible(_: boolean): void {
    this._alternateVisible = _
    this._alternateVisible$.next(this._alternateVisible)
  }

  watchAlternateVisible$(): Observable<boolean> {
    return this._alternateVisible$.asObservable()
  }
}
