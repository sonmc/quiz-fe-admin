import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { KrService } from '../../containers/services/kr/kr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DoDService } from '../../containers/services/dod/dod.service';

@Component({
  selector: 'objective-detail',
  templateUrl: 'objective-detail.component.html'
})
export class ObjectiveDetailComponent {

  objectiveId: Number = 0;
  objectiveName: String = "";
  constructor(public service: KrService, private actRoute: ActivatedRoute, public router: Router, public dodService: DoDService) {
    this.objectiveId = parseInt(this.actRoute.snapshot.params.id);
    this.objectiveName = this.actRoute.snapshot.params.name;
  }
}
