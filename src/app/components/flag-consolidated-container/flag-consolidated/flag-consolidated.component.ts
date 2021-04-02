import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'

import { BehaviorSubject } from 'rxjs'

import {
  ComponentFlagsModel, ComponentItemListModel, ComponentItemModel,
  INITIAL_COMPONENT_FLAGS, INITIAL_COMPONENT_ITEM_LIST, INITIAL_COMPONENT_ITEM
} from 'src/app/models/flag-consolidated/flag-consolidated.model'

@Component({
  selector: 'app-flag-consolidated',
  templateUrl: './flag-consolidated.component.html',
  styleUrls: ['./flag-consolidated.component.scss']
})
export class FlagConsolidatedComponent implements OnInit {

  private _componentFlags$: BehaviorSubject<ComponentFlagsModel> = new BehaviorSubject<ComponentFlagsModel>(INITIAL_COMPONENT_FLAGS)
  private _itemList$: BehaviorSubject<ComponentItemListModel> = new BehaviorSubject<ComponentItemListModel>(INITIAL_COMPONENT_ITEM_LIST)
  private _item$: BehaviorSubject<ComponentItemModel> = new BehaviorSubject<ComponentItemModel>(INITIAL_COMPONENT_ITEM)

  @Input()
  set componentFlags(value: ComponentFlagsModel) { this._componentFlags$.next(value) }
  get componentFlags(): ComponentFlagsModel { return this._componentFlags$.getValue() }

  @Input()
  set itemList(value: ComponentItemListModel) { this._itemList$.next(value) }
  get itemList(): ComponentItemListModel { return this._itemList$.getValue() }

  @Input()
  set item(value: ComponentItemModel) { this._item$.next(value) }
  get item(): ComponentItemModel { return this._item$.getValue() }

  @Output() loadItem$: EventEmitter<number> = new EventEmitter<number>()
  @Output() triggerSuccessAction$: EventEmitter<void> = new EventEmitter<void>()
  @Output() triggerFailAction$: EventEmitter<void> = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
    this._componentFlags$.subscribe(componentFlags => { console.log({ componentFlags }) })
    this._itemList$.subscribe(itemList => { console.log({ itemList }) })
    this._item$.subscribe(item => { console.log({ item }) })
  }

  loadItem(_: number): void {
    this.loadItem$.emit(_)
  }

  triggerSuccessAction(): void {
    this.triggerSuccessAction$.emit()
  }

  triggerFailAction(): void {
    this.triggerFailAction$.emit()
  }

}
