import { Component, OnInit } from '@angular/core'

import { FlagScatteredService } from 'src/app/services/flag-scattered/flag-scattered.service'

@Component({
  selector: 'app-flag-scattered-container',
  template: `<app-flag-scattered></app-flag-scattered>`
})
export class FlagScatteredContainerComponent implements OnInit {

  constructor(
    private _flagService: FlagScatteredService
  ) { }

  ngOnInit(): void { }

}
