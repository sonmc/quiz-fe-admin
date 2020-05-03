import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { TeamService } from '../../containers/services/team/team.service';
import { Router } from '@angular/router';

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

  create = () => {
    this.team["branchId"] = parseInt(this.team["branchId"]);
    this.teamService.create(this.team)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          this.teams.push(res['data']);
          this.modalCreate.hide();
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  delete = (teamId) => {
    this.teamService.delete(teamId)
      .then(res => {
        if (res['status'] == SUCCESS_STATUS) {
          for (let index = 0; index < this.teams.length; index++) {
            if (this.teams[index].teamId == teamId) {
              this.teams.splice(index, 1);
            }
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }
  openModalCreate = () => {
    this.modalCreate.show()
  }

  goEmployee = (teamId) => {
    this.router.navigate(['/teamDetail', teamId]);
  }
}
