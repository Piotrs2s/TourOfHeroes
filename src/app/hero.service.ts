import { Injectable } from '@angular/core';
import {Hero} from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of} from 'rxjs';
import { MessageService} from './message.service';


@Injectable({
  providedIn: 'root'
})


export class HeroService {

  constructor(private messageService: MessageService) { }



  getHeroes(): Observable<Hero[]>{
    // send the message after fetching the heroes
    this.messageService.add('HeroService: feched heroes');
    return of (HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // send the message after fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

  // sortHeroes(arr: Hero[]): Hero[]{

  //   arr.sort(function(a, b){
  //     var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //         return -1 
  //     if (nameA > nameB)
  //         return 1
  //     return 0 //default return value (no sorting)
  // })
    
  // return arr;
    
  // }
  
}
