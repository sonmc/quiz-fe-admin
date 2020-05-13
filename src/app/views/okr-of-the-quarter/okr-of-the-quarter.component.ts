import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { OkrService } from '../../containers/services/okr/okr.service';
import { ObjectiveService } from '../../containers/services/objective/objective.service';

@Component({
  templateUrl: 'okr-of-the-quarter.component.html'
})
export class OkrOfQuarterComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
 
  datas: any;
  constructor(public service: OkrService, public objectiveService: ObjectiveService, public router: Router) {
  }

  ngOnInit(): void {
    this.service.getOkrQuarter()
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.datas = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })

  }
  setActiveTab = () => {

  } 
}
