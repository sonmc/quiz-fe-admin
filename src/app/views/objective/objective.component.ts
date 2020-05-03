import { Component, OnInit, ViewChild } from '@angular/core';
import { MyOkrService } from '../../containers/services/myOkr/my-okr.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AuthService } from '../../containers/services/auth/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'objective.component.html'
})
export class ObjectiveComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  title: String = "Create";
  objectives: any;
  objective: Object = {
    objectiveName: "",
    description: "",
    employeeId: 0
  }
  currentUser: any;
  constructor(public myOkrService: MyOkrService, public authService: AuthService, public router: Router) { }
  ngOnInit(): void {
    this.currentUser = this.authService.getLocal();
    var myOkr = {
      employeeId: this.currentUser.employeeId,
      branchId: 0,
      departmentId: 0
    }
    this.myOkrService.get(myOkr)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.objectives = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.title = "Create";
    this.objective = {
      objectiveName: "",
      description: "",
      employeeId: 0
    }
    this.modalCreate.show()
  }
  openModalUpdate = (objective) => {
    this.title = "Update";
    this.objective = objective;
    this.modalCreate.show()
  }
  create = () => {
    this.objective['employeeId'] = this.currentUser.employeeId;

    if (this.title == "Create") {
      this.myOkrService.create(this.objective)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            this.objectives.push(res['data']);
            this.modalCreate.hide();
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    } else {
      this.myOkrService.update(this.objective)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            this.modalCreate.hide();
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }

  }
  remove = (objectiveId) => {
    this.myOkrService.remove(objectiveId)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          for (let index = 0; index < this.objectives.length; index++) {
            if (this.objectives[index].objectiveId == objectiveId) {
              this.objectives.splice(index, 1);
            }
          }
          this.modalCreate.hide();
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  goKrList = (objectiveId) => {
    this.router.navigate(['/kr', objectiveId]);
  }
  back = () => {
    window.history.back();
  }
}
