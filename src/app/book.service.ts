import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Book} from './book';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = 'http://localhost:8080/bookbasket';

  constructor(private http: HttpClient) { }

  // metodi per comunicare col backend
  getBooks(): Observable<any>{
    return this.http.get<any>(`${this.baseUrl}/books`);
  }

  createBook(book: any): Observable<any> {
    return this.http.post(`${this.baseUrl}` + `/books/add`, book);
  }

  findBookByTitle(title: any): Observable<any>{
    return this.http.get(`${this.baseUrl}/books/title/${title}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}` + `/books/delete`, {responseType: 'text'});
  }

  getBooksByBasket(basketId: any): Observable<any> {
    const username = sessionStorage.getItem('username');
    const password = sessionStorage.getItem('password');
    const headers = new HttpHeaders({authorization: 'Basic ' + btoa(username + ':' + password)});
    return this.http.get(`${this.baseUrl}` + `/auth/booksByBasket/${basketId}`, {headers});
  }
}
