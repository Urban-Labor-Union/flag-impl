import { Component, OnInit } from '@angular/core'

import { Observable } from 'rxjs'

import { FlagConsolidatedService } from 'src/app/services/flag-consolidated/flag-consolidated.service'
import { ComponentFlagsModel, ComponentItemListModel, ComponentItemModel } from 'src/app/models/flag-consolidated/flag-consolidated.model'

@Component({
  selector: 'app-flag-consolidated-container',
  template: `<app-flag-consolidated [componentFlags]        = "componentFlags$ | async"
                                    [itemList]              = "itemList$       | async"
                                    [item]                  = "item$           | async"
                                    (loadItem$)             = "loadItem($event)"
                                    (triggerSuccessAction$) = "triggerSuccessAction()"
                                    (triggerFailAction$)    = "triggerFailAction()"></app-flag-consolidated>`
})
export class FlagConsolidatedContainerComponent implements OnInit {

  componentFlags$: Observable<ComponentFlagsModel>
  itemList$: Observable<ComponentItemListModel>
  item$: Observable<ComponentItemModel>

  constructor(
    private _flagService: FlagConsolidatedService
  ) { }

  ngOnInit(): void {
    this._flagService.loadItemList()
    this.componentFlags$ = this._flagService.watchComponentFlags$()
    this.itemList$ = this._flagService.watchItemList$()
    this.item$ = this._flagService.watchItem$()
  }

  loadItem($: number): void {
    this._flagService.loadItem($)
  }

  triggerSuccessAction(): void {
    this._flagService.triggerSuccessAction()
  }

  triggerFailAction(): void {
    this._flagService.triggerFailAction()
  }
}
