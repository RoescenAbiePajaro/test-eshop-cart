import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] // Corrected to styleUrls
})
export class LoginComponent implements OnInit {
  loading = false;

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private authservice: AuthenticationService,
    private router: Router,
    private snackBar: MatSnackBar
    ) {}

  ngOnInit(): void {}

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  submit() {
    if (!this.loginForm.valid) {
      return;
    }

    const { email, password } = this.loginForm.value;

    // Ensure email and password are strings
    const emailStr = email ? String(email) : '';
    const passwordStr = password ? String(password) : '';

    this.loading = true;

    this.authservice.login(emailStr, passwordStr).subscribe({
      next: () => {
        this.loading = false;
        this.snackBar.open('Login successful!', 'Close', { duration: 2000 });
        this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        this.loading = false;
        this.snackBar.open('Login failed. Please try again.', 'Close', { duration: 3000 });
        console.error('Login error:', error);
      }
      
    });
  }
}