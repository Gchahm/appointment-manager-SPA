import { NgModule } from '@angular/core';
import {SharedModule} from '@shared/shared.module';
import {HomeComponent} from './components/home/home.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {RegisterComponent} from './components/register/register.component';
import {CoreRoutingModule} from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {AppointmentCardComponent} from './components/appointment-card/appointment-card.component';
import { CreateCompanyComponent } from './components/create-company/create-company.component';
import { ConfirmEmailComponent } from './components/confirm-email/confirm-email.component';
import { ResendConfirmationComponent } from './components/resend-confirmation/resend-confirmation.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    DashboardPageComponent,
    AppointmentCardComponent,
    CreateCompanyComponent,
    ConfirmEmailComponent,
    ResendConfirmationComponent,
  ],
  imports: [
    SharedModule,
    CoreRoutingModule
  ],
  exports: [
    NavbarComponent,
  ]
})
export class CoreModule { }
