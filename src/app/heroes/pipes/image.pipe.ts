import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../Interfaces/heroes.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(hero: Heroe): string {

    if (!hero.id && !hero.altImg) {
      return 'assets/no-image.png'
    }else if (hero.altImg) {
      return hero.altImg
    }

    return `assets/heroes/${hero.id}.jpg`;
  }

}
