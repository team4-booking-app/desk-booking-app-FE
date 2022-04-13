import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });

  errors: any = [];

  get regPassword() {
    return this.regForm.get('password');
  }
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient) {}

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(RegExp('(?=.*[0-9])(?=.*[A-Z])')),
        ],
      ],
    });
  }

  onSubmit({ data }: { data: any }) {
    this.http
      .post(
        'https://team4-backend-stage-app.herokuapp.com/api/v1/registration',
        data
      )
      .subscribe((result: any) => {
        console.warn('result', result);
      });
    console.warn(data);
  }
}
