import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {User} from '../user';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-bookbasket-home',
  templateUrl: './bookbasket-home.component.html',
  styleUrls: ['./bookbasket-home.component.css']
})
export class BookbasketHomeComponent implements OnInit {

  username: string;
  userid: string;
  logged: boolean;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
      if (sessionStorage.getItem('logged') === 'true') {
          this.username = sessionStorage.getItem('username');
          this.userid = sessionStorage.getItem('userid');
          this.logged = true;
      }
  }

  onOpenModal(mode: string): void{
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'about'){
      button.setAttribute('data-target', '#aboutModal');
    }
    if (mode === 'login'){
      button.setAttribute('data-target', '#loginModal');
    }
    if (mode === 'logged'){
      button.setAttribute('data-target', '#loggedModal');
    }
    container.appendChild(button);
    button.click();

  }
}
