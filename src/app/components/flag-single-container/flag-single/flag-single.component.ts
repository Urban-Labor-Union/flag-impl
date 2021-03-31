import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

type _EscapeType = boolean | null | any

@Component({
  selector: 'app-flag-single',
  templateUrl: './flag-single.component.html',
  styleUrls: ['./flag-single.component.scss']
})
export class FlagSingleComponent implements OnInit {

  private _immediateVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _delayVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _buttonDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  @Input()
  set immediateVisible(value: boolean) { this._immediateVisible$.next(value) }
  get immediateVisible(): boolean { return this._immediateVisible$.getValue() }

  @Input()
  set delayVisible(value: boolean) { this._delayVisible$.next(value) }
  get delayVisible(): boolean { return this._delayVisible$.getValue() }

  @Input()
  set buttonDisabled(value: boolean) { this._buttonDisabled$.next(value) }
  get buttonDisabled(): boolean { return this._buttonDisabled$.getValue() }

  @Output() toggleImmediateVisible$: EventEmitter<_EscapeType> = new EventEmitter<_EscapeType>()
  @Output() toggleDelayVisible$: EventEmitter<_EscapeType> = new EventEmitter<_EscapeType>()

  constructor() { }

  ngOnInit(): void {
    this._immediateVisible$.subscribe(_ => { console.log({ _ }) })
    this._delayVisible$.subscribe(_ => { console.log({ _ }) })
    this._buttonDisabled$.subscribe(_ => { console.log({ _ }) })
  }

  immediateToggle(): void {
    this.toggleImmediateVisible$.emit(this.immediateVisible)
  }

  delayedToggle(): void {
    this.toggleDelayVisible$.emit(this.delayVisible)
  }


}
