import {Component, EventEmitter, Output} from '@angular/core';

import {COUNTRIES} from '../../mock/country.list';
import {Country} from '../../models/country.model';
import {CITIES} from '../../mock/city.list';
import {CityModel} from '../../models/city.model';

@Component({
  selector: 'app-location-input-component',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss'],
})
export class LocationInputComponent {
  allCountries: Country[] = COUNTRIES;
  selectedCountry;
  allCities: CityModel[] = CITIES;
  selectedCities;
  keyword = 'city_name';
  @Output() emitCity = new EventEmitter<any>();

  selectCountry(country) {
    this.selectedCountry = country;
    this.selectedCities = this.allCities
      .filter((x) => x.country_code === country.country_code)
      .sort((a, b) => (a.city_name > b.city_name ? 1 : -1));
  }

  sendCityData(city) {
    this.emitCity.emit(city);
  }
}
