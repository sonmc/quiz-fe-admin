import { Component, OnInit } from '@angular/core';
import { UserService } from '../../containers/services/user/user.service';
import { SUCCESS_STATUS } from '../../containers/constants/config';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from '../../containers/services/team/team.service';
import { ToastrService } from 'ngx-toastr';
@Component({
    templateUrl: 'team-detail.component.html'
})
export class TeamDetailComponent implements OnInit {
    employees: any;
    users: any;
    objectives: any;
    employee: Object;
    teamId: Number;
    pageName: String = "team";
    teamName: String = "";
    branchId: Number;
    objective: Object = {};
    title: string = "Create";
    allUser: Array<any> = [];
    dataSelected: any = [];
    isAddMember: Boolean = true;
    options: any = {
        multiple: true
    };
    constructor(public userService: UserService,
        private actRoute: ActivatedRoute,
        public router: Router,
        public teamService: TeamService,
        public toastr: ToastrService
    ) {
        this.teamId = parseInt(this.actRoute.snapshot.params.id);
        this.teamName = this.actRoute.snapshot.params.name;
        this.branchId = 1;
    }

    ngOnInit(): void {
        this.getTeamMember();
        this.getObjOfTeam();
        this.getAllUser();

    }
    getAllUser = () => {
        this.userService.get(0, this.branchId)
            .then(res => {
                if (SUCCESS_STATUS == res['status']) {
                    let users = res["data"];
                    for (let index = 0; index < users.length; index++) {
                        let id = users[index].employeeId;
                        let userName = users[index].userName;
                        this.allUser.push({ id: id, text: userName, value: userName });
                    }
                }
            }).catch(e => {
                window.alert('Connection Error !');
            })
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
                    this.toastr.success('Success', '');
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
    back = () => {
        window.history.back();
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
    addMember = () => {
        this.isAddMember = !this.isAddMember;
    }
    cancel = () => {
        this.dataSelected = [];
        this.isAddMember = !this.isAddMember;
    }
}
