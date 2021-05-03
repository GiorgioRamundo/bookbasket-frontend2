import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  userid: string;
  logged: boolean;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    if (sessionStorage.getItem('logged') === 'true') {
      this.username = sessionStorage.getItem('username');
      this.userid = sessionStorage.getItem('userid');
      this.logged = true;
    }
  }

}
