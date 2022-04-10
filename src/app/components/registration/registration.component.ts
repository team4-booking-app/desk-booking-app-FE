import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.regForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          this.customPasswordValidator(),
        ],
      ],
    });
  }
  customPasswordValidator() {
    //   //ka cia idet?????
    //   const hasUpperCase = /[A-Z]+/.test(password);
    //   const hasNumeric = /[0-9]+/.test(password);
    //   const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    //   const hasSymbol = specialChars.test(password);
    //   const passwordValid = hasUpperCase && hasNumeric && hasSymbol;
    //   return !passwordValid ? true : false;
  }

  onSubmit({ data }: { data: any }) {
    this.http
      .post('http://localhost:8080/api/v1/registration', data)
      .subscribe((result: any) => {
        console.warn('result', result);
      });
    console.warn(data);
  }
}
