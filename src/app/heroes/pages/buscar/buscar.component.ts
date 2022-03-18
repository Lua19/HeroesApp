import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
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
  selectedHero !: Heroe | undefined;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  search(){
    this.heroService.getSuggestions(this.term.trim())
    .subscribe( heroes => this.heroes = heroes);
  }

  optionSelected(event:MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.selectedHero = undefined
      return
    }

    const hero: Heroe = event.option.value;
    this.term = hero.superhero

    this.heroService.getHeroById(hero.id!)
    .subscribe(heroe => this.selectedHero = heroe);
  }

}
