import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { API_URL } from '../../constants/config';

@Injectable({
  providedIn: 'root'
})

export class GroupService {
  constructor(public apiService: ApiService) { }
 
 
  get = ( ): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${API_URL}groups/get`;
      this.apiService.getWithToken(url)
        .subscribe(res => {
          resolve(res);
        }, err => {
          reject(err);
        })
    })
  } 
  
}