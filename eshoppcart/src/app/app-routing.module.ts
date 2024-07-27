import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HomeComponent } from './component/pages/home/home.component';
import { ProductPageComponent } from './component/pages/product-page/product-page.component';
import { CartPageComponent } from './component/pages/cart-page/cart-page.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'search/:searchTerm',component:HomeComponent},
  {path:'tag/:tag',component:HomeComponent},
  { path: 'product/:id', component: ProductPageComponent },
  {path: 'cart-page',component: CartPageComponent},

  { path: '', pathMatch: 'full' ,component:ProductListComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},
  {path: 'dashboard',component: DashboardComponent,
  },


  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

