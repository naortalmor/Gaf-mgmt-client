import { AddRestaurant } from './components/launches/add-restaurant/add-restaurant.component';
import { MatCardModule } from '@angular/material/card';
import { RatingModule } from 'ng-starrating';
import { MatFormFieldModule, MatInputModule, MatOptionModule } from '@angular/material';
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
import { EvningsHistoryComponent } from './components/evenings/evnings-history/evnings-history.component';
import { SchedualNewEveningComponent } from './components/evenings/schedual-new-evening/schedual-new-evening.component';
import { CalanderComponent } from './components/evenings/calander/calander.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { RestaurantListComponent } from './components/launches/restaurant-list/restaurant-list.component';
import { SuggestionsContainerComponent } from './components/launches/suggestions-container/suggestions-container.component';
import { TabComponent } from './components/tab/tab.component';
import { LunchSurveyComponent } from './components/launches/lunch-survey/lunch-survey.component';
import { ThisWeekComponent } from './components/mifgafs/this-week/this-week.component';
import { PersonComponent } from './components/mifgafs/person/person.component';
import { LoginComponent } from './components/auth/login/login.component';
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
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EveningListComponent } from './components/evenings/evening-list/evening-list.component';
import { EveningDetailsComponent } from './components/evenings/evening-details/evening-details.component';
import { AvailabilityMenuComponent } from './components/availability-menu/availability-menu.component';
import { FilterSuggestionsComponent } from './components/launches/filter-suggestions/filter-suggestions.component';
import { FilterSuggestionsPipe } from './pipes/filter-suggestions.pipe';
import { HttpClientModule } from '@angular/common/http';
import { VotersNamesComponent } from './components/voters-names/voters-names.component';
import { RestaurantChartComponent } from './components/launches/restaurant-chart/restaurant-chart.component';
import { SurveyComponent } from './components/survey/survey.component';
import { EveningCardComponent } from './components/evenings/evening-card/evening-card.component';
import { GuestPageComponent } from './components/auth/guest-page/guest-page.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

import { faGoogle, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { AdminPageComponent } from './components/auth/admin-page/admin-page.component';
import { MifgafInfoComponent } from './components/mifgafs/mifgaf-info/mifgaf-info.component';
import { diningRoomComponent } from './components/launches/dining-room/dining-room.component';
import { RestaurantLaunchComponent } from './components/launches/restaurant-launch/restaurant-launch.component';
import { MatTabsModule } from '@angular/material/tabs';
import { OthersSuggestionsComponent } from './components/launches/others-suggestions/others-suggestions.component';

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
    EveningListComponent,
    EveningDetailsComponent,
    EveningCardComponent,
    AddRestaurant,
    LoginComponent,
    HomeComponent,
    SuggestionsContainerComponent,
    TabComponent,
    LunchSurveyComponent,
    ThisWeekComponent,
    PersonComponent,
    GuestPageComponent,
    AvailabilityMenuComponent,
    FilterSuggestionsComponent,
    FilterSuggestionsPipe,
    VotersNamesComponent,
    RestaurantChartComponent,
    SurveyComponent,
    AdminPageComponent,
    MifgafInfoComponent,
    diningRoomComponent,
    RestaurantLaunchComponent,
    OthersSuggestionsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    StoreModule.forRoot(reducers),
    FormsModule,
    ReactiveFormsModule,
    RatingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatOptionModule,
    MatDividerModule,
    FormsModule,
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    MatCheckboxModule,
    FontAwesomeModule,
    MatInputModule,
    HttpClientModule,
    FontAwesomeModule,
    MatTabsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private library:FaIconLibrary) {
    library.addIcons(faGoogle, faGooglePlusG);
  }
}
