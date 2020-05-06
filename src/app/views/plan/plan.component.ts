import { Component, OnInit, ViewChild } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActivatedRoute } from '@angular/router';
import { PlanService } from '../../containers/services/plan/plan.service';

@Component({
  selector: 'app-plan',
  templateUrl: 'plan.component.html'
})
export class PlanComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  plans: any;
  title: String = "Create";
  isNoData: Boolean = true;
  krId: Number;
  plan: Object = {
    content: "",
    description: "",
    endDate: "",
    krId: 0,
    planId: 0,
    startDate: ""
  };
  constructor(public service: PlanService, private actRoute: ActivatedRoute) {
    this.krId = parseInt(this.actRoute.snapshot.params.krId);
  }

  ngOnInit(): void {
    this.getPlan();
  }
  save = () => {
    this.plan["krId"] = this.krId;
    if (this.title == "Create") {
      this.service.create(this.plan)
        .then(res => {
          if (SUCCESS_STATUS == res['status']) {
            this.plans.push(res['data']);
            if (this.plans.length > 0) {
              this.isNoData = true;
            } else {
              this.isNoData = false;
            }
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    } else {
      this.service.update(this.plan)
        .then(res => {
          if (SUCCESS_STATUS == res['status']) {
            this.plans = res['data'];
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }
    this.modalCreate.hide();
  }
  delete = (planId) => {
    this.service.delete(planId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          for (let index = 0; index < this.plans.length; index++) {
            if (this.plans[index].planId == planId) {
              this.plans.splice(index, 1);
            }
          };
          this.checkDataInList(this.plans);
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.title = "Create";
    this.plan = {
      content: "",
      description: "",
      endDate: "",
      krId: 0,
      planId: 0,
      startDate: ""
    };
    this.modalCreate.show();
  }
  openModalEdit = (plan) => {
    this.title = "Edit"; 
    this.plan = plan;
    this.modalCreate.show();
  }
  back = () => {
    window.history.back();
  }

  getPlan() {
    this.service.get(this.krId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.plans = res['data'];

        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  checkDataInList = (plans) => {
    if (plans.length > 0) {
      this.isNoData = true;
    } else {
      this.isNoData = false;
    }
  }
}

