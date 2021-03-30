import { Component, OnInit } from '@angular/core'

import { FlagConsolidatedService } from 'src/app/services/flag-consolidated/flag-consolidated.service'

@Component({
  selector: 'app-flag-consolidated-container',
  template: `<app-flag-consolidated></app-flag-consolidated>`
})
export class FlagConsolidatedContainerComponent implements OnInit {

  constructor(
    private _flagService: FlagConsolidatedService
  ) { }

  ngOnInit(): void { }

}
