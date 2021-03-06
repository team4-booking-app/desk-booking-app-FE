import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'https://team4-backend-stage-app.herokuapp.com/authenticate';

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this._isLoggedIn$.asObservable();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('auth');
    this._isLoggedIn$.next(!!token);
  }

  public isLoggedIn(): boolean{
    return this._isLoggedIn$.value;
  }

  login(userData: any): Observable<any> {
    return this.http.post(this.url, userData).pipe(
      tap((response: any) => {
        this._isLoggedIn$.next(true);
        localStorage.setItem('auth', response.token);
      })
    );
  }

  public logout(): void {
    this.router.navigate(['/auth/login'], {
      queryParams: {loggedOut: 'success'},
    }).then(r =>{
      this._isLoggedIn$.next(false);
      localStorage.removeItem('auth');
    });
  }
}
