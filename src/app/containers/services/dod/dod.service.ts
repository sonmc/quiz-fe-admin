import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class DoDService {

    constructor(public httpClient: HttpClient,
        public apiService: ApiService,
        public router: Router,
        public authService: AuthService) { }

    get = (objectiveId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}dod/get?objectiveId=${objectiveId}`;
            this.apiService.getWithToken(url).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }
    create = (dod: Object): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}dod/create`;
            this.apiService.postWithToken(url, dod)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    update = (kr: Object): Promise<Object> => {
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
    delete = (dodId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}dod/delete?dodId=${dodId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
