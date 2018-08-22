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

    this.heroes = this.sortHeroes(this.heroes);
  }

//get list of heroes
  getHeroes(): void {
   this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  sortHeroes(arr: Hero[]): Hero[]{
    arr.sort(
      function(a, b) {
         if (a.id !== b.id) {
          return a.name > b.name ? 1 : -1;
         }
         return a.id > b.id ? 1 : -1;
      });

      return arr;
  //   arr.sort(function(a, b){
  //     var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  //     if (nameA > nameB) //sort string ascending
  //         return -1 
  //     if (nameA < nameB)
  //         return 1
  //     return 0 //default return value (no sorting)
  // })
  // return arr;
    
  }

  
 
 


}
