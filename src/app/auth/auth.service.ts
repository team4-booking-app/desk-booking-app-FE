import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:8080/authenticate';
  private decodedToken: any;

  constructor(private http: HttpClient, ) {}

  public login(userData: any): Observable<any>  {
    return this.http.post(this.url, userData).pipe(
      map((token) => {
        return this.saveToken(token);
      })
    );
  }

  private saveToken(token: any): any {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('auth_tkn', token);
    localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    return token;
  }
}
