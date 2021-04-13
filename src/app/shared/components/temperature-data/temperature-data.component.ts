import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {WeatherModel} from '../../models/weather.model';

@Component({
  selector: 'app-temperature-data-component',
  templateUrl: './temperature-data.component.html',
  styleUrls: ['./temperature-data.component.scss'],
})
export class TemperatureDataComponent implements OnChanges {
  currentDate = new Date();
  first = this.currentDate.getDate() - this.currentDate.getDay();
  last = this.first + 7;
  firstday = new Date();
  lastday = new Date(this.currentDate.setDate(this.last)).toUTCString();
  @Input() data: WeatherModel = null;
  @Input() averageTemp;

  viewData = null;

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.viewData = this.data.data.slice(0, 7).map(x => Math.round(x.temp));
    }
  }

  returnDayName(index) {
    return new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + index);
  }
}
