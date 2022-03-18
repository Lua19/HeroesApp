import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Heroe } from '../../Interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`img{width: 50%; border-radius: 5px;}`
  ]
})
export class HeroeComponent implements OnInit {

  hero!: Heroe;

  constructor(private activatedRoute:ActivatedRoute,
              private heroService: HeroesService,
              private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(switchMap(({id}) => this.heroService.getHeroById(id) ))
    .subscribe( hero => this.hero = hero)
  }

  goBack(){
    this.router.navigate(['/heroes/listado'])
  }

}
