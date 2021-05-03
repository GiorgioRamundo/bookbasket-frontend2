import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseUrl = 'http://localhost:8080/bookbasket';

  constructor(private http: HttpClient) { }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/register`, user);
  }

  loginUser(username: string, password: string): Observable<any>{
    const headers = new HttpHeaders({authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get(`${this.baseUrl}` + `/auth/login`, {headers});
  }
}
