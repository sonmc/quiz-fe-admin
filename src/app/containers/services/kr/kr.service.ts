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

    create = (objective: Object): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/create`;
            this.apiService.postWithToken(url, objective)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
