import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';
import { UserListComponent } from './user-list/user-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './auth-guard-service.service';
import { AddProductComponent } from './add-product/add-product.component';
import { AddUserComponent } from './add-user/add-user.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'cart', component: ShoppingComponent},
  { path: 'categories', component: CategoriesComponent, canActivate: [AuthGuardService]},
  { path: 'users', component: UserListComponent},
  {path: 'productDetails/:id', component:ProductDetailsComponent},
  // { path: 'productDetails:id', component: ProductDetailsComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'addProduct', component: AddProductComponent},
  { path: 'addUser', component: AddUserComponent},
  { path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
