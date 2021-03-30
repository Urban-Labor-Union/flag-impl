import { NgModule } from '@angular/core'

import { MatCardModule } from '@angular/material/card'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

const MODULES = [
  MatCardModule,
  MatButtonModule,
  MatToolbarModule
]

@NgModule({
  imports: [...MODULES],
  exports: [...MODULES]
})
export class AppMaterialModule { }
