import { NgModule } from '@angular/core';
import { MyOkrRoutingModule } from './my-okr-routing.module';
import { MyOkrComponent } from './my-okr.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [
    MyOkrRoutingModule,
    CommonModule
  ],
  declarations: [MyOkrComponent]
})
export class MyOkrModule { }
