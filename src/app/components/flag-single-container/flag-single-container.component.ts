import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { FlagSingleService } from 'src/app/services/flag-single/flag-single.service'

@Component({
  selector: 'app-flag-single-container',
  template: `<app-flag-single [immediateVisible]         = "immediateVisible$ | async"
                              [delayVisible]             = "delayVisible$     | async"
                              [buttonDisabled]           = "buttonDisabled$   | async"
                              (toggleImmediateVisible$)  = "toggleImmediateVisible($event)"
                              (toggleDelayVisible$)      = "toggleDelayVisible($event)"></app-flag-single>`
})
export class FlagSingleContainerComponent implements OnInit {

  immediateVisible$: Observable<boolean>
  delayVisible$: Observable<boolean>
  buttonDisabled$: Observable<boolean>

  constructor(
    private _flagService: FlagSingleService
  ) { }

  ngOnInit(): void {
    this.immediateVisible$ = this._flagService.watchImmediateVisible$()
    this.delayVisible$ = this._flagService.watchDelayVisible$()
    this.buttonDisabled$ = this._flagService.watchButtonFlag$()
  }

  toggleImmediateVisible($: boolean): void {
    this._flagService.setImmediateVisible(!$)
  }

  toggleDelayVisible($: boolean): void {
    this._flagService.toggleDelayVisible($)
  }
}
