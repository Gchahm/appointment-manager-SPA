import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {NgModule} from '@angular/core';
import {NotLoggedInGuard} from './guards/not-logged-in.guard';
import {LoginComponent} from './components/login/login.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {AuthGuard} from '../shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [NotLoggedInGuard]
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'my-appointments',
    component: DashboardPageComponent,
    canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
