import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AddAppointmentWriteModel, RequestModel, RequestAdapter} from '@api/models';
import {environment} from '../../../environments/environment';
import {ReadOnlyModelViewSetClient} from '@api/clients/ReadOnlyModelViewSetClient';
import {convertMoment} from '@api/clients/helpers';
import {map} from 'rxjs/operators';
import {Moment} from 'moment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestClient extends ReadOnlyModelViewSetClient<RequestModel, RequestsParam> {

  billingUrl = environment.apiUrl + 'billing/';

  constructor(http: HttpClient,
              adapter: RequestAdapter) {
    super(http, adapter, environment.apiUrl + 'requests/');
  }

  createAppointment(params: AddAppointmentWriteModel) {
    convertMoment(params);
    return this.http.post<RequestModel>(this.baseUrl + 'add/', params)
      .pipe(
        map(this.adapter.adapt)
      );
  }

  patch(id: number, customerNotes: string) {
    return this.http.patch<RequestModel>(`${this.baseUrl}${id}/`, {customerNotes})
      .pipe(
        map(this.adapter.adapt)
      );
  }

  complete(id: number) {
    return this.http.patch<RequestModel>(this.baseUrl + id + '/confirm/', {})
      .pipe(
        map(this.adapter.adapt)
      );
  }

  delete(id: number, appointment: string, owner: string) {
    return this.http.delete<RequestModel>(this.baseUrl + id + '/', {params: {appointment, owner}})
      .pipe(
        map(this.adapter.adapt)
      );
  }

  current(owner) {
    return this.http.get(this.baseUrl + 'current/', {params: {owner}}).pipe(
      map(this.adapter.adapt)
    );
  }

  payment(requestId): Observable<StripePaymentDetails> {
    return this.http.put<StripePaymentDetails>(this.billingUrl + `payment/${requestId}/`, {});
  }
}

export interface StripePaymentDetails {
  clientSecret: string;
}

export interface RequestsParam {
  from_date?: Moment;
  to_date?: Moment;
  status?: string;
  employee?: number;
  employees?: number[];
  services?: number[];
}
