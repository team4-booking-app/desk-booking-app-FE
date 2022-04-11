import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private uriseg = 'https://team4-backend-stage-app.herokuapp.com/api/v1/registration'; //backend port
  private decodedToken: any;

  constructor(private http: HttpClient) { }

  public register(userData: any): Observable<any> {
    const URI = this.uriseg + '/registration';
    return this.http.post(URI, userData);
  }

  public login(userData: any): Observable<any> {
    const URI = this.uriseg + '/login';
    return this.http.post(URI, userData).pipe(map(token => {
      return this.saveToken(token);
    }));
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }
}