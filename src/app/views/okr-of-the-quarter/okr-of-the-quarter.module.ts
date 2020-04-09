import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OkrOfQuarterComponent } from './okr-of-the-quarter.component';
import { OkrOfQuarterRoutingModule } from './okr-of-the-quarter-routing.module';


@NgModule({
  imports: [
    OkrOfQuarterRoutingModule, TabsModule
  ],
  declarations: [OkrOfQuarterComponent]
})
export class OkrOfQuarterModule { }
