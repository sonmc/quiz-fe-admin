import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { TeamService } from '../../containers/services/team/team.service';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'team.component.html'
})

export class TeamComponent {
  @ViewChild('memberExist') memberExist: ModalDirective;
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  teams: any;
  title: String = "Create";
  departments: any;
  team: Object = {
    teamId: 0,
    teamName: "",
    branchId: 1
  };
  branchId: Number = 1;
  departmentId: Number = 1;
  constructor(public teamService: TeamService, public router: Router) {
  }

  ngOnInit(): void {

    this.teamService.getTeams(this.branchId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.teams = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  save = () => {
    this.team["branchId"] = parseInt(this.team["branchId"]);
    if (this.title == "Create") {
      this.teamService.create(this.team)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            this.teams.push(res['data']);
            this.modalCreate.hide();
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    } else {
      this.teamService.update(this.team)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            for (let index = 0; index < this.teams.length; index++) {
              if (this.teams[index].teamId == this.team["teamId"]) {
                this.teams[index] = this.team;
              }
            }
            this.modalCreate.hide();
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    }
  }
  delete = (team) => {
    if (team.members.length == 0) {
      this.teamService.delete(team.teamId)
        .then(res => {
          if (res['status'] == SUCCESS_STATUS) {
            for (let index = 0; index < this.teams.length; index++) {
              if (this.teams[index].teamId == team.teamId) {
                this.teams.splice(index, 1);
              }
            }
          }
        }).catch(e => {
          window.alert('Connection Error !');
        })
    } else {
      this.memberExist.show();
    }

  }

  openModalCreate = () => {
    this.title = "Create";
    this.modalCreate.show();
  }

  openModalUpdate = (team) => {
    this.title = "Update";
    this.team = Object.assign({}, team);
    this.modalCreate.show();
  }
  goEmployee = (teamId) => {
    this.router.navigate(['/teamDetail', teamId]);
  }
}
