import { reducers } from './store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MifgafsComponent } from './components/mifgafs/mifgafs.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { EveningsComponent } from './components/evenings/evenings.component';
import { StoreModule } from '@ngrx/store';
import { ChartComponent } from './components/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RestaurantListComponent } from './components/launches/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/launches/restaurant/restaurant.component';
import { EvningsHistoryComponent } from './components/evnings-history/evnings-history.component';
import { SchedualNewEveningComponent } from './components/schedual-new-evening/schedual-new-evening.component';
import { CalanderComponent } from './components/calander/calander.component';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent,
    ChartComponent
    EveningsComponent,
    RestaurantListComponent,
    RestaurantComponent,
    EvningsHistoryComponent,
    SchedualNewEveningComponent,
    CalanderComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    NgxChartsModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
