import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  book: Book = new Book();
  submitted = false;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  newBook(): void{
    this.submitted = false;
    this.book = new Book();
  }

  save(): void{
    this.bookService.createBook(this.book)
      .subscribe(data => console.log(data), error => console.log(error));
    this.book = new Book();
  }

  onSubmit(): void{
    this.submitted = true;
    this.save();
  }

}
