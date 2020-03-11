import { reducers } from './store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';

import { AppComponent } from './app.component';
import { MifgafsComponent } from './components/mifgafs/mifgafs.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { EveningsComponent } from './components/evenings/evenings.component';
import { StoreModule } from '@ngrx/store';
import { RestaurantListComponent } from './components/launches/restaurant-list/restaurant-list.component';
import { RestaurantComponent } from './components/launches/restaurant/restaurant.component';
import { EvningsHistoryComponent } from './components/evnings-history/evnings-history.component';
import { SchedualNewEveningComponent } from './components/schedual-new-evening/schedual-new-evening.component';
import { CalanderComponent } from './components/calander/calander.component';
import { GafMemberCardComponent } from './components/evenings/gaf-member-card/gaf-member-card.component';
import { EveningComponent } from './components/evenings/evening/evening.component';
import { EveningListComponent } from './components/evenings/evening-list/evening-list.component';
import { EveningDetailsComponent } from './components/evenings/evening-details/evening-details.component';
import { EveningCardComponent } from './components/evenings/evening-card/evening-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent,
    GafMemberCardComponent,
    RestaurantListComponent,
    RestaurantComponent,
    EvningsHistoryComponent,
    SchedualNewEveningComponent,
    CalanderComponent,
    MatCard, 
    MatCardTitle, 
    MatCardHeader, 
    MatCardSubtitle, 
    MatCardContent, 
    MatCardActions, 
    EveningComponent, 
    EveningListComponent, EveningDetailsComponent, EveningCardComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
