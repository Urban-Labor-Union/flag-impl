import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-flag-scattered',
  templateUrl: './flag-scattered.component.html',
  styleUrls: ['./flag-scattered.component.scss']
})
export class FlagScatteredComponent implements OnInit {

  private _immediateVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _delayVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)
  private _buttonDisabled$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  private _alternateVisible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)

  @Input()
  set immediateVisible(value: boolean) { this._immediateVisible$.next(value) }
  get immediateVisible(): boolean { return this._immediateVisible$.getValue() }

  @Input()
  set delayVisible(value: boolean) { this._delayVisible$.next(value) }
  get delayVisible(): boolean { return this._delayVisible$.getValue() }

  @Input()
  set buttonDisabled(value: boolean) { this._buttonDisabled$.next(value) }
  get buttonDisabled(): boolean { return this._buttonDisabled$.getValue() }

  @Input()
  set alternateVisible(value: boolean) { this._alternateVisible$.next(value) }
  get alternateVisible(): boolean { return this._alternateVisible$.getValue() }

  @Output() toggleImmediateVisible$: EventEmitter<void> = new EventEmitter<void>()
  @Output() toggleDelayVisible$: EventEmitter<void> = new EventEmitter<void>()
  @Output() toggleAlternateVisible$: EventEmitter<void> = new EventEmitter<void>()

  counter: number = 0

  constructor() { }

  ngOnInit(): void {
    this._immediateVisible$.subscribe(immediateVisible => { console.log({ immediateVisible }) })
    this._delayVisible$.subscribe(delayVisible => { console.log({ delayVisible }) })
    this._buttonDisabled$.subscribe(buttonDisabled => { console.log({ buttonDisabled }) })
    this._alternateVisible$.subscribe(alternateVisible => {
      if (alternateVisible) this.counter += 1
      console.log({ alternateVisible })
    })
    this.alternateToggle()
  }

  immediateToggle(): void {
    this.toggleImmediateVisible$.emit()
  }

  delayedToggle(): void {
    this.toggleDelayVisible$.emit()
  }

  alternateToggle(): void {
    this.toggleAlternateVisible$.emit()
  }

}
