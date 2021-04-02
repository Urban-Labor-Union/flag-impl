import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { FlagScatteredService } from 'src/app/services/flag-scattered/flag-scattered.service'

@Component({
  selector: 'app-flag-scattered-container',
  template: `<app-flag-scattered [immediateVisible]         = "immediateVisible$ | async"
                                 [delayVisible]             = "delayVisible$     | async"
                                 [buttonDisabled]           = "buttonDisabled$   | async"
                                 [alternateVisible]         = "alternateVisible$ | async"
                                 (toggleImmediateVisible$)  = "toggleImmediateVisible()"
                                 (toggleDelayVisible$)      = "toggleDelayVisible()"
                                 (toggleAlternateVisible$)  = "toggleAlternateVisible()"></app-flag-scattered>`
})
export class FlagScatteredContainerComponent implements OnInit {

  immediateVisible$: Observable<boolean>
  delayVisible$: Observable<boolean>
  buttonDisabled$: Observable<boolean>
  alternateVisible$: Observable<boolean>

  constructor(
    private _flagService: FlagScatteredService
  ) { }

  ngOnInit(): void {
    this.immediateVisible$ = this._flagService.watchImmediateVisible$()
    this.delayVisible$ = this._flagService.watchDelayVisible$()
    this.buttonDisabled$ = this._flagService.watchButtonFlag$()
    this.alternateVisible$ = this._flagService.watchAlternateVisible$()
  }

  toggleImmediateVisible(): void {
    this._flagService.toggleImmediateVisible()
  }

  toggleDelayVisible(): void {
    this._flagService.toggleDelayVisible()
  }

  toggleAlternateVisible(): void {
    this._flagService.toggleAlternateVisible()
  }

}
