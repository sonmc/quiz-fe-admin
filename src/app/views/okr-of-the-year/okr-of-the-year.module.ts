import { NgModule } from '@angular/core';
import { OkrOfYearRoutingModule } from './okr-of-the-year-routing.module';
import { OkrOfYearComponent } from './okr-of-the-year.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    OkrOfYearRoutingModule,
    CommonModule, FormsModule
  ],
  declarations: [OkrOfYearComponent]
})
export class OkrOfYearModule { }
