import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AuthService } from '../../containers/services/auth/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ObjectiveService } from '../../containers/services/objective/objective.service';

@Component({
  selector: 'app-objective',
  templateUrl: 'objective.component.html'
})
export class ObjectiveComponent implements OnInit {
  @Input() objectives: any;
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  title: String = "Create";
  objective: Object = {
    objectiveName: "",
    description: "",
    employeeId: 0
  }
  currentUser: any;
  constructor(public objectiveService: ObjectiveService, public authService: AuthService, public router: Router) { }
  ngOnInit(): void {
     console.log(this.objectives); 
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
  save = () => {
    this.objective['employeeId'] = this.currentUser.employeeId;
    if (this.title == "Create") {
      this.objectiveService.create(this.objective)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            this.objectives.push(res['data']);
            this.modalCreate.hide();
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    } else {
      this.objectiveService.update(this.objective)
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
    this.objectiveService.remove(objectiveId)
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

  goKrList = (objective) => {
    this.router.navigate(['/o-detail', objective.objectiveId,objective.objectiveName]);
  }
  back = () => {
    window.history.back();
  }
}
