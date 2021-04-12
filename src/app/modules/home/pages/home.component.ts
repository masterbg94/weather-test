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
      colorValue: -40
    },
    {
      colorCode: '#103887',
      colorValue: -39
    },
    {
      colorCode: '#0F4290',
      colorValue: -38
    },
    {
      colorCode: '#0F4B98',
      colorValue: -37
    },
    {
      colorCode: '#0E55A1',
      colorValue: -36
    },
    {
      colorCode: '#0E5EAA',
      colorValue: -35
    },
    {
      colorCode: '#0E67B3',
      colorValue: -34
    },
    {
      colorCode: '#0D71BC',
      colorValue: -33
    },
    {
      colorCode: '#0D7AC4',
      colorValue: -32
    },
    {
      colorCode: '#0C84CD',
      colorValue: -31
    },
    {
      colorCode: '#0C8DD6',
      colorValue: -30
    },
    {
      colorCode: '#0D8FD8',
      colorValue: -29
    },
    {
      colorCode: '#0F91DA',
      colorValue: -28
    },
    {
      colorCode: '#1093DD',
      colorValue: -27
    },
    {
      colorCode: '#1295DF',
      colorValue: -26
    },
    {
      colorCode: '#1397E1',
      colorValue: -25
    },
    {
      colorCode: '#1498E3',
      colorValue: -24
    },
    {
      colorCode: '#169AE5',
      colorValue: -23
    },
    {
      colorCode: '#179CE8',
      colorValue: -22
    },
    {
      colorCode: '#199EEA',
      colorValue: -21
    },
    {
      colorCode: '#1AA0EC',
      colorValue: -20
    },
    {
      colorCode: '#21A4EE',
      colorValue: -19
    },
    {
      colorCode: '#28A8F0',
      colorValue: -18
    },
    {
      colorCode: '#2FABF2',
      colorValue: -17
    },
    {
      colorCode: '#36AFF4',
      colorValue: -16
    },
    {
      colorCode: '#3DB3F6',
      colorValue: -15
    },
    {
      colorCode: '#44B7F7',
      colorValue: -14
    },
    {
      colorCode: '#4BBBF9',
      colorValue: -13
    },
    {
      colorCode: '#52BEFB',
      colorValue: -12
    },
    {
      colorCode: '#59C2FD',
      colorValue: -11
    },
    {
      colorCode: '#60C6FF',
      colorValue: -10
    },
    {
      colorCode: '#66C8FF',
      colorValue: -9
    },
    {
      colorCode: '#6CCAFF',
      colorValue: -8
    },
    {
      colorCode: '#72CCFF',
      colorValue: -7
    },
    {
      colorCode: '#78CEFF',
      colorValue: -6
    },
    {
      colorCode: '#7ED1FF',
      colorValue: -5
    },
    {
      colorCode: '#83D3FF',
      colorValue: -4
    },
    {
      colorCode: '#89D5FF',
      colorValue: -3
    },
    {
      colorCode: '#8FD7FF',
      colorValue: -2
    },
    {
      colorCode: '#95D9FF',
      colorValue: -1
    },
    {
      colorCode: '#9BDBFF',
      colorValue: 0
    },
    {
      colorCode: '#9EDBFB',
      colorValue: 1
    },
    {
      colorCode: '#A0DCF8',
      colorValue: 2
    },
    {
      colorCode: '#A3DCF4',
      colorValue: 3
    },
    {
      colorCode: '#A5DCF0',
      colorValue: 4
    },
    {
      colorCode: '#A8DDED',
      colorValue: 5
    },
    {
      colorCode: '#AADDE9',
      colorValue: 6
    },
    {
      colorCode: '#ADDDE5',
      colorValue: 7
    },
    {
      colorCode: '#AFDDE1',
      colorValue: 8
    },
    {
      colorCode: '#B2DEDE',
      colorValue: 9
    },
    {
      colorCode: '#B4DEDA',
      colorValue: 10
    },
    {
      colorCode: '#BCDDCF',
      colorValue: 11
    },
    {
      colorCode: '#C3DCC4',
      colorValue: 12
    },
    {
      colorCode: '#CBDCB9',
      colorValue: 13
    },
    {
      colorCode: '#D2DBAE',
      colorValue: 14
    },
    {
      colorCode: '#DADAA3',
      colorValue: 15
    },
    {
      colorCode: '#E1D997',
      colorValue: 16
    },
    {
      colorCode: '#E9D88C',
      colorValue: 17
    },
    {
      colorCode: '#F0D881',
      colorValue: 18
    },
    {
      colorCode: '#F8D776',
      colorValue: 19
    },
    {
      colorCode: '#FFD66B',
      colorValue: 20
    },
    {
      colorCode: '#FFD46C',
      colorValue: 21
    },
    {
      colorCode: '#FFD26E',
      colorValue: 22
    },
    {
      colorCode: '#FFD06F',
      colorValue: 23
    },
    {
      colorCode: '#FFCE70',
      colorValue: 24
    },
    {
      colorCode: '#FFCC72',
      colorValue: 25
    },
    {
      colorCode: '#FFC973',
      colorValue: 26
    },
    {
      colorCode: '#FFC774',
      colorValue: 27
    },
    {
      colorCode: '#FFC575',
      colorValue: 28
    },
    {
      colorCode: '#FFC377',
      colorValue: 29
    },
    {
      colorCode: '#FFC178',
      colorValue: 30
    },
    {
      colorCode: '#FFBC75',
      colorValue: 31
    },
    {
      colorCode: '#FFB871',
      colorValue: 32
    },
    {
      colorCode: '#FFB36E',
      colorValue: 33
    },
    {
      colorCode: '#FFAE6A',
      colorValue: 34
    },
    {
      colorCode: '#FFAA67',
      colorValue: 35
    },
    {
      colorCode: '#FEA563',
      colorValue: 36
    },
    {
      colorCode: '#FEA060',
      colorValue: 37
    },
    {
      colorCode: '#FE9B5C',
      colorValue: 38
    },
    {
      colorCode: '#FE9759',
      colorValue: 39
    },
    {
      colorCode: '#FE9255',
      colorValue: 40
    }
  ];

  averageTemp;
  today;
  bg1;
  bg2;
  bg3;
  gradient = 'linear-gradient( 130.54deg,#9bdbff -33.02%, #b4deda 52.01%, #ffd66b 137.04%)';

  constructor(private forecastService: ForecastService) {}

  getByCityId(cityId, days) {
    this.forecastService
      .getForecastByCityId(cityId, days)
      .subscribe((response: WeatherModel) => {
        console.log(response);
        this.weatherData = response;
        this.calculateAverage(response);
        this.today = response.data[0];
        this.returnGradientColor(this.today);
        this.gradient = `linear-gradient( 130.54deg,${this.bg1.colorCode} -33.02%, ${this.bg2.colorCode} 52.01%, ${this.bg3.colorCode} 137.04%)`;
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

  returnGradientColor(temp) {
    this.bg1 = this.gradientColors.find(x => x.colorValue === Math.round(temp.min_temp));
    this.bg2 = this.gradientColors.find(x => x.colorValue === Math.round(temp.temp));
    this.bg3 = this.gradientColors.find(x => x.colorValue === Math.round(temp.max_temp));
  }

}
