import { Component } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { TeamService } from '../../containers/services/team/team.service';

@Component({
  templateUrl: 'team.component.html'
})
export class TeamComponent {

  teams: any;
  constructor(public teamService: TeamService) {
  }

  ngOnInit(): void { 
    this.teamService.get()
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.teams = res['data'];
        }

      }).catch(e => {
        window.alert('Connection Error !');
      })
  }

}
