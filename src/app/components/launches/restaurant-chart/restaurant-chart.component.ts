import { ChangeDetectionStrategy, Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { RestaurantSurvey } from '../../../models/interfaces/restaurant-survey';
import { Restaurant } from '../../../models/interfaces/restaurant';
import { User } from '../../../models/user';
import { ChartType } from '../../../models/enums/enums';
import { ChartData } from '../../../models/interfaces/chart-data';

const CHART_HEIGHT:number = 700;
const CHART_WIDTH:number = 300;
const VOTERS_POP_UP_HEADER:string = 'שמות המצביעים';
const NOT_FOUND_IN_CHART:number = -1;

@Component({
  selector: 'app-restaurant-chart',
  templateUrl: './restaurant-chart.component.html',
  styleUrls: ['./restaurant-chart.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RestaurantChartComponent implements OnChanges {
  @Input() restaurantSurvey:RestaurantSurvey;
  @Input() restaurants:Restaurant[];
  @Input() users:User[];

  voters:string[];
  chartType:ChartType;
  chartData:ChartData[];
  chartSizes:[number, number];
  header:string;

  constructor() {
    this.voters = [];
    this.chartData = [];
    this.chartType = ChartType.pie;
    this.chartSizes = [CHART_HEIGHT, CHART_WIDTH];
    this.header = VOTERS_POP_UP_HEADER;
  }

  ngOnChanges(changes:SimpleChanges):void {
    if (changes.restaurantSurvey && this.restaurantSurvey) {
      this.updateChartData();
    }
  }

  onChartValueSelected(event:any):void {
    let restaurant:Restaurant = this.restaurants.find(restaurant => restaurant.name === event.name);
    if (restaurant) {
      let votersIds:string[] = this.restaurantSurvey[restaurant.id];
      if (votersIds) {
        this.openVoters(votersIds);
      }
    }
  }

  closeVoters():void {
    this.voters = [];
  }

  private openVoters(votersIds:string[]):void {
    let voters:User[] = this.users.filter(user => votersIds.includes(user.uid));
    this.voters = voters.map(voter => voter.displayName);
  }

  private updateChartData():void {
    let surveyKeys:string[] = Object.keys(this.restaurantSurvey);
    for (let key of surveyKeys) {
      const restaurant:Restaurant = this.restaurants.find(restaurant => restaurant.id.toString() === key);
      if (restaurant) {
        const chartData:ChartData = {
          name: restaurant.name,
          value: this.restaurantSurvey[key].length
        };
        this.insertChartData(chartData);
      }
    }
  }

  private insertChartData(chartData:ChartData):void {
    let restaurantResultIndex:number = this.chartData.findIndex(result => result.name === chartData.name);
    if (restaurantResultIndex !== NOT_FOUND_IN_CHART) {
      this.chartData[restaurantResultIndex].value = chartData.value;
    } else {
      this.chartData = [...this.chartData, chartData];
    }
  }
}
