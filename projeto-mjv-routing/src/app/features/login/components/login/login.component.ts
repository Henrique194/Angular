import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InitialStateLogin } from '../../models/initialStateLogin.modal';
import { User } from '../../models/user.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    name: new FormControl(),
    password: new FormControl(),
  });

  logState: InitialStateLogin = logState;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  ngOnInit(): void {

  }

  findUser(loginForm: FormGroup): User | undefined {
    if(logState.firstTimeAcess) {
      logState.firstTimeAcess = false;
    }
    const name: string = loginForm.value.name;
    const password: string = loginForm.value.password;
    const user = this.loginService.findRegisteredUser(name, password);
    if(user) {
      sessionStorage.setItem('user', user.name);
      logState.failLogin = false;
      this.router.navigateByUrl('/products');
      return user;
    } else {
      logState.failLogin = true;
      return undefined;
    }
  }
}

const logState: InitialStateLogin = {
  firstTimeAcess: true,
  failLogin: false,
}



export default logState;
