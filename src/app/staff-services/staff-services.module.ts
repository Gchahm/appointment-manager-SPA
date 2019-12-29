import { NgModule } from '@angular/core';
import {SharedModule} from '../shared/shared.module';
import {StaffServicesRoutingModule} from './staff-services-routing.module';
import {EmployeeListComponent} from './components/employee-list/employee-list.component';
import {EmployeeDetailComponent} from './components/employee-detail/employee-detail.component';
import {CalendarModule} from '../calendar/calendar.module';
import { SlotEventComponent } from './components/slot-event/slot-event.component';



@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeDetailComponent,
    SlotEventComponent,
  ],
  imports: [
    SharedModule,
    StaffServicesRoutingModule,
    CalendarModule,
  ]
})
export class StaffServicesModule { }