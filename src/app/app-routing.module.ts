import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUsersComponent } from './add-users/add-users.component';
import { CartComponent } from './cart/cart.component';
import { CartsComponent } from './carts/carts.component';
import { CatComponent } from './cat/cat.component';
import { CatsComponent } from './cats/cats.component';
import { DeleteCartComponent } from './delete-cart/delete-cart.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { ProtectedGuard } from './protected.guard';
import { UpdateCartComponent } from './update-cart/update-cart.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home', component:HomeComponent, title:'home'},
  {path:'products',canActivate:[ProtectedGuard], component:ProductsComponent, title:'Products'}, // معناها حسب الفاليو اللي راحعة بالجارد إذا ترو كمّل إذا فولس رح يوجه اليوزر لغير صفحة جسب الجارد إللي أنا عمتلها  canActivate:[ProtectedGuard] 
  {path: 'product/details/:id', canActivate:[ProtectedGuard] ,component: ProductComponent},
  {path: 'product/addProduct', component: AddProductComponent},
  {path: 'product/update/:id', component: UpdateProductComponent},
  {path: 'product/delete/:id', component: DeleteProductComponent},

  {path: 'cat/details/:cat', component: CatComponent},

  {path: 'login', component: LoginComponent ,title:'login'},
  {path: 'logout', component: LogoutComponent ,title:'logout'},
  {path: 'users',component:UsersComponent,title:'users'},
  {path: 'user/details/:id',component:UserComponent,title:'User Details'},
  {path: 'user/addUsers',component:AddUsersComponent,title:'Add users'},
  {path: 'user/update/:id',component:UpdateUserComponent,title:'update user'},
  {path: 'user/delete/:id',canActivate:[ProtectedGuard],component:DeleteUserComponent,title:'delete user'},

  {path: 'carts',component:CartsComponent,title:'carts'},
  {path: 'cart/delete/:id',component:DeleteCartComponent,title:'delete cart'},
  {path: 'cart/update/:id',component:UpdateCartComponent,title:'update cart'},
  {path: 'cart/details/:userId',canActivate:[ProtectedGuard],component:CartComponent,title:'cart'},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
