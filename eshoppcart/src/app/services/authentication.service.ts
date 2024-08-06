import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, UserCredential } from '@angular/fire/auth';
import { from, Observable, catchError, map, switchMap, of } from 'rxjs';
import { User, authState } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private auth: Auth) { }

  getCurrentUser(): Observable<User | null> {
    return authState(this.auth); // Firebase authState
  }

  getCurrentUserId(): Observable<string | null> {
    return this.getCurrentUser().pipe(
      map(user => user ? user.uid : null)
    );
  }

  login(email: string, password: string): Observable<UserCredential> {
    return from(signInWithEmailAndPassword(this.auth, email, password)).pipe(
      catchError(error => {
        console.error('Login error:', error.message);
        // Optionally, you can return a user-friendly error message here
        return of({} as UserCredential); // Handle login error gracefully
      })
    );
  }

  signUp(name: string, email: string, password: string): Observable<void> {
    return from(createUserWithEmailAndPassword(this.auth, email, password)).pipe(
      switchMap(({ user }) => {
        return from(updateProfile(user, { displayName: name })).pipe(
          map(() => undefined),
          catchError(error => {
            console.error('Signup error:', error.message);
            // Optionally, return an observable error for further handling
            return of(undefined);
          })
        );
      }),
      catchError(error => {
        console.error('Signup error:', error.message);
        // Optionally, return an observable error for further handling
        return of(undefined);
      })
    );
  }

  logout(): Observable<void> {
    return from(signOut(this.auth)).pipe(
      switchMap(() => this.getCurrentUserId()), // Ensure you get the current user ID
      switchMap(userId => {
        if (userId) {
          localStorage.removeItem(`Cart_${userId}`);
        }
        return of(void 0); // Return an observable of void to complete the stream
      }),
      catchError(error => {
        console.error('Logout error:', error.message);
        // Optionally, return an observable error for further handling
        return of(void 0);
      })
    );
  }
}
