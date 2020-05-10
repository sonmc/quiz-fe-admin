import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../containers/services/user/user.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../containers/services/team/team.service';
import { ObjectiveService } from '../../containers/services/objective/objective.service';

@Component({
    templateUrl: 'team-detail.component.html'
})
export class TeamDetailComponent implements OnInit {
    @ViewChild('modalCreate') modalCreate: ModalDirective;
    employees: any;
    objectives: any;
    employee: Object;
    teamId: Number;
    branchId: Number;
    objective: Object = {};
    title: string = "Create";
    constructor(public userService: UserService,
        private actRoute: ActivatedRoute,
        public router: Router,
        public teamService: TeamService,
        public objectiveService: ObjectiveService
    ) {
        this.teamId = parseInt(this.actRoute.snapshot.params.teamId);
        this.branchId = 1;
    }

    ngOnInit(): void {
        this.getTeamMember();
        this.getObjOfTeam();
    }
    getTeamMember = () => {
        this.teamService.getTeamMember(this.teamId)
            .then(res => {
                if (SUCCESS_STATUS == res['status']) {
                    this.employees = res['data'];
                }
            }).catch(e => {
                window.alert('Connection Error !');
            })
    }
    getObjOfTeam = () => {
        var data = {
            teamId: this.teamId,
            employeeId: 0,
            branchId: 0
        }
        this.teamService.getObjOfTeam(data)
            .then(res => {
                if (SUCCESS_STATUS == res['status']) {
                    this.objectives = res["data"];
                }
            }).catch(e => {
                window.alert('Connection Error !');
            })
    }

    removeMember = (empId) => {
        this.teamService.removeMember(empId)
            .then(res => {
                if (res['status'] == SUCCESS_STATUS) {
                    for (let index = 0; index < this.employees.length; index++) {
                        if (this.employees[index].employeeId == empId) {
                            this.employees.splice(index, 1);
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
    goOList = (empId) => {
        this.router.navigate(['/objective', empId]);
    }
    back = () => {
        window.history.back();
    }
    save = () => {
        if (this.title == "Create") {
            this.objectiveService.create(this.objective)
                .then(res => {
                    if (res['status'] == SUCCESS_STATUS) {
                        for (let index = 0; index < this.employees.length; index++) {
                            if (this.employees[index].employeeId == this.objective) {
                                this.employees.splice(index, 1);
                            }
                        }
                    }
                }).catch(e => {
                    window.alert('Connection Error !');
                })
        } else {
            this.objectiveService.update(this.teamId)
                .then(res => {
                    if (res['status'] == SUCCESS_STATUS) {
                        for (let index = 0; index < this.employees.length; index++) {
                            if (this.employees[index].employeeId == this.objective) {
                                this.employees.splice(index, 1);
                            }
                        }
                    }
                }).catch(e => {
                    window.alert('Connection Error !');
                })
        }

    }
}
