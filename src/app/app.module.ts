import {reducers} from './store/reducers';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MifgafsComponent} from './components/mifgafs/mifgafs.component';
import {LaunchesComponent} from './components/launches/launches.component';
import {EveningsComponent} from './components/evenings/evenings.component';
import {StoreModule} from '@ngrx/store';
import {EvningsHistoryComponent} from './components/evnings-history/evnings-history.component';
import {SchedualNewEveningComponent} from './components/schedual-new-evening/schedual-new-evening.component';
import {CalanderComponent} from './components/calander/calander.component';
import {LoginComponent} from './components/login/login.component';
import {RoutingModule} from './routes/routing.module';
import {HomeComponent} from './components/home/home.component';

// Firebase services + enviorment module
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {environment} from '../environments/environment';
import {AuthService} from './routes/services/auth.service';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MifgafsComponent,
    LaunchesComponent,
    EveningsComponent,
    EvningsHistoryComponent,
    SchedualNewEveningComponent,
    CalanderComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
