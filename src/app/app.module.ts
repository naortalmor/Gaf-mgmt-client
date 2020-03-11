import {reducers} from './store/reducers';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {AppComponent} from './app.component';
import {MifgafsComponent} from './components/mifgafs/mifgafs.component';
import {LaunchesComponent} from './components/launches/launches.component';
import {EveningsComponent} from './components/evenings/evenings.component';
import {StoreModule} from '@ngrx/store';
import {ChartComponent} from './components/chart/chart.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RestaurantComponent} from './components/launches/restaurant/restaurant.component';
import {EvningsHistoryComponent} from './components/evnings-history/evnings-history.component';
import {SchedualNewEveningComponent} from './components/schedual-new-evening/schedual-new-evening.component';
import { EveningCardComponent } from './components/evenings/evening-card/evening-card.component';
import {CalanderComponent} from './components/calander/calander.component';
import {CalendarModule, DateAdapter} from 'angular-calendar';
import {adapterFactory} from 'angular-calendar/date-adapters/date-fns';
import {RestaurantListComponent} from './components/launches/restaurant-list/restaurant-list.component';
import {SuggestionsContainerComponent} from './components/launches/suggestions-container/suggestions-container.component';
import { MatCard, MatCardTitle, MatCardHeader, MatCardSubtitle, MatCardContent, MatCardActions } from '@angular/material/card';
import {TabComponent} from './components/tab/tab.component';
import {LunchSurveyComponent} from './components/launches/lunch-survey/lunch-survey.component';
import {ThisWeekComponent} from './components/mifgafs/this-week/this-week/this-week.component';
import {PersonComponent} from './components/mifgafs/person/person/person.component';
import {LoginComponent} from './components/login/login.component';
import {RoutingModule} from './routes/routing.module';
import {HomeComponent} from './components/home/home.component';
// Firebase services + enviorment module
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AuthService} from './routes/services/auth.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { EveningListComponent } from './components/evenings/evening-list/evening-list.component';
import { EveningDetailsComponent } from './components/evenings/evening-details/evening-details.component';

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
    MatCard, 
    MatCardTitle, 
    MatCardHeader, 
    MatCardSubtitle, 
    MatCardContent, 
    MatCardActions, 
    EveningListComponent, 
    EveningDetailsComponent, 
    EveningCardComponent,
    LoginComponent,
    HomeComponent,
    SuggestionsContainerComponent,
    TabComponent,
    LunchSurveyComponent,
    ThisWeekComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    MatButtonModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers),
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
    NgxStarRatingModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
