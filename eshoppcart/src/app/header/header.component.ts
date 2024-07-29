import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
searchText:string = '';
email: string = '';

constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.email = this.userService.getEmail();
  }
}