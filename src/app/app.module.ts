import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppMaterialModule } from './modules/app-material/app-material.module'

import { AppComponent } from './app.component'

import { FlagShellComponent } from './components/flag-shell/flag-shell.component'

import { FlagSingleContainerComponent } from './components/flag-single-container/flag-single-container.component'
import { FlagSingleComponent } from './components/flag-single-container/flag-single/flag-single.component'

import { FlagScatteredContainerComponent } from './components/flag-scattered-container/flag-scattered-container.component'
import { FlagScatteredComponent } from './components/flag-scattered-container/flag-scattered/flag-scattered.component'

import { FlagConsolidatedContainerComponent } from './components/flag-consolidated-container/flag-consolidated-container.component'
import { FlagConsolidatedComponent } from './components/flag-consolidated-container/flag-consolidated/flag-consolidated.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,

    FlagShellComponent,

    FlagSingleContainerComponent,
    FlagSingleComponent,

    FlagScatteredContainerComponent,
    FlagScatteredComponent,

    FlagConsolidatedContainerComponent,
    FlagConsolidatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
