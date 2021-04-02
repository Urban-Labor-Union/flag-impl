interface ComponentItemBaseModel {
  title: string | null
  id: number
}

export interface ComponentItemListModel {
  items: ComponentItemBaseModel[]
}

export const INITIAL_COMPONENT_ITEM_LIST: ComponentItemListModel = {
  items: []
}

export interface ComponentItemModel extends ComponentItemBaseModel {
  description: string | null
}

export const INITIAL_COMPONENT_ITEM: ComponentItemModel = {
  title: null, id: 0, description: null
}

interface ComponentFlagsBaseModel {
  progress: boolean
  success: boolean
  fail: boolean
  available: boolean
}

const INITIAL_COMPONENT_FLAGS_BASE: ComponentFlagsBaseModel = {
  progress: false, success: false, fail: false, available: false
}

export interface ComponentFlagsModel {
  item: ComponentFlagsBaseModel
  action: ComponentFlagsBaseModel
}

export const INITIAL_COMPONENT_FLAGS: ComponentFlagsModel = {
  item: { ...INITIAL_COMPONENT_FLAGS_BASE }, action: { ...INITIAL_COMPONENT_FLAGS_BASE }
}
