import { NgModule } from '@angular/core';
import { OkrOfYearRoutingModule } from './okr-of-the-year-routing.module';
import { OkrOfYearComponent } from './okr-of-the-year.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    OkrOfYearRoutingModule,
    CommonModule
  ],
  declarations: [OkrOfYearComponent]
})
export class OkrOfYearModule { }
