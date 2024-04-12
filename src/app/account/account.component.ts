import { Component } from '@angular/core';
import { AuthService, User } from '../auth.service';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [],
  templateUrl: './account.component.html'
})
export class AccountComponent {
  user: User;

  constructor(private _authService: AuthService) {
    this.user = _authService.loggedUser;
  }
}
