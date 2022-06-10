import { NgModule } from "@angular/core";
import { ContadorComponent } from './contado/contador.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations: [
        ContadorComponent,
    ],
    exports:[
        ContadorComponent,
    ],
    imports:[
        CommonModule
    ],
    

})

export class contadorModule{}