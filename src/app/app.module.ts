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
import { EvningsHistoryComponent } from './components/evnings-history/evnings-history.component';
import { SchedualNewEveningComponent } from './components/schedual-new-evening/schedual-new-evening.component';
import { CalanderComponent } from './components/calander/calander.component';
import { SuggestionsContainerComponent } from './components/launches/suggestions-container/suggestions-container.component';
import { TabComponent } from './components/tab/tab.component';
import { LunchSurveyComponent } from './components/launches/lunch-survey/lunch-survey.component';
import { ThisWeekComponent } from './components/mifgafs/this-week/this-week/this-week.component';
import { PersonComponent } from './components/mifgafs/person/person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent,
    RestaurantListComponent,
    RestaurantComponent,
    EvningsHistoryComponent,
    SchedualNewEveningComponent,
    CalanderComponent,
    SuggestionsContainerComponent,
    TabComponent,
    LunchSurveyComponent,
    ThisWeekComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
