import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

@Component({
  selector: 'app-flag-single',
  templateUrl: './flag-single.component.html',
  styleUrls: ['./flag-single.component.scss']
})
export class FlagSingleComponent implements OnInit {

  private _visible$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true)

  @Input()
  set visible(value: boolean) { this._visible$.next(value) }
  get visible(): boolean { return this._visible$.getValue() }

  @Output() toggleVisible$: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    this._visible$.subscribe(_ => { console.log({ _ }) })
  }

  immediateToggle(): void {
    this.toggleVisible$.emit()
  }
}
