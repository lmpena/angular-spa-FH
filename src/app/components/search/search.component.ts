import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from "../../servicios/heroes.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  heroes:any[]=[];
  txt:string='';

  constructor(private _activatedRoute: ActivatedRoute,
              private _heroesService:HeroesService,
              private _route:Router) {
  }

  ngOnInit(): void {
      this._activatedRoute.params.subscribe( params => {
        this.txt=params['txt'];
        this.heroes=this._heroesService.buscarHeroes(params['txt']);
      })
  }

  verHeroe(idx: number) {
    this._route.navigate(['/heroe', idx]);
  }
}
