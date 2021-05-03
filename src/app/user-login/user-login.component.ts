import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {UserService} from '../user.service';
import {Route, Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  user: User = new User();
  username: string;
  password: string;
  message: any;

  constructor(private service: UserService, private route: Router) { }

  ngOnInit(): void {
  }

  login(): void{
    const response = this.service.loginUser(this.username, this.password);
    response.subscribe(
      user => {
        sessionStorage.setItem('logged', 'true');
        sessionStorage.setItem('username', user.username);
        sessionStorage.setItem('password', user.password);
        sessionStorage.setItem('userid', user.id);
        this.route.navigate(['/user-home']);
      }
    );
  }

  onSubmit(): void{
    this.login();
  }


}
