import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-mainpage',
  templateUrl: './main-page.component.html',
  
})
export class MainPageComponent  {


  nuevo: Personaje = {
    nombre: 'maestro Roshi',
    poder: 11000
  }


  

  constructor(){}

}
