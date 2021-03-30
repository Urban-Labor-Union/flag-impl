import { Component, OnInit } from '@angular/core'

import { FlagSingleService } from 'src/app/services/flag-single/flag-single.service'

@Component({
  selector: 'app-flag-single-container',
  template: `<app-flag-single></app-flag-single>`
})
export class FlagSingleContainerComponent implements OnInit {

  constructor(
    private _flagService: FlagSingleService
  ) { }

  ngOnInit(): void {
  }

}
