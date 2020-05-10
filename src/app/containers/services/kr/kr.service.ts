import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class KrService {

    constructor(public httpClient: HttpClient,
        public apiService: ApiService,
        public router: Router,
        public authService: AuthService) { }

    get = (data): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/get?objectiveId=${data.objectiveId}&employeeId=${data.employeeId}`;
            this.apiService.getWithToken(url).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }
    getDod = (krId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/getDod?krId=${krId}`;
            this.apiService.getWithToken(url).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }
    getEmployee = (teamId, branchId) => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}user/get?teamId=${teamId}&branchId=${branchId}`;
            this.apiService.getWithToken(url).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }
    create = (kr): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/create`;
            debugger
            this.apiService.postWithToken(url, kr)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    update = (kr): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/update`;
            this.apiService.postWithToken(url, kr)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    delete = (krId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/delete?krId=${krId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    checkin = (krId, weekId, weekValue) => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/checkin?krId=${krId}&weekId=${weekId}&weekValue=${weekValue}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}