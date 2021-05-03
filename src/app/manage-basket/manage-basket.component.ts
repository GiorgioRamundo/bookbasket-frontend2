import { Component, OnInit } from '@angular/core';
import {Basket} from '../basket';
import {Observable} from 'rxjs';
import {BasketService} from '../basket.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-basket',
  templateUrl: './manage-basket.component.html',
  styleUrls: ['./manage-basket.component.css']
})
export class ManageBasketComponent implements OnInit {

  baskets: Observable<Basket[]>;
  username: string;

  constructor(private basketService: BasketService, private router: Router) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.reloadData();
  }

  reloadData(): void{
    this.baskets = this.basketService.getBaskets(this.username);
  }

  showBooks(basketId: any): void{
    console.log(basketId);
    this.router.navigate(
      ['/basketBooks'] , {queryParams: basketId});
  }

}
