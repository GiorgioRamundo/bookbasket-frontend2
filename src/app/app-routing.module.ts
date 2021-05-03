import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookFindComponent} from './book-find/book-find.component';
import {BookAddComponent} from './book-add/book-add.component';
import {BookbasketHomeComponent} from './bookbasket-home-2/bookbasket-home.component';
import {BookbasketAlternativeHomeComponent} from './bookbasket-home/bookbasket-alternative-home.component';
import {HeaderComponent} from './header/header.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {UserLoginComponent} from './user-login/user-login.component';
import {LoginSuccessComponent} from './login-success/login-success.component';
import {UserHomeComponent} from './user-home/user-home.component';
import {ManageBasketComponent} from './manage-basket/manage-basket.component';
import {BasketBookListComponent} from './basket-book-list/basket-book-list.component';

const routes: Routes = [
  {path: '', component: BookbasketHomeComponent},
  {path: 'home2', component: BookbasketAlternativeHomeComponent},
  {path: 'list', component: BookListComponent},
  {path: 'find', component: BookFindComponent},
  {path: 'add', component: BookAddComponent},
  {path: 'register', component: UserRegistrationComponent},
  {path: '', redirectTo: '\home', pathMatch: 'full'},
  {path: 'login', component: UserLoginComponent, pathMatch: 'full'},
  {path: 'login-success', component: LoginSuccessComponent, pathMatch: 'full'},
  {path: 'user-home', component: UserHomeComponent, pathMatch: 'full'},
  {path: 'my-baskets', component: ManageBasketComponent, pathMatch: 'full'},
  {path: 'basketBooks', component: BasketBookListComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
