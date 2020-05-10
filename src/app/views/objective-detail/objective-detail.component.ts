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
export class ObjectiveDetailComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  @ViewChild('modalCreateDod') modalCreateDod: ModalDirective;
  krs: any;
  dods: any;
  title: String = "Create";
  employees: any;
  isNoData: Boolean = true;
  isNoDataKr: Boolean = true;
  objectiveId: Number;
  teamId: Number;

 
  constructor(public service: KrService, private actRoute: ActivatedRoute, public router: Router, public dodService: DoDService) {
    this.objectiveId = parseInt(this.actRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getKr();
    this.getDod();
  }




  // openModalEdit = (kr) => {
  //   this.title = "Edit";
  //   this.kr = kr;
  //   this.modalCreate.show();
  // }


  getKr() {
    var data = {
      objectiveId: this.objectiveId,
      employeeId: 0
    }
    this.service.get(data)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.krs = res['data'];
          if (this.krs.length > 0) {
            this.isNoDataKr = true;
          } else {
            this.isNoDataKr = false;
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  getDod = () => {
    this.dodService.get(this.objectiveId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.dods = res['data'];
          if (this.dods.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  } 
}
