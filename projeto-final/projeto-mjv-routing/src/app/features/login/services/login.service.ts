import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { environment } from '../../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpClient: HttpClient ) { }

  getRegisteredUsers() {
     return this.httpClient.get<User[]>(environment.baseUserURL);
  }

  findRegisteredUser(email: string) {
    return this.httpClient.get<User>(environment.baseUserURL + 'user?email=' + email);
  }

}
