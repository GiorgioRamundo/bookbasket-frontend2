import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-book-find',
  templateUrl: './book-find.component.html',
  styleUrls: ['./book-find.component.css']
})
export class BookFindComponent implements OnInit {

  title: string;
  books: Book[];
  found: boolean;

  constructor(private bookService: BookService,
              private eventEmitterService: EventEmitterService) {}

  ngOnInit(): void {
    this.title = '';
    this.found = false;
  }


  private searchBookByTitle(): void {
    this.bookService.findBookByTitle(this.title)
      .subscribe(books => this.books = books);
  }

  onSubmit(): void {
    this.found = true;
    this.searchBookByTitle();
  }

}
