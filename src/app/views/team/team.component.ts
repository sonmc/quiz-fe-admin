import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { TeamService } from '../../containers/services/team/team.service';

@Component({
  templateUrl: 'team.component.html'
})

export class TeamComponent {
  @ViewChild('modalCreate') modalCreate: ModalDirective;
  teams: any;
  departments: any;
  team: Object = {
    teamId: 0,
    teamName: "",
    departmentId: 1
  };
  branchId: Number = 1;
  departmentId: Number = 1;
  constructor(public teamService: TeamService) {
  }

  ngOnInit(): void {

    this.teamService.getTeams(this.departmentId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.teams = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
    this.teamService.getDepartment(this.branchId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.departments = res['data'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

  create = () => {
    this.team["departmentId"] = parseInt(this.team["departmentId"]);
    this.teamService.create(this.team)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.teams.push(res['data']);
          this.modalCreate.hide();
        } else {
          //   this.messageError = res['message'];
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.modalCreate.show()
  }
}
