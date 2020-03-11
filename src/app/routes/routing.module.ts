import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guard/auth.guard';
import {HomeComponent} from '../components/home/home.component';
import {MifgafsComponent} from '../components/mifgafs/mifgafs.component';
import {EveningsComponent} from '../components/evenings/evenings.component';
import {LaunchesComponent} from '../components/launches/launches.component';
import {LoginComponent} from '../components/login/login.component';

// Include route guard in routes array
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'mifgafs', component: MifgafsComponent, canActivate: [AuthGuard] },
  { path: 'evenings', component: EveningsComponent, canActivate: [AuthGuard] },
  { path: 'lunches', component: LaunchesComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/home', canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule { }
