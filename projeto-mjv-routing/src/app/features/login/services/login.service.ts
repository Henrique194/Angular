import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  registeredUsers: Array<User> = [
    {
      name: 'Henrique Jorge',
      password: '123',
      registrationDate: new Date(),
    },
    {
      name: 'Robert Dawn',
      password: '',
      registrationDate: new Date(),
    },
    {
      name: 'Guilherme Silva',
      password: '',
      registrationDate: new Date(),
    },
  ]

  constructor() { }

  getRegisteredUsers(): Array<User> {
     return this.registeredUsers;
  }

  findRegisteredUser(name: string, password: string): User | undefined {
    return this.registeredUsers.find(user => user.name === name && user.password === password);
  }

}
