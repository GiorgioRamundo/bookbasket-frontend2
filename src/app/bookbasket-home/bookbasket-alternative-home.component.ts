import { Component, OnInit } from '@angular/core';
import {EventEmitterService} from '../event-emitter.service';

@Component({
  selector: 'app-bookbasket-alternative-home',
  templateUrl: './bookbasket-alternative-home.component.html',
  styleUrls: ['./bookbasket-alternative-home.component.css']
})
export class BookbasketAlternativeHomeComponent implements OnInit {
  title: string;

  constructor(
    private eventEmitterService: EventEmitterService
  ) { }

  ngOnInit(): void {
    this.title = '';
  }

  onSubmit(): void{
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
    container.appendChild(button);
    button.click();

  }

}
