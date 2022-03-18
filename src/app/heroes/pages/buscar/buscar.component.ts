import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../Interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  term: string = '';
  heroes: Heroe[] = []

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  search(){
    this.heroService.getHeroes().subscribe( heroes => this.heroes = heroes);
  }

}
