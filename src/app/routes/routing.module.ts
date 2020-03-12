import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
import { HomeComponent } from '../components/home/home.component';
import { MifgafsComponent } from '../components/mifgafs/mifgafs.component';
import { EveningsComponent } from '../components/evenings/evenings.component';
import { LaunchesComponent } from '../components/launches/launches.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { GuestPageComponent } from '../components/auth/guest-page/guest-page.component';
import { AdminPageComponent } from '../components/auth/admin-page/admin-page.component';
import { AdminGuard } from './guard/admin.guard';

// Include route guard in routes array
const routes:Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'guest', component: GuestPageComponent},
  {path: 'admin', component: AdminPageComponent, canActivate: [AuthGuard, AdminGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'mifgafs', component: MifgafsComponent, canActivate: [AuthGuard]},
  {path: 'evenings', component: EveningsComponent, canActivate: [AuthGuard]},
  {path: 'lunches', component: LaunchesComponent, canActivate: [AuthGuard]},
  {path: '**', redirectTo: '/home', canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class RoutingModule {
}
