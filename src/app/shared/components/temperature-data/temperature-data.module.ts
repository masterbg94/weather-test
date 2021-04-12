import { NgModule } from '@angular/core';
import { TemperatureDataComponent } from './temperature-data.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [TemperatureDataComponent],
  imports: [
    CommonModule
  ],
  exports: [TemperatureDataComponent],
})
export class TemperatureDataModule {}
