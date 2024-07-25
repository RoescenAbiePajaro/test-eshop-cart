import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, UserCredential } from '@angular/fire/auth';
import { from, Observable, catchError, map, switchMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  constructor(private auth: Auth) { }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(error => {
        console.error('Login error:', error.message);
        throw error; // Re-throw to handle in the component
      })
    );
  }
  

  signUp(name: string, email: string, password: string): Observable<void> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => {
        // Update the user profile with the display name
        return from(updateProfile(user, { displayName: name })).pipe(
          map(() => undefined) // Transform result to void
        );
      }),
      catchError(error => {
        console.error('Signup error:', error.message);
        throw error; // Re-throw to handle in the component
      })
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      catchError(error => {
        console.error('Logout error:', error.message);
        throw error; // Re-throw to handle in the component
      })
    );
  }
}

