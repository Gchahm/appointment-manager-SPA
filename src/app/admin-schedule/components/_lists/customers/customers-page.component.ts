import { Component} from '@angular/core';
import {BaseListComponent} from '../BaseListComponent';
import {Customer} from '@core/models/Customer';
import {NgRedux, select} from '@angular-redux/store';
import {IAppState} from '@app/Store';
import {CreateCustomerDialogComponent} from '../../_dialogs/create-customer/create-customer-dialog.component';
import {CustomerService} from '../../../services/customer.service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'admin-customers-page',
  templateUrl: './customers-page.component.html',
  styleUrls: ['./customers-page.component.scss']
})
export class CustomersPageComponent extends BaseListComponent<Customer> {

  @select((store: IAppState) => store.admin.customers) modelList$;

  constructor(service: CustomerService,
              dialog: MatDialog,
              redux: NgRedux<IAppState>) {
    super(service, dialog, CreateCustomerDialogComponent, redux);
  }
}
