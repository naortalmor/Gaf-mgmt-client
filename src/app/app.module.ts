import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MifgafsComponent } from './components/mifgafs/mifgafs.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { EveningsComponent } from './components/evenings/evenings.component';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
