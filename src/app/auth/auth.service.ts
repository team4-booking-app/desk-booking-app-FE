import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private decodedToken: any;

  constructor(private http: HttpClient) { }

}

  
