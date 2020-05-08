import {Component, Input, Output} from '@angular/core';
import {Moment} from 'moment';
import {CalendarEvent} from '../../models/CalendarEvent';
import {Slot} from '../../models/Slot';
import {TimeOfDay} from '../../../core/models/TimeOfDay';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {

  @Input('default-date') currentDate;
  @Input('max-date') maxDate: Moment;
  @Input('min-date') set date(value: Moment) {
    if (!this.minDate) {
      this.minDate = value.clone();
    }
  }
  @Input('min-time') minStart = 6;
  @Input('max-time') maxStart = 23;

  @Input('events') events: CalendarEvent[] = [];
  @Input('availability') availability: Slot[] = [];

  minDate: Moment;
  calendarHours: number[];

  constructor() {
    this.calendarHours = [];
    for (let i = this.minStart; i <= this.maxStart; i++) {
      this.calendarHours.push(i);
    }
  }

  topPosition(event: CalendarEvent): string {
    const value = event.start.hour() * 60 + event.start.minute() - this.minStart * 60;
    return value.toString() + 'px';
  }

  eventHeight(event: CalendarEvent): string {
    const value = (event.end.hour() * 60 + event.end.minute()) - (event.start.hour() * 60 + event.start.minute() );
    return value.toString() + 'px';
  }

  calendarHeight() {
    const el = document.getElementById('calendar-table-container');
    const topOffset = el.getBoundingClientRect().top;
    const value = (window.innerHeight - topOffset - 100);
    return value.toString() + 'px';
  }

  backGroundColor(hour: number, minute: number) {
    const hr =  new TimeOfDay(hour, minute);
    for (const slot of this.availability) {
      if (slot.start.hashCode() <= hr.hashCode() && slot.end.hashCode() > hr.hashCode()) {
        return 'white';
      }
    }
    return '#cccccc';
  }
}
