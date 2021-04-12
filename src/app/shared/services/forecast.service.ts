import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forecast_api_key} from '../../api.config';

@Injectable({
  providedIn: 'root',
})
export class ForecastService {
  constructor(private http: HttpClient) {
  }

  getForecastByCityId(cityId, days) {
    return this.http.get(
      `https://api.weatherbit.io/v2.0/forecast/daily?city_id=${cityId}&days=${days}&key=${forecast_api_key}`
    );
  }
}
