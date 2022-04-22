import { Component, OnInit } from '@angular/core';

import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  isLoginFailed = false;
  infoMessage = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });

    this.activatedRouter.queryParams.subscribe((params) => {
      if (params['registered'] === 'success') {
        this.infoMessage = 'Registration Successful! Please Login!';
      }
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (token) => {
        this.router.navigate(['/overview'], {
          queryParams: { loggedin: 'success' },
        });
      },
      () => {
        this.isLoginFailed = true;
      }
    );
  }
}
