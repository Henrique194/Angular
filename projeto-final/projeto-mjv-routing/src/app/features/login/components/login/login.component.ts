import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InitialStateLogin } from '../../models/initialStateLogin.modal';
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

  findUser(loginForm: FormGroup) {
    if(logState.firstTimeAcess) {
      logState.firstTimeAcess = false;
    }
    const name: string = loginForm.value.name;
    const password: string = loginForm.value.password;
    this.loginService.findRegisteredUser(name).subscribe( 
      user => {
        if(user) {
          sessionStorage.setItem('user', user.id.toString());
          logState.failLogin = false;
          this.router.navigateByUrl('/products');
          return user;
        }else {
          logState.failLogin = true;
          return undefined;
        }
      }
     );
  }
}

const logState: InitialStateLogin = {
  firstTimeAcess: true,
  failLogin: false,
}



export default logState;
