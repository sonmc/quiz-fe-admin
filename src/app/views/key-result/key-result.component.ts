import { Component, Input, ViewChild, OnInit } from '@angular/core';
import { KrService } from '../../containers/services/kr/kr.service';
import { Router } from '@angular/router';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DoDService } from '../../containers/services/dod/dod.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-key-result',
  templateUrl: './key-result.component.html',
  styleUrls: ['./key-result.component.css']
})
export class KeyResultComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;

  @Input() objectiveId: Number;
  krs: any = [];
  isNoData: boolean = false;
  kr: Object = {
    krId: 0,
    description: "",
    objectiveId: 0,
    measurement: "",
    baseValue: 0,
    currentValue: 0,
    targetValue: 0,
    employeeId: 0,
    weeks: []
  };
  title: string = "Create";
  constructor(public service: KrService,
    public router: Router,
    public dodService: DoDService,
    public toastr: ToastrService) {

  }
  ngOnInit(): void {
    if (this.objectiveId) {
      this.getKr(this.objectiveId);
    }
  }

  getKr(objectiveId) {
    var data = {
      objectiveId: objectiveId,
      employeeId: 0
    }
    this.service.get(data)
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
    return this.krs;
  }

  save = () => {
    this.kr["employeeId"] = parseInt(this.kr["employeeId"]);
    this.kr["objectiveId"] = this.objectiveId;
    if (this.title == "Create") {
      this.service.create(this.kr)
        .then(res => {
          if (SUCCESS_STATUS == res['status']) {
            this.toastr.success('Success', '');
            this.krs.push(res["data"]);
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
    else {
      this.service.update(this.kr)
        .then(res => {
          if (SUCCESS_STATUS == res['status']) {
            for (let index = 0; index < this.krs.length; index++) {
              if (this.kr["krId"] == this.krs[index].krId) {
                this.krs[index] = res["data"];
              }
            }
            this.toastr.success('Success', '');
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }
    this.modalCreate.hide();
  }
  delete = (krId) => {
    this.service.delete(krId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.toastr.success('Success', '');
          for (let index = 0; index < this.krs.length; index++) {
            if (this.krs[index].krId == krId) {
              this.krs.splice(index, 1);
            }
          }
          this.modalCreate.hide();
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
      objectiveId: this.objectiveId,
      measurement: "",
      baseValue: "",
      targetValue: "",
      employeeId: 0,
      weeks: []
    };
    this.modalCreate.show();
  }
  openModalEdit = (kr) => {
    this.title = "Update";
    Object.assign(this.kr, kr);
    this.modalCreate.show();
  }
  back = () => {
    window.history.back();
  }
  goListPlan = (krId) => {
    this.router.navigate(['/plan', krId]);
  }
}
