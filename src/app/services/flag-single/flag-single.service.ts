import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class FlagSingleService {

  private _visible$ = new BehaviorSubject<boolean>(true)
  private _visible: boolean = true

  constructor() { }

  toggleVisible(): void {
    this.setVisible(!this._visible)
  }

  setVisible(_: boolean): void {
    this._visible = _
    this._visible$.next(this._visible)
  }

  watchVisible$(): Observable<boolean> {
    return this._visible$.asObservable()
  }
}
