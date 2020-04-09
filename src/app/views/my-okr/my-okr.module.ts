import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { MyOkrRoutingModule } from './my-okr-routing.module';
import { MyOkrComponent } from './my-okr.component';


@NgModule({
  imports: [
    FormsModule,
    MyOkrRoutingModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  declarations: [MyOkrComponent]
})
export class MyOkrModule { }
