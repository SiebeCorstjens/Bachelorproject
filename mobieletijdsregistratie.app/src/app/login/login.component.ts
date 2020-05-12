import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/core/auth.service';
import { Subscription } from 'rxjs';
import { ErrorService } from '../services/others/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  subscription: Subscription;
  errorMessage: string;

  constructor(private authService: AuthService, private errorService: ErrorService) { }

  ngOnInit() {
    this.subscription = this.errorService.authError$.subscribe(error => {
      this.errorMessage = error;
    });
  }

  login() {
    this.authService.loginEmployer();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
