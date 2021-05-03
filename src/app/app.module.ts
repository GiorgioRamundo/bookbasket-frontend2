import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { BookListComponent } from './book-list/book-list.component';
import { BookAddComponent } from './book-add/book-add.component';
import { BookbasketHomeComponent } from './bookbasket-home-2/bookbasket-home.component';
import { BookFindComponent } from './book-find/book-find.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BookbasketAlternativeHomeComponent } from './bookbasket-home/bookbasket-alternative-home.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginSuccessComponent } from './login-success/login-success.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { BasketListComponent } from './basket-list/basket-list.component';
import { ManageBasketComponent } from './manage-basket/manage-basket.component';
import { BasketBookListComponent } from './basket-book-list/basket-book-list.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookAddComponent,
    BookbasketHomeComponent,
    BookFindComponent,
    HeaderComponent,
    FooterComponent,
    BookbasketAlternativeHomeComponent,
    UserRegistrationComponent,
    UserLoginComponent,
    LoginSuccessComponent,
    UserHomeComponent,
    BasketListComponent,
    ManageBasketComponent,
    BasketBookListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
