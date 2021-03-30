import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { FlagShellComponent } from './components/flag-shell/flag-shell.component'
import { FlagSingleContainerComponent } from './components/flag-single-container/flag-single-container.component'
import { FlagScatteredContainerComponent } from './components/flag-scattered-container/flag-scattered-container.component'
import { FlagConsolidatedContainerComponent } from './components/flag-consolidated-container/flag-consolidated-container.component'

const routes: Routes = [
  {
    path: '',
    component: FlagShellComponent,
    children: [
      {
        path: 'single',
        component: FlagSingleContainerComponent
      },
      {
        path: 'scattered',
        component: FlagScatteredContainerComponent
      },
      {
        path: 'consolidated',
        component: FlagConsolidatedContainerComponent
      },
      {
        path: '',
        redirectTo: '/single',
        pathMatch: 'full'
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
