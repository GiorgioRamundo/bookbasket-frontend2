import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {Observable} from 'rxjs';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Observable<Book[]>;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(): void{
    this.books = this.bookService.getBooks();
  }

  delete(): void{
    this.bookService.deleteAll()
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

}
