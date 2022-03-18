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
  selectedHero !: Heroe;

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }

  search(){
    this.heroService.getSuggestions(this.term).subscribe( heroes => this.heroes = heroes);
  }

  optionSelected(event:any){
    const hero: Heroe = event.option.value;
    this.term = hero.superhero

    this.heroService.getHeroById(hero.id!)
    .subscribe(heroe => this.selectedHero = heroe);
  }

}
