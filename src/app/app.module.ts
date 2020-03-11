import { reducers } from './store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MifgafsComponent } from './components/mifgafs/mifgafs.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { EveningsComponent } from './components/evenings/evenings.component';
import { StoreModule } from '@ngrx/store';
import { RestaurantListComponent } from './components/launches/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/launches/restaurant/restaurant.component';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent,
    RestaurantListComponent,
    RestaurantComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
