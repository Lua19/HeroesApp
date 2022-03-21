import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe } from '../Interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = environment.apiURL;

  constructor(private http: HttpClient) { }

  getHeroes():Observable<Heroe[]> {
   return  this.http.get<Heroe[]>(`${this.baseUrl}/heroes`);
  }

  getHeroById(id: any): Observable<Heroe>{
    return  this.http.get<Heroe>(`${this.baseUrl}/heroes/${id}`);
  }
  getSuggestions(searchTerm: string): Observable<Heroe[]>{
    return  this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${searchTerm}&_limit=6`);
  }
  addHero(hero: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(`${this.baseUrl}/heroes`, hero)
  }
  updateHero(hero: Heroe): Observable<Heroe>{
    return this.http.put<Heroe>(`${this.baseUrl}/heroes/${hero.id}`, hero)
  }
}
