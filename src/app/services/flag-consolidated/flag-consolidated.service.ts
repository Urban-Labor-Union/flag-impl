import { Injectable } from '@angular/core'

import { BehaviorSubject, Observable, timer } from 'rxjs'

import {
  ComponentFlagsModel, ComponentItemListModel, ComponentItemModel,
  INITIAL_COMPONENT_FLAGS, INITIAL_COMPONENT_ITEM_LIST, INITIAL_COMPONENT_ITEM
} from 'src/app/models/flag-consolidated/flag-consolidated.model'

@Injectable({
  providedIn: 'root'
})
export class FlagConsolidatedService {

  private _componentFlags$: BehaviorSubject<ComponentFlagsModel> = new BehaviorSubject<ComponentFlagsModel>(INITIAL_COMPONENT_FLAGS)
  private _componentFlags: ComponentFlagsModel = { ...INITIAL_COMPONENT_FLAGS }

  private _itemList$: BehaviorSubject<ComponentItemListModel> = new BehaviorSubject<ComponentItemListModel>(INITIAL_COMPONENT_ITEM_LIST)
  private _itemList: ComponentItemListModel

  private _item$: BehaviorSubject<ComponentItemModel> = new BehaviorSubject<ComponentItemModel>(INITIAL_COMPONENT_ITEM)
  private _item: ComponentItemModel

  private _items: ComponentItemModel[] = [
    {
      id: 1,
      title: 'Monday',
      description: 'Joey says Monday is the first day of the week. Accoring to him, One Day: Monday!'
    },
    {
      id: 2,
      title: 'Tuesday',
      description: 'Tuesday comes after Monday, hence Two Day: Tuesday!'
    },
    {
      id: 0,
      title: 'Wednesday',
      description: 'Joey does not believe that Wednesday falls right in line of normal weekday, he therefore implies it as  Wednesday? When? Huh? What day?'
    },
    {
      id: 3,
      title: 'Thursday',
      description: 'Since Joey has already lost context at Wednesday, resuming count would give Thursday as the next day. Hence, Thursday: The Third Day!'
    }
  ]

  constructor() { }

  setComponentFlags(_: ComponentFlagsModel): void {
    this._componentFlags = { ..._ }
    this._componentFlags$.next(this._componentFlags)
  }

  resetComponentFlags(): void {
    this._componentFlags = { ...INITIAL_COMPONENT_FLAGS }
    this._componentFlags$.next(this._componentFlags)
  }

  watchComponentFlags$(): Observable<ComponentFlagsModel> {
    return this._componentFlags$.asObservable()
  }

  loadItemList(): void {
    this.setItemList({
      items: this._items.map(_ => ({ id: _.id, title: _.title }))
    })
  }

  setItemList(_: ComponentItemListModel): void {
    this._itemList = { ..._ }
    this._itemList$.next(this._itemList)
  }

  watchItemList$(): Observable<ComponentItemListModel> {
    return this._itemList$.asObservable()
  }

  loadItem(_: number): void {
    this.setComponentFlags({
      ...this._componentFlags,
      item: { ...this._componentFlags.item, progress: true, available: true },
      action: { ...INITIAL_COMPONENT_FLAGS.action } // why this?
    })
    timer(2500).subscribe(__ => {
      this.setComponentFlags({
        ...this._componentFlags,
        item: { ...this._componentFlags.item, progress: false, success: true }
      })
      this.setItem(this._items.find($ => $.id === _))
    })
  }

  setItem(_: ComponentItemModel): void {
    this._item = { ..._ }
    this._item$.next(this._item)
  }

  watchItem$(): Observable<ComponentItemModel> {
    return this._item$.asObservable()
  }

  triggerSuccessAction(): void {
    this.setComponentFlags({
      ...this._componentFlags,
      action: { ...this._componentFlags.action, progress: true }
    })
    timer(1000).subscribe(__ => {
      this.setComponentFlags({
        ...this._componentFlags,
        action: { ...this._componentFlags.action, progress: false, success: true, fail: false } // why explicitly fail?
      })
    })
  }

  triggerFailAction(): void {
    this.setComponentFlags({
      ...this._componentFlags,
      action: { ...this._componentFlags.action, progress: true }
    })
    timer(1000).subscribe(__ => {
      this.setComponentFlags({
        ...this._componentFlags,
        action: { ...this._componentFlags.action, progress: false, fail: true, success: false } // why explicitly success?
      })
    })
  }
}
