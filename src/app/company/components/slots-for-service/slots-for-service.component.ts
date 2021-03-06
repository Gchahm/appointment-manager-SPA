import {Component, EventEmitter, Input, Output} from '@angular/core';
import * as moment from 'moment';
import {Moment} from 'moment';
import {ServiceSlot} from '@company/state';
import {Service} from '@api/models';
import {bounceInRightAnimation, fadeInOnEnterAnimation, fadeOutOnLeaveAnimation} from 'angular-animations';

@Component({
  selector: 'company-slots-for-service',
  templateUrl: './slots-for-service.component.html',
  styleUrls: ['./slots-for-service.component.scss'],
  animations: [
    bounceInRightAnimation(),
    fadeInOnEnterAnimation({delay: 500}),
    fadeOutOnLeaveAnimation({duration: 300})
  ]
})
export class SlotsForServiceComponent {
  @Input() serviceSlots: ServiceSlot[];
  @Input() currentSlotId: number;
  @Input() isMobile = false;
  @Input() isLoading = false;
  @Input() hasShadow = true;

  @Input() set date(value: Moment) {
    this.currentDate = value;
    this.nextDate = value.clone().add(1, 'd');
    this.currentDateFormatted = this.currentDate.format('ddd DD/MM/YYYY');
    this.nextDayFormatted = this.nextDate.format('ddd DD/MM/YYYY');
  }

  private _service: Service;
  @Input() set service(service: Service) {
    this._service = service;
    this.serviceAnimationState = !this.serviceAnimationState;
  }

  get service(): Service {
    return this._service;
  }


  currentDate: Moment;
  nextDate: Moment;
  currentDateFormatted: string;
  nextDayFormatted: string;
  serviceAnimationState: boolean;


  currentDateSlots(): ServiceSlot[] {
    return this.serviceSlots.filter(s => s.start.date() === this.currentDate.date());
  }

  nextDaySlots(): ServiceSlot[] {
    return this.serviceSlots.filter(s => s.start.date() === this.nextDate.date());
  }
}
