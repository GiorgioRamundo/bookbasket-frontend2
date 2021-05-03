import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Book} from '../book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-basket-book-list',
  templateUrl: './basket-book-list.component.html',
  styleUrls: ['./basket-book-list.component.css']
})
export class BasketBookListComponent implements OnInit {
  books: Observable<Book[]>;
  username: string;
  basketId: any;

  constructor(private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.route.queryParams.subscribe(
      params => {
        this.basketId = params.basketId;
        this.reloadData();
      }
    );
  }

  reloadData(): void{
    this.books = this.bookService.getBooksByBasket(this.basketId);
  }

}
