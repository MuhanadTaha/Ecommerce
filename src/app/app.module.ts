import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { CatsComponent } from './cats/cats.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component';
import { CutTitlePipe } from './cut-title.pipe';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './search.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CatComponent } from './cat/cat.component';
import { AddProductComponent } from './add-product/add-product.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { LogoutComponent } from './logout/logout.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { CartsComponent } from './carts/carts.component';
import { CartComponent } from './cart/cart.component';
import { UniquePipe } from './unique.pipe';
import { UserProductsPipe } from './user-products.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AddUsersComponent } from './add-users/add-users.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { DeleteCartComponent } from './delete-cart/delete-cart.component';
import { UpdateCartComponent } from './update-cart/update-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    CatsComponent,
    ProductsComponent,
    CutTitlePipe,
    ProductComponent,
    SearchPipe,
    SpinnerComponent,
    LoginComponent,
    CatComponent,
    AddProductComponent,
    UsersComponent,
    UserComponent,
    LogoutComponent,
    UpdateProductComponent,
    CartsComponent,
    CartComponent,
    UniquePipe,
    UserProductsPipe,
    AddUsersComponent,
    DeleteProductComponent,
    DeleteUserComponent,
    UpdateUserComponent,
    DeleteCartComponent,
    UpdateCartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSlideToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
