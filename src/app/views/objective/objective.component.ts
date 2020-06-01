import { Component, OnInit, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { AuthService } from '../../containers/services/auth/auth.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { ObjectiveService } from '../../containers/services/objective/objective.service';
import { TeamService } from '../../containers/services/team/team.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-objective',
  templateUrl: 'objective.component.html',
  styleUrls: ['./objective.component.css']
})
export class ObjectiveComponent {
  @Input() objectives: any;
  @Input() teamId: Number;
  @Input() page: String;
  @Output() changeData = new EventEmitter();
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  title: String = "Create";
  objective: Object = {
    quarter: 1
  }
  type: Number;
  branchId: Number = 1;
  teams: any;
  currentUser: any;
  constructor(public objectiveService: ObjectiveService,
    public authService: AuthService,
    public router: Router,
    public teamService: TeamService, private toastr: ToastrService) {
    this.currentUser = this.authService.getLocal();
    this.getTeams(this.branchId);
  }
  getTeams = (branchId) => {
    this.teamService.getTeams(branchId)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.teams = res['data'];
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
      employeeId: 0,
      quarter: 1,
      teamId: this.teams[0].teamId
    }
    this.getPage();
    this.modalCreate.show()
  }
  openModalUpdate = (objective) => {
    this.getPage();
    this.title = "Update";
    Object.assign(this.objective, objective);
    this.modalCreate.show();
  }
  save = () => {
    this.objective['employeeId'] = this.teamId ? null : this.currentUser.employeeId;
    this.objective['teamId'] = this.teamId;
    if (this.title == "Create") {
      this.objectiveService.create(this.objective)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            this.changeData.emit({ action: "Create", objective: res["data"] });
            this.modalCreate.hide();
            this.toastr.success('Success', '');
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    } else {
      this.objectiveService.update(this.objective)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            this.modalCreate.hide();
            this.toastr.success('Success', '');
            this.changeData.emit({ action: "Update", objective: res["data"] });
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
          this.toastr.success('Success', '');
          this.modalCreate.hide();
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  goKrList = (objective) => {
    this.router.navigate(['/o-detail', objective.objectiveId, objective.objectiveName]);
  }
  back = () => {
    window.history.back();
  }
  onItemChange = (value) => {
    this.objective["quarter"] = value;
  }
  getPage = () => {
    if (this.page == "team" || this.page == "myObjective") {
      this.type = 1;
    } else if (this.page == "quarter") {
      this.type = 2;
    }
  }
}
