import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';
import { AuthService } from './../auth/auth.service';

@Injectable({
    providedIn: 'root'
})

export class MyOkrService {

    constructor(public httpClient: HttpClient,
        public apiService: ApiService,
        public router: Router,
        public authService: AuthService) { }

    get = (myOkr): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}objective/get`;
            this.apiService.postWithToken(url, myOkr).subscribe(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
        })
    }
}
