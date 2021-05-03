import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  private baseUrl = 'http://localhost:8080/bookbasket';

  constructor(private http: HttpClient) { }

  getBaskets(username: any): Observable<any>{
    const password = sessionStorage.getItem('password');
    const headers = new HttpHeaders({authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get<any>(`${this.baseUrl}/auth/myBaskets`, {headers});
  }
}
