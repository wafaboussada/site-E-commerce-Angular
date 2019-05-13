import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { CategoriesComponent } from './categories/categories.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [ 
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent},
  { path: 'cart', component: ShoppingComponent},
  { path: 'categories', component: CategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
