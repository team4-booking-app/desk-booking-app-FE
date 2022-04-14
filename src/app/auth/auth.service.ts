import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://team4-backend-stage-app.herokuapp.com/authenticate';
  //private decodedToken: any;

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, ) {
    const token = localStorage.getItem('auth');
    this._isLoggedIn$.next(!!token);
  }

  login(userData: any): Observable<any>  {
    return this.http.post(this.url, userData).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth', response.token);
      })
    );
  }

  // private saveToken(token: any): any {
  //  // this.decodedToken = jwt.decodeToken(token);
  //   localStorage.setItem('auth_tkn', token);
  //   localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
  //   return token;
  // }

  public logout(): void {
    localStorage.removeItem('auth');


  }
}
