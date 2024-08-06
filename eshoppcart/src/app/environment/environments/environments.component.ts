import { Component } from '@angular/core';

@Component({
  selector: 'app-environments',
  templateUrl: './environments.component.html',
  styleUrl: './environments.component.css'
})
export class EnvironmentsComponent {

}
// src/environments/environment.ts
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'YOUR_API_KEY',
    authDomain: 'YOUR_AUTH_DOMAIN',
    projectId: 'YOUR_PROJECT_ID',
    storageBucket: 'YOUR_STORAGE_BUCKET',
    messagingSenderId: 'YOUR_MESSAGING_SENDER_ID',
    appId: 'YOUR_APP_ID'
  }
};
