import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { LocalStorageService } from './../localStorage/localStorage.service';
import { Observable } from 'rxjs';


@Injectable()
export class ApiService {
  constructor(public httpClient: HttpClient, public localStorageService: LocalStorageService) {}

  get = (url) => {
    return this.httpClient.get(url);
  }

  post = (url, data) => {
    return this.httpClient.post(url, data);
  }

  postWithToken = (url, data): Observable<any> => {
    let user = this.localStorageService.get('user');
    let token = user ? user['token'] : null;
    let headers = new HttpHeaders();
    headers = headers.set('authorization', token);
    return this.httpClient.post(url, data, {headers});
  }

  getWithToken = (url): Observable<any> => {
    let user = this.localStorageService.get('user');
    let token = user ? user['token'] : null;
    let headers = new HttpHeaders();
    headers = headers.set('authorization', token);
    return this.httpClient.get(url, {headers});
  }

  uploadFileWithToken = (url, file): Observable<any> => {
    let user = this.localStorageService.get('user');
    let token = user ? user['token'] : null;
    let headers = new HttpHeaders();
    headers = headers.set('authorization', token);
    let form = new FormData();
    form.append('file', file);
    return this.httpClient.post(url, form, {headers});
  }
}
