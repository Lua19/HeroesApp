import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe, Publisher } from '../../Interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [`img{
    width: 100%; border-radius: 5px;
  }`
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

  constructor(private heroService: HeroesService,
              private activatedRoute : ActivatedRoute,
              private router: Router) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.heroService.getHeroById(id)))
    .subscribe( hero => this.hero = hero );
  }
  save(){
    if (this.hero.superhero.trim().length === 0) {
      return;
    }

    if (this.hero.id) {
      this.heroService.updateHero(this.hero)
      .subscribe( hero => console.log("Updating ", hero))
    } else{

      this.heroService.addHero(this.hero)
      .subscribe(hero =>{
        this.router.navigate(['/heroes/editar', hero.id]);
      })
    }

  }
}
