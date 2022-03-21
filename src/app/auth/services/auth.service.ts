import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
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



  login(){
    return this.http.get<Auth>(`${this.apiURL}/usuarios/1`)
    .pipe(
      tap(auth => this._authUser = auth),
      tap(auth => localStorage.setItem('id',auth.id))
    );
  }

  logout(){
    this._authUser = undefined;
  }
}
