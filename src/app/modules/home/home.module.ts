import { NgModule } from '@angular/core';

import { HomeRoutingModule } from './home.routing.module';
import { HomeComponent } from './pages/home.component';
import { LocationInputModule } from '../../shared/components/location-input/location-input.module';
import {TemperatureDataModule} from '../../shared/components/temperature-data/temperature-data.module';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [HomeComponent],
  imports: [HomeRoutingModule, LocationInputModule, TemperatureDataModule, CommonModule],
})
export class HomeModule {}
