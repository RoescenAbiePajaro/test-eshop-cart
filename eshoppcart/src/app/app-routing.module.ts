import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductListComponent } from './product-list/product-list.component';
import { canActivate, redirectUnauthorizedTo,redirectLoggedInTo } from '@angular/fire/auth-guard';


const redirectToLogin = () => redirectUnauthorizedTo(['dashboard']);
const redirectToDashboard = () => redirectLoggedInTo(['dashboard']);

const routes: Routes = [
  { path: '', pathMatch: 'full' ,component:ProductListComponent},
  { path: 'login', component: LoginComponent,...canActivate(redirectToLogin) },
  { path: 'signup', component: SignupComponent,...canActivate(redirectToLogin) },
  {path: 'productlist',component: ProductListComponent,...canActivate(redirectToLogin)},
  {
    path: 'dashboard',
    component: DashboardComponent,
    ...canActivate(redirectToLogin)
  },
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }

