import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OkrTeachingComponent } from './okr-teaching.component';
import { OkrTeachingRoutingModule } from './okr-teaching-routing.module';

@NgModule({
  imports: [
    OkrTeachingRoutingModule, TabsModule
  ],
  declarations: [OkrTeachingComponent]
})
export class OkrTeachingModule { }
