import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsMatchValidator: true
      };
    }
    return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  loading = false;

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required,Validators.minLength(6)]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator() });

  

  constructor(
    private authservice: AuthenticationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {}

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  submit() {
    if (!this.signUpForm.valid) {
      console.log('Form is invalid');
      return;
    }
  
    const name = this.signUpForm.value.name as string;
    const email = this.signUpForm.value.email as string;
    const password = this.signUpForm.value.password as string;
  
    console.log('Signing up with', name, email, password);
    
    // Show loading snackbar
    let snackBarRef = this.snackBar.open('Signing up...', 'Dismiss', {
      duration: undefined // Makes the snackbar stay open
    });
  
    this.authservice.signUp(name, email, password).subscribe({
      next: () => {
        // Close the loading snackbar
        snackBarRef.dismiss();
        
        // Show success snackbar
        this.snackBar.open('Congrats, you are signed up!', 'Dismiss', {
          duration: 3000
        });
        
        console.log('Signup successful');
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        // Close the loading snackbar
        snackBarRef.dismiss();
        
        // Show error snackbar
        this.snackBar.open(`Error: ${err.message}`, 'Dismiss', {
          duration: 3000
        });
        
        console.error('Signup failed', err);
      }
    });
  }
}
