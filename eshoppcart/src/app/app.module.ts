import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatError, } from '@angular/material/form-field';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './component/pages/home/home.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent, //home component
    NavbarComponent, //header too
    ProductListComponent, //productlist component property
    HeaderComponent, HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    MatToolbar,
    MatIconModule,
    MatButtonModule,
    MatFormField,
    MatInput,
    MatError,
    MatSnackBarModule,
    FormsModule,
    SharedModule,
    HttpClientModule,
    
  ],
  providers: [
    provideAnimationsAsync(),
    provideFirebaseApp(() => initializeApp({"projectId":"eshopp-6e32f","appId":"1:1030596705094:web:77d4386a13b1d5606cc347","storageBucket":"eshopp-6e32f.appspot.com","apiKey":"AIzaSyABDukF0bP9f7fvwvWyOESiVTvOulNtJR0","authDomain":"eshopp-6e32f.firebaseapp.com","messagingSenderId":"1030596705094"})),
    provideAuth(() => getAuth())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
