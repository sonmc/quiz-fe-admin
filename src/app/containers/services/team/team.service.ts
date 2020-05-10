import { Injectable } from '@angular/core';

import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';

@Injectable({
    providedIn: 'root'
})

export class TeamService {

    constructor(public apiService: ApiService) { }

    getTeamMember = (teamId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/getTeamMember?teamId=${teamId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    getTeams = (branchId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/get?branchId=${branchId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    create = (team: Object): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/create`;
            this.apiService.postWithToken(url, team)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    update = (team: Object): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/update`;
            this.apiService.postWithToken(url, team)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    delete = (teamId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/delete?teamId=${teamId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    removeMember = (empId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/removeMember?empId=${empId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    getObjOfTeam = (data): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}objective/get`;
            this.apiService.postWithToken(url, data)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
