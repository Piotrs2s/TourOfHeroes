import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {HeroService} from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[];
  
  //Create heroService instance 
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  //Hero actually selected on list
  selectedHero: Hero;

//get list of heroes
  getHeroes(): void {
   this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }



  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
 //place for initialization logic 


}
