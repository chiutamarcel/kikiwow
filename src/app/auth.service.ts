import { Injectable } from '@angular/core';

export interface User {
  id: number,
  username: string,
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedUser: User;

  constructor() { 
    this.loggedUser = {
      id: 1,
      username: "johndoe",
      email:"johndoe@gmail.com",
      password:"example123"
    };
  }
}
