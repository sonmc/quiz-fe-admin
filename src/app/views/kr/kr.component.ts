import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { KrService } from '../../containers/services/kr/kr.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DoDService } from '../../containers/services/dod/dod.service';

@Component({
  selector: 'app-kr',
  templateUrl: 'kr.component.html'
})
export class KrComponent implements OnInit {
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
  dod: Object = {
    dodId: 0,
    content: "",
    objectiveId: 0
  }
  kr: Object = {
    krId: 0,
    description: "",
    objectiveId: 0,
    measurement: "",
    baseValue: 0,
    currentValue: 0,
    targetValue: 0,
    startDate: null,
    endDate: null,
    employeeId: 0,
    weeks: []
  };
  constructor(public service: KrService, private actRoute: ActivatedRoute, public router: Router, public dodService: DoDService) {
    this.objectiveId = parseInt(this.actRoute.snapshot.params.id);
  }

  ngOnInit(): void {
    this.getKr();
    this.getDod();
  }
  save = () => {
    this.kr["employeeId"] = parseInt(this.kr["employeeId"]);
    this.kr["objectiveId"] = this.objectiveId;
    if (this.title == "Create") {
      this.service.create(this.kr)
        .then(res => {
          if (SUCCESS_STATUS == res['status']) {
            this.krs = res['data'];
            if (this.krs.length > 0) {
              this.isNoData = true;
            } else {
              this.isNoData = false;
            }
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }
    // else {
    //   this.service.update(this.kr)
    //     .then(res => {
    //       if (SUCCESS_STATUS == res['status']) {
    //         this.krs = res['data'];
    //       }
    //     }).catch(e => {
    //       window.alert('Connection Error !');
    //     })
    // }
  }
  delete = () => {
    this.service.create(this.kr)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.krs = res['data'];
          if (this.krs.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  deleteDod = (dodId) => {
    this.dodService.delete(dodId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          for (let index = 0; index < this.dods.length; index++) {
            if (this.dods[index].dodId == dodId) {
              this.dods.splice(index, 1);
            }
          }
          if (this.krs.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.title = "Create";
    this.kr = {
      krId: 0,
      description: "",
      objectiveId: 0,
      measurement: "",
      baseValue: "",
      targetValue: "",
      startDate: null,
      endDate: null,
      employeeId: 0,
      weeks: []
    };
    this.modalCreate.show();
  }
  // openModalEdit = (kr) => {
  //   this.title = "Edit";
  //   this.kr = kr;
  //   this.modalCreate.show();
  // }
  back = () => {
    window.history.back();
  }

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
  // getEmployee(teamId, branchId) {
  //   this.service.getEmployee(teamId, branchId)
  //     .then(res => {
  //       if (SUCCESS_STATUS == res['status']) {
  //         this.employees = res['data'];
  //       }
  //     }).catch(e => {
  //       window.alert('Connection Error !');
  //     })
  // }

  goListPlan = (krId) => {
    this.router.navigate(['/plan', krId]);
  }

  openModalCreateDod = () => {
    this.modalCreateDod.show();
  }

  saveDod = () => {
    this.dod["objectiveId"] = this.objectiveId;
    this.dodService.create(this.dod)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.dods.push(res['data']);
          if (this.dods.length > 0) {
            this.isNoData = true;
          } else {
            this.isNoData = false;
          }
        }
        this.modalCreateDod.hide();
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
}
