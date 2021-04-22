import {AfterViewInit, Component, EventEmitter, Output, ViewChild} from '@angular/core';

import { COUNTRIES } from '../../mock/country.list';
import { Country } from '../../models/country.model';
import { CITIES } from '../../mock/city.list';
import { CityModel } from '../../models/city.model';

@Component({
  selector: 'app-location-input-component',
  templateUrl: './location-input.component.html',
  styleUrls: ['./location-input.component.scss'],
})
export class LocationInputComponent implements AfterViewInit{
  allCountries: Country[] = COUNTRIES;
  selectedCountry;
  allCities: CityModel[] = CITIES;
  selectedCities;
  countryKeyword = 'country_code';
  keyword = 'city_name';
  @Output() emitCity = new EventEmitter<any>();
  @ViewChild('autocomplete') autocomplete;
  customImageElement;
  customImageWrapper;


  selectCountry(country) {
    this.selectedCountry = country;
    this.selectedCities = this.allCities
      .filter((x) => x.country_code === country.country_code)
      .sort((a, b) => (a.city_name > b.city_name ? 1 : -1));
    this.customImageElement.src = `../../../../assets/images/countries/${country.icon}.png`;
    this.customImageWrapper.classList.remove('hidden-wrapper');
  }

  sendCityData(city) {
    this.emitCity.emit(city);
  }

  clearedCountry(){
    this.selectedCities = null;
    this.customImageWrapper.classList.add('hidden-wrapper');
  }

  ngAfterViewInit(): void {
    const elem = document.getElementById('autocomplete1').getElementsByClassName('input-container');
    this.customImageWrapper = document.createElement('div');
    this.customImageWrapper.className = 'position-absolute custom-image-wrapper';
    this.customImageWrapper.classList.add('hidden-wrapper');
    this.customImageElement = document.createElement('img');
    this.customImageWrapper.appendChild(this.customImageElement);
    elem[0].appendChild(this.customImageWrapper);
  }
}
