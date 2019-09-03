import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Moment} from 'moment';
import {DateChangedEvent} from '../../events/DateChangedEvent';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  @Input('default-date') currentDate;
  @Input('min-date') minDate: Moment;
  @Input('max-date') maxDate: Moment;

  @Output() dayRender = new EventEmitter<DateChangedEvent>();

  constructor() {
  }

  ngOnInit() {
  }

  previousDay() {
    if (!this.minDate || this.minDate && this.currentDate > this.minDate) {
      this.currentDate.subtract(1, 'days');
      this.emitDayRender();
    }
  }

  nextDay() {
    if (!this.maxDate || this.maxDate && this.currentDate < this.maxDate) {
      this.currentDate.add(1, 'days');
      this.emitDayRender();
    }
  }

  emitDayRender() {
    const event = {
      date: this.currentDate
    };
    this.dayRender.emit(event);
  }
}
