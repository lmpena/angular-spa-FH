import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
  ]
})
export class NavbarComponent  {

  heroe:any='';

  constructor (private _router: Router) {
    
  }

  buscarHeroe(txt:string) {
    if(txt.length>0) {
      this._router.navigate(['search', txt]);
    }
    
  }

}
