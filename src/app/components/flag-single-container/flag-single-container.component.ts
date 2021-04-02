import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { FlagSingleService } from 'src/app/services/flag-single/flag-single.service'

@Component({
  selector: 'app-flag-single-container',
  template: `<app-flag-single [visible]         = "visible$ | async"
                              (toggleVisible$)  = "toggleVisible()"></app-flag-single>`
})
export class FlagSingleContainerComponent implements OnInit {

  visible$: Observable<boolean>

  constructor(
    private _flagService: FlagSingleService
  ) { }

  ngOnInit(): void {
    this.visible$ = this._flagService.watchVisible$()
  }

  toggleVisible(): void {
    this._flagService.toggleVisible()
  }
}
