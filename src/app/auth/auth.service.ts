import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'https://team4-backend-stage-app.herokuapp.com/api/v1'; 
  private decodedToken: any;

  constructor(private http: HttpClient) { }

  public register(data: any): Observable<any> {
    const URI = this.url + '/registration';
    return this.http.post(URI, data);
  }

  // public login(data: any): Observable<any> {
  //   const URI = this.url + '/login';
  //   return this.http.post(URI, data).pipe(map(token => {
  //     return this.saveToken(token);
  //   }));
  }

  // private saveToken(token: any): any {
  //   this.decodedToken = jwt.decodeToken(token);
  //   localStorage.setItem('auth_tkn', token);
  //   localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
  //   return token;
  
