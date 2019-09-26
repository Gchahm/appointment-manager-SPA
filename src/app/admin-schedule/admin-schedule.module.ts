import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import { DashboardPageComponent } from './components/dashboard-page/dashboard-page.component';
import {EmployeeRoutingModule} from './employee-routing.module';
import {CalendarModule} from '../calendar/calendar.module';
import { AppointmentEventComponent } from './components/appointment-event/appointment-event.component';
import { FormAppointmentComponent } from './components/form-appointment/form-appointment.component';
import { AppointmentRequestsComponent } from './components/appointment-requests/appointment-requests.component';
import { CancelModalComponent } from './components/cancel-modal/cancel-modal.component';
import { FormSelfAppointmentComponent } from './components/form-self-appointment/form-self-appointment.component';
import { ProfileComponent } from './components/profile/profile.component';
import {ScheduleViewComponent} from './components/schedule-view/schedule-view.component';
import {DialogCustomerListComponent} from './components/dialog-customer-list/dialog-customer-list.component';
import {DialogCreateCustomerComponent} from './components/dialog-create-customer/dialog-create-customer.component';



@NgModule({
  declarations: [
    CancelModalComponent,
    DashboardPageComponent,
    ScheduleViewComponent,
    AppointmentEventComponent,
    FormAppointmentComponent,
    AppointmentRequestsComponent,
    FormSelfAppointmentComponent,
    ProfileComponent,
    DialogCustomerListComponent,
    DialogCreateCustomerComponent
  ],
  imports: [
    SharedModule,
    EmployeeRoutingModule,
    CalendarModule,
  ],
  bootstrap: [CancelModalComponent, DialogCreateCustomerComponent, DialogCustomerListComponent]
})
export class AdminScheduleModule {
  private static FormCreateCustomerComponent: any;
}