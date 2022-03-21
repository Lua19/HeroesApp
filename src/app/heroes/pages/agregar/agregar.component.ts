import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../Interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  publishers = [
    {id: 'DC Comics',
     desc: 'DC - Comics'},
     {id: 'Marvel',
     desc: 'Marvel - Comics'}
  ]

  hero: Heroe = {
    superhero : '',
    alter_ego : '',
    first_appearance: '',
    characters: '',
    publisher: Publisher.DCComics,
    altImg: ''
  }

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {
  }
  save(){
    if (this.hero.superhero.trim().length === 0) {
      return;
    }
    this.heroService.addHero(this.hero)
    .subscribe(resp =>{
      console.log(resp);
      
    })
  }
}
