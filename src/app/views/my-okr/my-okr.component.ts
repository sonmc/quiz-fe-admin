import { Component, OnInit, ViewChild, } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AuthService } from '../../containers/services/auth/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ObjectiveService } from '../../containers/services/objective/objective.service';

@Component({
  templateUrl: 'my-okr.component.html'
})
export class MyOkrComponent implements OnInit {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  title: String = "Create";
  objectives: any;
  objective: Object = {
    objectiveName: "",
    description: "",
    employeeId: 0
  }
  myObjective: String = "myObjective";
  currentUser: any;
  constructor(public objectiveService: ObjectiveService, public authService: AuthService, public router: Router) { }
  ngOnInit(): void {
    this.currentUser = this.authService.getLocal();
    var myOkr = {
      employeeId: this.currentUser.employeeId,
      branchId: 0,
      departmentId: 0
    }
    this.objectiveService.get(myOkr)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.objectives = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  objectiveChanged(data) {
    if (data.action == "Update") {
      for (let index = 0; index < this.objectives.length; index++) {
        if (this.objectives[index].objectiveId == data.objective.objectiveId) {
          this.objectives[index] = data.objective;
        }
      }
    } else {
      this.objectives.push(data.objective);
    }
  }
}
