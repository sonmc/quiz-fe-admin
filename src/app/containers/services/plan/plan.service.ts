import { Injectable } from '@angular/core';

import { API_URL } from '../../constants/config';
import { ApiService } from '../api/api.service';

@Injectable({
    providedIn: 'root'
})

export class PlanService {

    constructor(public apiService: ApiService) { }

    get = (krId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}plan/get?krId=${krId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    create = (plan: Object): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}plan/create`;
            this.apiService.postWithToken(url, plan)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    update = (plan: Object): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}plan/update`;
            this.apiService.postWithToken(url, plan)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
    delete = (planId): Promise<Object> => {
        return new Promise((resolve, reject) => {
            let url = `${API_URL}plan/delete?planId=${planId}`;
            this.apiService.getWithToken(url)
                .subscribe(res => {
                    resolve(res);
                }, err => {
                    reject(err);
                })
        })
    }
}
