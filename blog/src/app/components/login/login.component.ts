import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  credentials = {
    login: '',
    password: ''
  };

  private logged;
  private logout;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  signIn() {
    return this.authService.authenticate(this.credentials).subscribe((
      result) => {
      if (!result) {
        this.logged = false;
      } else {
        this.logout = false;
        this.credentials = {
          login: '',
          password: ''
        };
        this.router.navigate(['/']);
      }
    });
  }

}
