import { NgModule } from '@angular/core';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ObjectiveDetailComponent } from './objective-detail.component';
import { KrRoutingModule } from './objective-detail-routing.module';
import { DodComponent } from '../dod/dod.component';
import { KeyResultComponent } from '../key-result/key-result.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { CommonModule } from '@angular/common';
@NgModule({
  imports: [
    KrRoutingModule,
    TabsModule,
    ModalModule, 
    FormsModule,
    CommonModule
  ],
  declarations: [ObjectiveDetailComponent, DodComponent, KeyResultComponent]
})
export class ObjectiveDetailModule {

}
