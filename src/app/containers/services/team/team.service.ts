import { Injectable } from '@angular/core';

import { API_URL } from './../../constants/config';
import { ApiService } from './../api/api.service';

@Injectable({
    providedIn: 'root'
})

export class TeamService {

    constructor(public apiService: ApiService) { }

    get = (): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}team/get`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
