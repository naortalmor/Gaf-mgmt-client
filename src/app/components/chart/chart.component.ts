import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges
} from '@angular/core';
import { RestaurantSurvey } from '../../models/interfaces/restaurant-survey';
import { Restaurant } from '../../models/interfaces/restaurant';
import { User } from '../../models/interfaces/user';
import { chartData } from '../../models/interfaces/chart-data';

const CHART_HEIGHT:number = 700;
const CHART_WIDTH:number = 300;
const NOT_FOUNT_IN_CHART:number = -1;
const COLOR_SCHEME:string[] = ['#5AA454', '#E44D25', '#CFC0BB', '#7aa3e5', '#a8385d', '#aae3f5'];
const VOTERS_POP_UP_HEADER:string = 'שמות המצביעים';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnChanges {
  @Input() restaurantSurvey:RestaurantSurvey[];
  @Input() restaurants:Restaurant[];
  @Input() users:User[];

  chartSizes:[number, number];
  chartResult:chartData[];
  colorScheme:chartColorSchema;
  voters:string[];
  header:string;

  constructor() {
    this.chartSizes = [CHART_HEIGHT, CHART_WIDTH];
    this.chartResult = [];
    this.voters = [];
    this.header = VOTERS_POP_UP_HEADER;
    this.colorScheme = {domain: COLOR_SCHEME};
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (changes.restaurantSurvey) {
      this.updateChartData();
    }
  }

  onSelect(event:any):void {
    let restaurant:Restaurant = this.restaurants.find(restaurant => restaurant.name === event.name);
    if (restaurant) {
      let restaurantSurvey:RestaurantSurvey = this.restaurantSurvey.find(survey => survey.restaurantId === restaurant.id);
      if (restaurantSurvey) {
        this.openVoters(restaurantSurvey.votersIds);
      }
    }
  }

  closeVotersNames():void {
    this.voters = [];
  }

  private openVoters(votersIds:number[]):void {
    let voters:User[] = this.users.filter(user => votersIds.includes(user.id));
    this.voters = voters.map(voter => voter.name);
  }

  private updateChartData():void {
    this.restaurantSurvey.forEach((survey:RestaurantSurvey) => {
      const restaurant:Restaurant = this.restaurants.find(restaurant => restaurant.id === survey.restaurantId);
      if (restaurant) {
        const chartData:chartData = {
          name: restaurant.name,
          value: survey.votersIds.length
        };
        this.insertChartData(chartData);
      }
    });
  }

  private insertChartData(chartData:chartData):void {
    let restaurantResultIndex:number = this.chartResult.findIndex(result => result.name === chartData.name);
    if (restaurantResultIndex !== NOT_FOUNT_IN_CHART) {
      this.chartResult[restaurantResultIndex].value = chartData.value;
    } else {
      this.chartResult.push(chartData);
    }
  }
}

interface chartColorSchema {
  domain:string[];
}


export interface DialogData {
  animal:string;
  name:string;
}
