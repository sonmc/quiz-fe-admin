import { Component, OnInit } from '@angular/core';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { KrService } from '../../containers/services/kr/kr.service';
import { TeamService } from '../../containers/services/team/team.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: 'checkin.component.html',
  styleUrls: ['./checkin.component.css']
})

export class CheckInComponent implements OnInit {
  teams: any;
  isCollapsed: boolean = false;
  isNoData: boolean = false;
  constructor(public teamService: TeamService, public krService: KrService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    var branchId = 1;
    this.teamService.getCheckin(branchId)
      .then(res => {
        if (SUCCESS_STATUS == res['status']) {
          this.teams = res['data'];
          if (this.teams.length > 0) {
            for (let i = 0; i < this.teams.length; i++) {
              this.teams[i].isCollapsed = false;
              for (let j = 0; j < this.teams[i].objectives.length; j++) {
                for (let k = 0; k < this.teams[i].objectives[j].krs.length; k++) {
                  var kr = this.teams[i].objectives[j].krs[k];
                  this.teams[i].objectives[j].krs[k].process = ((kr.currentValue / kr.targetValue) * 100) + "%";
                  this.teams[i].objectives[j].isEdit = false;
                }
              }
            }
          }
        }
      }).catch(e => {
        window.alert('Connection Error !');
      })
  }


  collapsed(team: any): void {
    for (let index = 0; index < this.teams.length; index++) {
      if (this.teams[index].teamId == team.teamId) {
        this.teams[index].isCollapsed = !this.teams[index].isCollapsed;
      }
    }
  }

  openEditer = (krId, week) => {
    for (let i = 0; i < this.teams.length; i++) {
      for (let o = 0; o < this.teams[i].objectives.length; o++) {
        for (let k = 0; k < this.teams[i].objectives[o].krs.length; k++) {
          if (this.teams[i].objectives[o].krs[k].krId == krId) {
            for (let w = 0; w < this.teams[i].objectives[o].krs[k].weeks.length; w++) {
              if (this.teams[i].objectives.krs[k].weeks[w].key == week) {
                this.teams[i].objectives.krs[k].weeks[w].isEdit = true;
              }
            }
          }
        }
      }
    }
  }
  hideEditer = (kr, w) => {
    this.krService.checkin(kr.krId, w.weekId, w.value).then(res => {
      if (!res['data']) {
        location.reload();
        this.toastr.success('Success', '');
      }
    }).catch(e => {
      window.alert('Connection Error !');
    })
    for (let i = 0; i < this.teams.length; i++) {
      for (let o = 0; o < this.teams[i].objectives.length; o++) {
        for (let k = 0; k < this.teams[i].objectives[o].krs.length; k++) {
          for (let w = 0; w < this.teams[i].objectives[o].krs[k].weeks.length; w++) {
            this.teams[i].objectives.krs[k].weeks[w].isEdit = false;
          }
        }
      }
    }
  }
}
