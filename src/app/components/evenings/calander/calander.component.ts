import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  OnInit,
  Input,
  Output
} from '@angular/core';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject, Observable } from 'rxjs';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { EventEmitter } from '@angular/core';
import {colors} from '../../../models/enums/color'
import { NumberCardModule } from '@swimlane/ngx-charts';
import { Position } from '../../../models/interfaces/position';
import { UsersService } from 'src/app/services/users.service';
import { User } from 'src/app/models/interfaces/user';

@Component({
  selector: 'app-calander',
  templateUrl: './calander.component.html',
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {
  @Input() events:CalendarEvent[];
  @Output() eventAdded:EventEmitter<CalendarEvent>;
  @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

  user:User;
  position:Position;
  isPanelOpen: boolean;
  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      a11yLabel: 'Edit',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      a11yLabel: 'Delete',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  activeDayIsOpen: boolean = true;

  refresh: Subject<any> = new Subject();
  
  constructor(private userService:UsersService) {
    this.eventAdded = new EventEmitter<CalendarEvent>();
    this.isPanelOpen = false;
    this.userService.getCurrentUser().subscribe((user) => this.user = user);
  }


  ngOnInit() {
  }

  dayClicked(event:any): void {
    if (isSameMonth(event.day.date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, event.day.date) && this.activeDayIsOpen === true)
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
      this.viewDate = event.day.date;
    }
    this.isPanelOpen = true;
    this.position = {x:event.sourceEvent.x, y:event.sourceEvent.y};
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    this.events = this.events.map(iEvent => {
      if (iEvent === event) {
        return {
          ...event,
          start: newStart,
          end: newEnd
        };
      }
      return iEvent;
    });
    this.handleEvent('Dropped or resized', event);
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
  }

  addEvent(option:NumberCardModule): void {
    let colorToMark = colors.green;
    if (option !== 1) {
      colorToMark = option == 2 ? colors.yellow : colors.red;
    }
    this.eventAdded.emit(
      {
        start: this.viewDate,
        end: this.viewDate,
        title: this.user.name,
        color: colorToMark,
        allDay: true,
      }
    );
    this.isPanelOpen = false;
  }

  deleteEvent(eventToDelete: CalendarEvent) {
    this.events = this.events.filter(event => event !== eventToDelete);
  }

  setView(view: CalendarView) {
    this.view = view;
  }

  closeOpenMonthViewDay() {
    this.activeDayIsOpen = false;
  }
}
