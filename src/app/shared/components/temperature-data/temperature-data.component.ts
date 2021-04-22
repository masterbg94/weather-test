import {Component, Input, OnChanges, SimpleChanges,} from '@angular/core';
import {WeatherModel} from '../../models/weather.model';

@Component({
  selector: 'app-temperature-data-component',
  templateUrl: './temperature-data.component.html',
  styleUrls: ['./temperature-data.component.scss'],
})
export class TemperatureDataComponent implements OnChanges {
  currentDate = new Date();
  endDate = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 7);
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
