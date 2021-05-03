import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private authorizeEndpoint = '/oauth2/authorization/google';
  private tokenEndpoint = '/login/oauth2/code/google';
  private baseUrl = 'http://localhost:8080/user';
  private tokenKey = 'token';

  constructor(private http: HttpClient) { }

  login(): void{
    window.open(this.baseUrl + this.authorizeEndpoint, '_self');
  }

  updateToken(token): void{
    localStorage.setItem(this.tokenKey, token);
  }

  fetchToken(code, state): Observable<any>{
    return this.http.get(this.baseUrl + this.tokenEndpoint + '?code=' + code + '&state=' + state);
  }

  getToken(): string{
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): boolean{
    const token = this.getToken();
    return token != null;
  }

  welcome(): Observable<any>{
    return this.http.get(`${this.baseUrl}/user`);
  }





}


