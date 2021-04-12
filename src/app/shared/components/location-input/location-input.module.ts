import {NgModule} from '@angular/core';
import {LocationInputComponent} from './location-input.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {AutocompleteLibModule} from 'angular-ng-autocomplete';

@NgModule({
  declarations: [LocationInputComponent],
  imports: [
    FormsModule,
    CommonModule,
    NgbDropdownModule,
    AutocompleteLibModule
  ],
  exports: [
    LocationInputComponent
  ],
})
export class LocationInputModule {
}
