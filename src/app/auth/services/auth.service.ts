import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiURL : string = environment.apiURL;
  private _authUser : Auth | undefined;
  
  get auth(): Auth{
    return {...this._authUser!}
  }
  constructor(private http: HttpClient) { }

  verifyAuth(): Observable <boolean>{
    if (!localStorage.getItem('token') ) {
      return of(false);
    }

    return this.http.get<Auth>(`${this.apiURL}/usuarios/1`)
    .pipe(
      map(auth => {
        this._authUser = auth
        return true
      })
      );
  }

  login(){
    return this.http.get<Auth>(`${this.apiURL}/usuarios/1`)
    .pipe(
      tap(auth => this._authUser = auth),
      tap(auth => localStorage.setItem('token',auth.id))
    );
  }

  logout(){
    this._authUser = undefined;
  }
}
