import { AddRestaurant } from './components/launches/add-restaurant/add-restaurant.component';

import { RatingModule } from 'ng-starrating';
import { MatFormFieldModule, MatInputModule, MatOptionModule, } from '@angular/material';
import { reducers } from './store/reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { AppComponent } from './app.component';
import { MifgafsComponent } from './components/mifgafs/mifgafs.component';
import { LaunchesComponent } from './components/launches/launches.component';
import { EveningsComponent } from './components/evenings/evenings.component';
import { StoreModule } from '@ngrx/store';
import { ChartComponent } from './components/chart/chart.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RestaurantComponent } from './components/launches/restaurant/restaurant.component';
import { EvningsHistoryComponent } from './components/evnings-history/evnings-history.component';
import { SchedualNewEveningComponent } from './components/schedual-new-evening/schedual-new-evening.component';
import { CalanderComponent } from './components/calander/calander.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RestaurantListComponent } from './components/launches/restaurant-list/restaurant-list.component';
import { SuggestionsContainerComponent } from './components/launches/suggestions-container/suggestions-container.component';
import { TabComponent } from './components/tab/tab.component';
import { LunchSurveyComponent } from './components/launches/lunch-survey/lunch-survey.component';
import { ThisWeekComponent } from './components/mifgafs/this-week/this-week/this-week.component';
import { PersonComponent } from './components/mifgafs/person/person/person.component';
import { LoginComponent } from './components/login/login.component';
import { RoutingModule } from './routes/routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { HomeComponent } from './components/home/home.component';
// Firebase services + enviorment module
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AuthService } from './routes/services/auth.service';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { MatSelectModule } from '@angular/material/select';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AvailabilityMenuComponent } from './components/availability-menu/availability-menu.component';
import { FilterSuggestionsComponent } from './components/launches/filter-suggestions/filter-suggestions.component';
import { FilterSuggestionsPipe } from './pipes/filter-suggestions.pipe';
import { HttpClientModule } from '@angular/common/http';
import { VotersNamesComponent } from './components/voters-names/voters-names.component';
import { RestaurantChartComponent } from './components/launches/restaurant-chart/restaurant-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent,
    ChartComponent,
    RestaurantListComponent,
    RestaurantComponent,
    EvningsHistoryComponent,
    SchedualNewEveningComponent,
    CalanderComponent,
    AddRestaurant,
    LoginComponent,
    HomeComponent,
    SuggestionsContainerComponent,
    TabComponent,
    LunchSurveyComponent,
    ThisWeekComponent,
    PersonComponent,
    AvailabilityMenuComponent,
    FilterSuggestionsComponent,
    FilterSuggestionsPipe,
    VotersNamesComponent,
    RestaurantChartComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,

    FormsModule,
    StoreModule.forRoot(reducers),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
    ,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    FormsModule,
    MatCheckboxModule,
    NgxStarRatingModule,
    FontAwesomeModule,
    MatInputModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
