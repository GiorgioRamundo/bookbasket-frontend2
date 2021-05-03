import { Component, OnInit } from '@angular/core';
import {Book} from '../book';
import {UserService} from '../user.service';
import {BookService} from '../book.service';
import {User} from '../user';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {

  user: User = new User();

  submitted = false;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user = new User();
}

  save(): void{
    this.userService.createUser(this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
  }

  onSubmit(): void{
    this.submitted = true;
    this.save();
  }

}
