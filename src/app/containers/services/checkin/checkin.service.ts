import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class CheckInService {

    constructor(public httpClient: HttpClient,
        public apiService: ApiService,
        public router: Router,
        public authService: AuthService) { }

    get = (branchId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}objective/getCheckIn?branchId=${branchId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }

    checkin = (week) => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}kr/checkin`;
            this.apiService.postWithToken(url, week)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
