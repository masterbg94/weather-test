import {Component} from '@angular/core';
import {ForecastService} from '../../../shared/services/forecast.service';
import {WeatherModel} from '../../../shared/models/weather.model';
import {CityModel} from '../../../shared/models/city.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  weatherData: WeatherModel;
  gradientColors = [
    {
      colorCode: '#102F7E',
      colorValue: -40,
    },
    {
      colorCode: '#0C8DD6',
      colorValue: -30,
    },
    {
      colorCode: '#1AA0EC',
      colorValue: -20,
    },
    {
      colorCode: '#60C6FF',
      colorValue: -10,
    },
    {
      colorCode: '#9BDBFF',
      colorValue: 0,
    },
    {
      colorCode: '#B4DEDA',
      colorValue: 10,
    },
    {
      colorCode: '#FFD66B',
      colorValue: 20,
    },
    {
      colorCode: '#FFC178',
      colorValue: 30,
    },
    {
      colorCode: '#FE9255',
      colorValue: 40,
    },
  ];

  averageTemp;
  gradient =
    'linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)),linear-gradient(119.25deg, #102F7E -11.47%, #0C8DD6 3.95%, #1AA0EC 19.37%, #60C6FF 34.78%, #9BDBFF 50.19%, #B4DEDA 65.61%, #FFD66B 81.02%, #FFC178 96.44%, #FE9255 111.85%)';
  gradientEndpointIndex;

  constructor(private forecastService: ForecastService) {
  }

  getByCityId(cityId, days) {
    this.forecastService
      .getForecastByCityId(cityId, days)
      .subscribe((response: WeatherModel) => {
        this.weatherData = response;
        this.calculateAverage(response);
        this.returnGradientColor();
        this.gradient = `linear-gradient( 130.54deg,${this.gradientColors[this.gradientEndpointIndex - 1].colorCode} -33.02%, ${this.gradientColors[this.gradientEndpointIndex].colorCode} 52.01%, ${this.gradientColors[this.gradientEndpointIndex + 1].colorCode} 137.04%)`;
      });
  }

  reciveCity(x: CityModel) {
    this.getByCityId(x.city_id, 10);
  }

  calculateAverage(response: WeatherModel) {
    this.averageTemp = 0;
    for (const temp of response.data) {
      this.averageTemp = this.averageTemp + temp.temp;
    }
    this.averageTemp = Math.round(this.averageTemp / 10);
  }

  returnGradientColor() {
    const avgTemp = Math.round(this.averageTemp / 10) * 10;
    this.gradientEndpointIndex = this.gradientColors.indexOf(
      this.gradientColors.find((x) => x.colorValue === avgTemp)
    );
  }
}
